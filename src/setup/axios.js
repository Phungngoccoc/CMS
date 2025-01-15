import axios from 'axios';
import { toast } from 'react-toastify';

const instance = axios.create({
    baseURL: 'https://0abb-58-186-129-165.ngrok-free.app',
});

instance.defaults.withCredentials = true;

instance.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (err) {
        const status = (err && err.response && err.response.status) || 500;
        switch (status) {
            case 401: {
                toast.error('Unauthorize user');
                return err && err.response.data;
            }

            case 403: {
                toast.error('You dont have permission to access this resource');
                return Promise.reject(err);
            }

            case 400: {
                return Promise.reject(err);
            }

            case 404: {
                return Promise.reject(err);
            }

            case 409: {
                return Promise.reject(err);
            }

            case 422: {
                return Promise.reject(err);
            }

            default: {
                return Promise.reject(err);
            }
        }
    },
);

export default instance;
