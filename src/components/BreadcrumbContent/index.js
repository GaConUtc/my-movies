import { Breadcrumb } from 'antd';
import React from 'react';
import './BreadcrumbContent.scss';

const BreadcrumbContent = () => (
    <Breadcrumb
        className="breadcrumb container"
        routes={[
            {
                path: '/',
                breadcrumbName: 'Trang Chủ',
            },
            {
                path: '/',
                breadcrumbName: 'Phim Bộ',
            },
            {
                breadcrumbName: 'Trang 1',
            },
        ]}
    />
);

export default BreadcrumbContent;
