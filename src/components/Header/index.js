import { Col, Row } from 'antd';
import logo from '../../source/logo.gif';
import './Header.scss';
import { Link } from 'react-router-dom';
const HeaderLayout = () => {
    const menuItems = [
        {
            title: 'Phim Bộ',
            slug: 'phim-bo',
        },
        {
            title: 'Phim Lẻ',
            slug: 'phim-le',
        },
        {
            title: 'Shows',
            slug: 'shows',
        },
        {
            title: 'Hoạt Hình',
            slug: 'hoat-hinh',
        },
        {
            title: 'Thể Loại',
            slug: 'the-loai',
        },
        {
            title: 'Quốc Gia',
            slug: 'quoc-gia',
        },
        {
            title: 'Sắp Chiếu',
            slug: 'sap-chieu',
        },
    ];

    return (
        <Row className="header">
            <Col span={4} className="header-left">
                <img src={logo} alt="Logo" />
            </Col>
            <Col span={20} className="header-right">
                <ul
                    className="ant-menu-overflow ant-menu ant-menu-root ant-menu-horizontal ant-menu-dark header-right__menu"
                    role="menu"
                    tabIndex={'0'}
                    data-menu-list="true"
                >
                    {menuItems.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child header-right__menu__item"
                            >
                                <Link to={`/${item.slug}`}>{item.title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </Col>
        </Row>
    );
};
export default HeaderLayout;
