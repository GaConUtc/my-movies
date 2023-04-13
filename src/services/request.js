import axios from 'axios';

const request = axios.create({
    baseURL: 'https://ophim1.com/danh-sach/',
});

export const requestGet = async (path, options) => {
    const res = await request.get(path, options);
    return res.data;
};

export default request;
