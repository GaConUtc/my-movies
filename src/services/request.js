import axios from 'axios';

const request = axios.create({
    baseURL: 'https://ophim1.com/',
});

request.interceptors.response.use(
    (response) => response,
    (error) => handleError(error),
);

const handleError = (error) => {
    const errorResponse = error.response;
    if (errorResponse.status === 401) window.location('/login');
    return error;
};
export const requestGet = async (path, options) => {
    const res = await request.get(path, options);
    return res.data;
};

export default request;
