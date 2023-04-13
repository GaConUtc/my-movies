import { Row, Space, Table } from 'antd';
import React from 'react';

import './Home.scss';

const Home = () => {
    const columns = [
        {
            title: 'TÊN',
            dataIndex: 'name',
            render: () => (
                <Space size="middle">
                    <a>Delete</a>
                    <a>
                        <Space>More actions</Space>
                    </a>
                </Space>
            ),
        },
        {
            title: 'NĂM',
            dataIndex: 'year',
        },
        {
            title: 'TÌNH TRẠNG',
            dataIndex: 'status',
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
    const data = [
        {
            key: '1',
            name: 'John Brown',
            year: 2023,
            status: 'full',
            type: 'Phim Lẻ',
            country: 'New York No. 1 Lake Park',
            modifiedTime: '13/04/2023',
        },
        {
            key: '1',
            name: 'John Brown',
            year: 2023,
            status: 'full',
            type: 'Phim Lẻ',
            country: 'New York No. 1 Lake Park',
            modifiedTime: '13/04/2023',
        },
        {
            key: '1',
            name: 'John Brown',
            year: 2023,
            status: 'full',
            type: 'Phim Lẻ',
            country: 'New York No. 1 Lake Park',
            modifiedTime: '13/04/2023',
        },
        {
            key: '1',
            name: 'John Brown',
            year: 2023,
            status: 'full',
            type: 'Phim Lẻ',
            country: 'New York No. 1 Lake Park',
            modifiedTime: '13/04/2023',
        },
        {
            key: '1',
            name: 'John Brown',
            year: 2023,
            status: 'full',
            type: 'Phim Lẻ',
            country: 'New York No. 1 Lake Park',
            modifiedTime: '13/04/2023',
        },
        {
            key: '1',
            name: 'John Brown',
            year: 2023,
            status: 'full',
            type: 'Phim Lẻ',
            country: 'New York No. 1 Lake Park',
            modifiedTime: '13/04/2023',
        },
        {
            key: '1',
            name: 'John Brown',
            year: 2023,
            status: 'full',
            type: 'Phim Lẻ',
            country: 'New York No. 1 Lake Park',
            modifiedTime: '13/04/2023',
        },
        {
            key: '1',
            name: 'John Brown',
            year: 2023,
            status: 'full',
            type: 'Phim Lẻ',
            country: 'New York No. 1 Lake Park',
            modifiedTime: '13/04/2023',
        },
        {
            key: '1',
            name: 'John Brown',
            year: 2023,
            status: 'full',
            type: 'Phim Lẻ',
            country: 'New York No. 1 Lake Park',
            modifiedTime: '13/04/2023',
        },
        {
            key: '1',
            name: 'John Brown',
            year: 2023,
            status: 'full',
            type: 'Phim Lẻ',
            country: 'New York No. 1 Lake Park',
            modifiedTime: '13/04/2023',
        },
        {
            key: '1',
            name: 'John Brown',
            year: 2023,
            status: 'full',
            type: 'Phim Lẻ',
            country: 'New York No. 1 Lake Park',
            modifiedTime: '13/04/2023',
        },
    ];

    return (
        <Row className="container">
            <Table columns={columns} dataSource={data} size="middle" />
        </Row>
    );
};

export default Home;
