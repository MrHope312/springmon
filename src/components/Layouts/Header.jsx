import React from 'react';
// import { utilities } from "../../helpers";
// import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
//import css
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

const topHeader = (props) => {
    // const { headerTitle, type } = props;
    return (
    <Layout>
    <Helmet>
        {/* <title>{utilities.getPageTitle(headerTitle, type)}</title> */}
    </Helmet>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
    )
}

  
export default topHeader;
