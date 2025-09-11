import axios, {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from 'axios'

// 异常拦截处理器
const errorHandler = (error: AxiosError) => {
    return Promise.reject(error);
};

//开发环境走代理
let baseURL = import.meta.env.DEV ? '/proxy' : import.meta.env.VITE_BASE_API;
const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 60000,
    headers: {
        'content-type': 'application/json; charset=utf-8'
    }
})
//请求拦截
service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    config.headers = config.headers || {};
    config.headers['timezone'] = 'xxx'
    return config;
}, errorHandler)

service.interceptors.response.use((response: AxiosResponse) => {
    return new Promise((resolve, reject) => {
        if (response.status === 200) {
            resolve(response.data);
        } else {
            reject(response.data);
        }
    });
}, errorHandler)

export default service
