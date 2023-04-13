import { Col, Row } from 'antd';
import React from 'react';

import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer container">
            <Row>
                <p>
                    Tất cả nội dung của trang web này được thu thập từ các trang web video chính thống trên Internet, và
                    không cung cấp phát trực tuyến chính hãng. Nếu quyền lợi của bạn bị vi phạm, vui lòng thông báo cho
                    chúng tôi, chúng tôi sẽ xóa nội dung vi phạm kịp thời, cảm ơn sự hợp tác của bạn!
                </p>
            </Row>
            <Row className="r-footer">
                <div className="rc-footer">
                    <p>Copyright © 2022 OPhim.TV</p>
                </div>
                <div className="rc-footer">
                    <a href="#">Giới Thiệu</a>
                </div>
                <div className="rc-footer">
                    <a href="#">Khiếu nại bản quyền</a>
                </div>
                <div className="rc-footer">
                    <a href="#">API</a>
                </div>
            </Row>
        </div>
    );
};

export default Footer;
