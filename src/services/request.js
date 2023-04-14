import axios from 'axios';

const request = axios.create({
    baseURL: 'https://ophim1.com/',
});

export const requestGet = async (path, options) => {
    console.log(options);
    const res = await request.get(path, options);
    return res.data;
};

export default request;
