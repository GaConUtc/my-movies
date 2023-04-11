import { Breadcrumb, Layout, Menu, theme } from 'antd';
import logo from '../../source/logo.gif';
const { Header, Content, Footer } = Layout;
const HeaderLayout = () => {
    const menuItems = ['Phim Bộ', 'Phim Lẻ', 'Shows', 'Hoạt Hình', 'Thể Loại', 'Quốc Gia', 'Sắp Chiếu'];
    return (
        <Header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
            }}
        >
            <div
                style={{
                    float: 'left',
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.2)',
                }}
            >
                <img style={{ height: '100%' }} src={logo} alt="Logo" />
            </div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={'0'}
                items={menuItems.map((item, index) => ({
                    key: index,
                    label: item,
                }))}
            />
        </Header>
    );
};
export default HeaderLayout;
