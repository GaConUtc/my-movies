import { Row, Col } from 'antd';
import React from 'react';

const DetailMovie = () => {
    const searchLocation = window.location.search;
    const slugName = searchLocation.replace('?slug=', '');

    return (
        <Row className="movie-detail container">
            <Col span={4} className="movie-detail__thumb">
                Thumb
            </Col>
            <Col span={20} className="movie-detail__infor">
                Information
            </Col>
        </Row>
    );
};

export default DetailMovie;
