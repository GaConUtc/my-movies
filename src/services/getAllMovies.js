import * as request from './request';

export const getMovies = async ({ ...param }) => {
    try {
        const res = await request.requestGet('danh-sach/phim-moi-cap-nhat', {
            params: { ...param },
        });
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const getMovieDetail = async ({ ...param }) => {
    try {
        const res = await request.requestGet(`phim/${param.slug}`);
        return res;
    } catch (err) {
        console.log(err);
    }
};
