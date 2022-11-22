import './App.css';
import { Breadcrumb, Layout, Menu } from 'antd';
import HeaderLayout from './components/Header';

const { Header } = Layout;
function App() {
    const headerLayout = <HeaderLayout></HeaderLayout>;
    return (
        <Layout className="layout">
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    items={[
                        {
                            key: 1,
                            label: headerLayout,
                        },
                    ]}
                />
            </Header>
        </Layout>
    );
}

export default App;
