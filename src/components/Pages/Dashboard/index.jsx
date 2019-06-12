//Dashboard Page
import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { authActions, dashboardActions } from "../../../actions";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Sider } = Layout;
class Dashboard extends Component {
    state = {
        urldata: '',
        dashboard: {}
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ dashboard: nextProps.dashboard.dashboard})
        console.log(nextProps.dashboard.dashboard,"component receive next props")
    }
    getItems = (e, urldata) => {
        const { dispatch } = this.props;
        dispatch(dashboardActions.getItem(urldata));
    }
    logoutHandler = () => {
        this.props.dispatch(authActions.logout());
    };

    render() {
        const userName = this.props.auth.user.uname;
        const { dashboard } = this.state;
        // console.log(item.item,"data of item")
        let sidebaritems = ['health', 'auditevents', 'beans', 'caches', 'conditions', 'configprops', 'env', 'info', 'loggers', 'heap dump', 'thread dump', 'metrics', 'scheduled tasks', 'httptrace', 'mappings', 'jolokia']
        return (
            <Layout>
                <Header className="header">
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px', float: 'right' }}
                    >
                        <Menu.Item key="1">Home</Menu.Item>
                        <Menu.Item key="2">{userName}</Menu.Item>
                        <Menu.Item key="3"><Link to="/servers">Servers</Link></Menu.Item>
                        <Menu.Item key="4"><Link className="dropdown-item"
                            onClick={this.logoutHandler}
                            to="/">Logout</Link></Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['0']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            {sidebaritems.map((item, index) => (
                                <Menu.Item key={index}
                                    onClick={(event) => this.getItems(event, item)} value={item.value}>
                                    <Icon type="user" /><span>{item}</span>
                                </Menu.Item>
                            ))}
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <h1>{JSON.stringify(dashboard)}</h1>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth,
        dashboard: state.dashboard
    };
};



export default connect(mapStateToProps)(Dashboard);




