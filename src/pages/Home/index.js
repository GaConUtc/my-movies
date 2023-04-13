import { Row, Table } from 'antd';
import React, { useEffect, useState } from 'react';

import { getMovies } from '../../services/getAllMovies';
import './Home.scss';

const Home = () => {
    const [dataMovie, setDataMovie] = useState([]);
    const [pathImage, setPathImage] = useState('https://img.ophim1.com/uploads/movies/');
    useEffect(() => {
        const getData = async () => {
            const rsVal = await getMovies({ page: 1 });
            if (Object.keys(rsVal).length > 0) {
                setDataMovie([...rsVal.items]);
                setPathImage(rsVal.pathImage);
            }
        };
        getData();
    }, []);
    const columns = [
        {
            title: 'TÊN',
            dataIndex: 'name',
            render: (_, record) => (
                <div className="movie-name">
                    <img alt="Movie Thumb" className="movie-name__thumb" src={pathImage + record.thumb_url} />
                    <a className="movie-name__link">
                        <h3>{record.name}</h3>
                        <h4>{`(${record.origin_name})`}</h4>
                    </a>
                </div>
            ),
        },
        {
            title: 'NĂM',
            dataIndex: 'year',
        },
        {
            title: 'TÌNH TRẠNG',
            dataIndex: 'status',
            render: (text) => <span className="movie-status">{text}</span>,
        },
        {
            title: 'ĐỊNH DẠNG',
            dataIndex: 'type',
        },
        {
            title: 'QUỐC GIA',
            dataIndex: 'country',
        },
        {
            title: 'NGÀY CẬP NHẬT',
            dataIndex: 'modifiedTime',
        },
    ];
    console.log(dataMovie);
    const data = dataMovie?.map((item) => {
        return {
            key: item._id,
            status: 'Full',
            type: 'Phim Bộ',
            country: 'Hàn Quốc',
            modifiedTime: item.modified.time,
            ...item,
        };
    });
    console.log(data);
    return (
        <Row className="container">
            <Table columns={columns} dataSource={data} size="middle" />
        </Row>
    );
};

export default Home;
