import { Row, Card, Col, Collapse } from 'antd';
import React, { useEffect, useState } from 'react';

import './DetailMovie.scss';
import { getMovieDetail } from '../../services/getAllMovies';
import MovieDescription from '../../components/MovieDetail/MovieDescription';

const { Panel } = Collapse;
const DetailMovie = () => {
    const searchLocation = window.location.search;
    const slugName = searchLocation.replace('?slug=', '');
    const [movieDetail, setMovieDetail] = useState({});
    const [movieCountry, setMovieCountry] = useState([]);
    const [movieCategory, setMovieCategory] = useState([]);
    const [movieEpisodes, setMovieEpisodes] = useState([]);

    const loadDetaiMovie = async () => {
        const dataMovie = await getMovieDetail({ slug: slugName });
        if (Object.keys(dataMovie).length > 0) {
            setMovieDetail({ ...dataMovie });
            setMovieCountry([...dataMovie.movie.country]);
            setMovieCategory([...dataMovie.movie.category]);
            setMovieEpisodes(dataMovie.episodes);
        }
    };

    useEffect(() => {
        loadDetaiMovie();
    }, [slugName]);
    return (
        <>
            <Row className="movie-detail container">
                <div className="movie-detail__thumb">
                    <Card
                        hoverable
                        style={{ width: 235 }}
                        cover={<img alt={movieDetail?.movie?.slug} src={movieDetail?.movie?.thumb_url} />}
                        actions={[<div>Xem phim</div>]}
                    ></Card>
                </div>
                <div className="movie-detail__infor">
                    <Row className="movie-detail__infor__name">
                        <h1>
                            {movieDetail?.movie?.name} {movieDetail?.movie?.lang ? `(${movieDetail?.movie?.lang})` : ''}
                        </h1>
                        <h2>The Real Has Come!</h2>
                    </Row>
                    <Row className="movie-detail__infor__main">
                        <Row className="movie-detail__infor__item">
                            <Col span={6}>Trạng thái</Col>
                            <Col span={18}>{movieDetail?.movie?.episode_current}</Col>
                        </Row>
                        <Row className="movie-detail__infor__item">
                            <Col span={6}>Số tập</Col>
                            <Col span={18}>{movieDetail?.movie?.episode_total}</Col>
                        </Row>
                        <Row className="movie-detail__infor__item">
                            <Col span={6}>Thời Lượng</Col>
                            <Col span={18}>{movieDetail?.movie?.time}</Col>
                        </Row>
                        <Row className="movie-detail__infor__item">
                            <Col span={6}>Năm Phát Hành</Col>
                            <Col span={18}>{movieDetail?.movie?.year}</Col>
                        </Row>
                        <Row className="movie-detail__infor__item">
                            <Col span={6}>Chất Lượng</Col>
                            <Col span={18}>{movieDetail?.movie?.quality}</Col>
                        </Row>
                        <Row className="movie-detail__infor__item">
                            <Col span={6}>Ngôn Ngữ</Col>
                            <Col span={18}>{movieDetail?.movie?.lang}</Col>
                        </Row>
                        <Row className="movie-detail__infor__item">
                            <Col span={6}>Đạo Diễn</Col>
                            <Col span={18}>{movieDetail?.movie?.director?.join(', ')}</Col>
                        </Row>
                        <Row className="movie-detail__infor__item">
                            <Col span={6}>Diễn Viên</Col>
                            <Col span={18}>{movieDetail?.movie?.actor?.join(', ')}</Col>
                        </Row>
                        <Row className="movie-detail__infor__item">
                            <Col span={6}>Thể Loại</Col>
                            <Col span={18}>{movieCategory?.map((item) => item.name).join(', ')}</Col>
                        </Row>
                        <Row className="movie-detail__infor__item">
                            <Col span={6}>Quốc Gia</Col>
                            <Col span={18}>{movieCountry?.map((item) => item.name).join(', ')}</Col>
                        </Row>
                    </Row>
                </div>
            </Row>
            <>
                {Array.isArray(movieEpisodes) && movieEpisodes.length ? (
                    <MovieDescription
                        episodes={movieEpisodes}
                        content={movieDetail?.movie?.content}
                        name={movieDetail?.movie?.name}
                    />
                ) : (
                    ''
                )}
            </>
        </>
    );
};

export default DetailMovie;
