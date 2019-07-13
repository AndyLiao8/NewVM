import axios from 'axios';
import queryString from 'querystring';
import { CancelTokenSource} from 'axios/index'

const handleNetwork = axiosPromise => new Promise((resolve, reject) => {
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
    path:string;
    timeout: number;
    source: CancelTokenSource;

    constructor(path: string, timeout?: number) {
      this.path = path;
      this.timeout = timeout || 3e4;
      this.source = axios.CancelToken.source();
    }
  
    get(params: any) {
        let url = this.path;
        if (params) {
            url = `${url}?${queryString.encode(params)}`;
        }
        return handleNetwork(axios.get(url, {
            headers: {
            Accept: 'application/json',
            },
        }));
    }
  
    post(data) {

    }

    put(data) {

    }

    delete(data) {
        
    }
  }

  export default RestClient;