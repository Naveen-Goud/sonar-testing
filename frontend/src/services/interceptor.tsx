import API from './API';

API.interceptors?.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        console.log(config)
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
