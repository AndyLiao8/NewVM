import axios, { AxiosRequestConfig } from 'axios';
import queryString from 'querystring';
import { APIDomain } from 'src/config';
import { getToken } from 'src/vm.infrastructure/store/buildStore';

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

const getAxiosConfig = (timeout: number = 3e4): AxiosRequestConfig => ({
    baseURL: APIDomain,
    timeout,
    headers: {
        Authorization: `Bearer ${getToken()}`,
        Accept: 'application/json',
    },
});

export const httpGet = (resources: string, params = null) => {
    let url = resources;
    if (params) {
        url = `${url}?${queryString.encode(params)}`;
    }
    return handleNetwork(axios.get(url, getAxiosConfig()));
};

export const httpPost = (resources: string, params) => {
    return handleNetwork(axios.post(resources, params, getAxiosConfig()));
};

export const httpPut = (resources: string, params) => {
    return handleNetwork(axios.put(resources, params, getAxiosConfig()));
};

export const httpDelete = (resources: string, params = null) => {
    let config = getAxiosConfig();
    if (params) {
        config.data = params;
    }
    return handleNetwork(axios.delete(resources, {
        data: params
    }));
};