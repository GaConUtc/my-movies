import { Breadcrumb } from 'antd';
import React from 'react';
import './BreadcrumbContent.scss';

const BreadcrumbContent = () => (
    <Breadcrumb
        className="breadcrumb container"
        items={[
            {
                title: 'Trang Chủ',
            },
            {
                title: 'Phim Bộ',
            },
            {
                title: 'Trang 1',
            },
        ]}
    />
);

export default BreadcrumbContent;
