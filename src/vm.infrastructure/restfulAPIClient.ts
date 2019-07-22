import axios from 'axios';
import queryString from 'querystring';
import { CancelTokenSource} from 'axios'

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
    API:string;
    timeout: number;
    source: CancelTokenSource;
    token: string;

    constructor(API: string, token: string, timeout?: number) {
      this.API = API;
      this.timeout = timeout || 3e4;
      this.source = axios.CancelToken.source();
      this.token = token;
    }
  
    get(params = null) {
        let url = this.API;
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
  
    post(params) {
        return handleNetwork(axios.post(this.API, params, {
            headers: {
                Authorization: `Bearer ${this.token}`,
                Accept: 'application/json',
            },
        }));
    }

    put(params) {
        return handleNetwork(axios.put(this.API, params, {
            headers: {
                Authorization: `Bearer ${this.token}`,
                Accept: 'application/json',
            },
        }));
    }

    delete(params = {}) {
        return handleNetwork(axios.delete(this.API, {
            headers: {
                Authorization: `Bearer ${this.token}`,
                Accept: 'application/json',
            },
            data: params
        }));
    }
  }

  export default RestClient;