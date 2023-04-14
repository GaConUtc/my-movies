import { Pagination, Row, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import moment from 'moment';

import { getMovies } from '../../services/getAllMovies';
import './Home.scss';

const Home = () => {
    const [dataMovie, setDataMovie] = useState([]);
    const [pathImage, setPathImage] = useState('https://img.ophim1.com/uploads/movies/');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItem, setTotalItem] = useState(1);
    const [loadingTable, setLoadingTable] = useState(true);

    const getData = async () => {
        const rsVal = await getMovies({ page: currentPage });
        if (Object.keys(rsVal).length > 0) {
            setDataMovie([...rsVal.items]);
            setPathImage(rsVal.pathImage);
            setTotalItem(rsVal.pagination.totalItems);
            setLoadingTable(false);
        }
    };

    useEffect(() => {
        getData();
    }, [currentPage]);

    const onChangePage = (page) => {
        setCurrentPage(page);
    };

    const columns = [
        {
            title: 'TÊN',
            dataIndex: 'name',
            className: 'highlight-top-border',
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
            className: 'highlight-top-border',
        },
        {
            title: 'TÌNH TRẠNG',
            dataIndex: 'status',
            className: 'highlight-top-border',
            render: (text) => <span className="movie-status">{text}</span>,
        },
        {
            title: 'ĐỊNH DẠNG',
            dataIndex: 'type',
            className: 'highlight-top-border',
        },
        {
            title: 'QUỐC GIA',
            dataIndex: 'country',
            className: 'highlight-top-border',
        },
        {
            title: 'NGÀY CẬP NHẬT',
            dataIndex: 'modifiedTime',
            className: 'highlight-top-border',
            render: (text) => <span>{moment(text).format('DD-MM-YYYY hh:mm:ss', true)}</span>,
        },
    ];

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
    return (
        <>
            <Row className="container">
                <Table columns={columns} dataSource={data} size="middle" loading={loadingTable} pagination={false} />
            </Row>
            <Row className="container table-movie">
                <Pagination
                    total={totalItem}
                    onChange={onChangePage}
                    showTotal={(total, range) => `Đang xem ${range[0]} - ${range[1]} | Tổng ${total} Kết quả`}
                    defaultPageSize={24}
                    defaultCurrent={currentPage}
                    showSizeChanger={false}
                />
            </Row>
        </>
    );
};

export default Home;
