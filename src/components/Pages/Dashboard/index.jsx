//Home Landing Page
import React, { Component } from 'react';
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import { authActions, itemsActions } from "../../../actions";
import { Layout, Menu, Breadcrumb, Icon} from 'antd';
// const { SubMenu } = Menu;

const { Header, Content, Sider } = Layout;
class Dashboard extends Component {
    state = {
        urldata: ''
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth) {
            const { loading } = nextProps.auth;
            this.setState({ loading });
        }
    }
    getItems = (e, urldata) => {
        const { dispatch } = this.props;
        console.log(urldata)
        dispatch(itemsActions.getItem(urldata));
    }
    logoutHandler = () => {
        this.props.dispatch(authActions.logout());
    };

    render() {
        const userName = this.props.auth.user.uname;
        // const itemData = this.state;
        let sidebaritems = ['health', 'auditevents', 'beans', 'caches', 'conditions', 'config props', 'env', 'info', 'loggers', 'heap dump', 'thread dump', 'metrics', 'scheduled tasks', 'httptrace', 'mappings', 'jolokia']
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
                        <Menu.Item key="3"><a href="/servers">Servers</a></Menu.Item>
                        <Menu.Item key="4"><a className="dropdown-item"
                            onClick={this.logoutHandler}
                            href="/">Logout</a></Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
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
                            {/* {toDisplay} */}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    // itemData: state.itemData
});

export default connect(mapStateToProps)(Dashboard);




