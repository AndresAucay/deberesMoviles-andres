    import React from 'react';
    import { Layout, Menu } from 'antd';
    import { Link } from 'react-router-dom';
    import './menu.css'

    const { Header, Content, Footer } = Layout;

    interface MenuLayoutProps {
    children: React.ReactNode;
    }

    const MenuLayout: React.FC<MenuLayoutProps> = ({children }) => (
    <Layout>
        <Header className='nav'>
        <Menu  className='' theme="dark" mode="vertical">
            <Menu.Item className='btn1' key="1">
            <Link to="/page1">Page 1</Link>
            </Menu.Item>
            <Menu.Item  className='btn2' key="2">
            <Link to="/page2">Page 2</Link>
            </Menu.Item>
        </Menu>
        </Header>
        <Content>
        <div className="site-layout-content" >
        {children}
        </div>
        </Content>
    </Layout>
    );

    export default MenuLayout;
