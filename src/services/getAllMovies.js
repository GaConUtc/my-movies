import * as request from './request';

export const getMovies = async ({ ...param }) => {
    try {
        const res = await request.requestGet('phim-moi-cap-nhat', {
            params: { ...param },
        });
        return res;
    } catch (err) {
        console.log(err);
    }
};
