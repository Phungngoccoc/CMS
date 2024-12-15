import axios from 'axios';
import { toast } from 'react-toastify';

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'https://0abb-58-186-129-165.ngrok-free.app',
});

instance.defaults.withCredentials = true; //acept server edit cookie + tu dong them cookie moi lan gui req len server

// // Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;

// // Add a request interceptor
// instance.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     config.headers.Authorization = `Bearer ${localStorage.getItem('jwt')}`;
//     return config;
// }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
// });

// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    function (err) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const status = (err && err.response && err.response.status) || 500;
        // console.log(status)
        switch (status) {
            // authentication (token related issues)
            case 401: {
                toast.error('Unauthorize user');
                // window.location.href = '/login'
                return err && err.response.data;
            }

            // forbidden (permission related issues)
            case 403: {
                toast.error('You dont have permission to access this resource');
                return Promise.reject(err);
            }

            // bad request
            case 400: {
                return Promise.reject(err);
            }

            // not found
            case 404: {
                return Promise.reject(err);
            }

            // conflict
            case 409: {
                return Promise.reject(err);
            }

            // unprocessable
            case 422: {
                return Promise.reject(err);
            }

            // generic api error (server related) unexpected
            default: {
                return Promise.reject(err);
            }
        }
    },
);

export default instance;
