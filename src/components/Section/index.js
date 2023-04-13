import { Col, Row } from 'antd';
import { CameraFilled, FacebookFilled, SettingFilled, DatabaseFilled } from '@ant-design/icons';
import React from 'react';

import './SectionPage.scss';
import SectionItem from './SectionItem';
const SectionPage = () => {
    return (
        <Row className="section-page container">
            <h4>
                Dữ liệu phim miễn phí vĩnh viễn. Cập nhật nhanh, chất lượng cao, ổn định và lâu dài. Tốc độ phát cực
                nhanh với đường truyền băng thông cao, đảm bảo đáp ứng được lượng xem phim trực tuyến lớn. Đồng thời
                giúp nhà phát triển website phim giảm thiểu chi phí của các dịch vụ lưu trữ và stream.
            </h4>
            <Col span={6}>
                <SectionItem icon={<CameraFilled />} title={'Phim cập nhập hôm nay'} desc={'5'} />
            </Col>
            <Col span={6}>
                <SectionItem icon={<DatabaseFilled />} title={'Tổng số lượng phim'} desc={'10'} />
            </Col>
            <Col span={6}>
                <SectionItem icon={<FacebookFilled />} title={'Cộng đồng ổ phim'} desc={''} />
            </Col>
            <Col span={6}>
                <SectionItem icon={<SettingFilled />} title={'Dành cho nhà phát triển'} desc={''} />
            </Col>
        </Row>
    );
};

export default SectionPage;
