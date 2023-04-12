import { Col, Menu, Row } from 'antd';
import logo from '../../source/logo.gif';
import './Header.scss';
import { Link } from 'react-router-dom';
const HeaderLayout = () => {
    const menuItems = ['Phim Bộ', 'Phim Lẻ', 'Shows', 'Hoạt Hình', 'Thể Loại', 'Quốc Gia', 'Sắp Chiếu'];
    return (
        <Row className="header">
            <Col span={4} className="header-left">
                <img src={logo} alt="Logo" />
            </Col>
            <Col span={20} className="header-right">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={'0'}
                    items={menuItems.map((item, index) => ({
                        key: index,
                        label: item,
                    }))}
                />
            </Col>
        </Row>
    );
};
export default HeaderLayout;
