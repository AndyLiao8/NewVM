import axios from 'axios';
import queryString from 'querystring';
import { CancelTokenSource} from 'axios'
import { APIDomain } from 'src/config';

export interface IResponse {
    isSuccess: boolean;
    message: string;
    data: any;
}

const handleNetwork = axiosPromise => new Promise<IResponse>((resolve, reject) => {
    axiosPromise.then(response => resolve(response.data))
    .catch((error) => {
        if (error.response) {
            reject(Object.assign({}, error.response.data, {
            netStatus: error.response.status,
            }));
        } else {
            reject(error);
        }
    });
});
class RestClient {
    /* propos */
    timeout: number;
    private source: CancelTokenSource;
    private token: string;

    constructor(token: string, timeout?: number) {
      this.timeout = timeout || 3e4;
      this.source = axios.CancelToken.source();
      this.token = token || null;
    }
  
    get(resources: string, params = null) {
        let url = `${APIDomain}/${resources}`;
        if (params) {
            url = `${url}?${queryString.encode(params)}`;
        }
        return handleNetwork(axios.get(url, {
            headers: {
                Authorization: `Bearer ${this.token}`,
                Accept: 'application/json',
            },
        }));
    }
  
    post(resources: string, params) {
        return handleNetwork(axios.post(`${APIDomain}/${resources}`, params, {
            headers: {
                Authorization: `Bearer ${this.token}`,
                Accept: 'application/json',
            },
        }));
    }

    put(resources: string, params) {
        return handleNetwork(axios.put(`${APIDomain}/${resources}`, params, {
            headers: {
                Authorization: `Bearer ${this.token}`,
                Accept: 'application/json',
            },
        }));
    }

    delete(resources: string, params = {}) {
        return handleNetwork(axios.delete(`${APIDomain}/${resources}`, {
            headers: {
                Authorization: `Bearer ${this.token}`,
                Accept: 'application/json',
            },
            data: params
        }));
    }
  }

  export default RestClient;