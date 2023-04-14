import { Row, Card } from 'antd';
import React from 'react';

import './DetailMovie.scss';
const DetailMovie = () => {
    const searchLocation = window.location.search;
    const slugName = searchLocation.replace('?slug=', '');

    return (
        <Row className="movie-detail container">
            <div className="movie-detail__thumb">
                <Card
                    hoverable
                    style={{ width: 235 }}
                    cover={
                        <img
                            alt="Movie_thumb"
                            src="https://img.ophim1.com/uploads/movies/ngoi-truong-xac-song-thumb.jpg"
                        />
                    }
                    actions={[<div>Xem phim</div>]}
                ></Card>
                {/* <div className="movie-detail__thumb__action">
                    <div>Xem phim</div>
                    <div>Lấy nguồn</div>
                    <div>API</div>
                </div> */}
            </div>
            <div className="movie-detail__infor">Information</div>
        </Row>
    );
};

export default DetailMovie;
