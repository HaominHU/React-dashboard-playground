import axios from 'axios';
import { redirect } from "next/navigation";
import {envConfig} from "@/app/lib/envConfig";
import { cookies } from 'next/headers';

const axiosInterceptorInstance = axios.create(
    {
        baseURL: envConfig.apiEndpoint,
        timeout: 1000
    }
);

axiosInterceptorInstance.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json';
        console.log('userToken', cookies().get('userToken'));
        if (cookies().get('userToken')) {
            config.headers['X-Auth-Token'] = cookies().get('userToken');
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axiosInterceptorInstance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status === 401) {
            console.log('401 unauthorized');
            redirect('/');
        }

        if (error.response.status === 403) {
            console.log('403 forbidden');
            redirect('/');
        }
        return Promise.reject(error);
    }
);

export default axiosInterceptorInstance;
