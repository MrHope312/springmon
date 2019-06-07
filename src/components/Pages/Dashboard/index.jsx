//Home Landing Page
import React, { Component } from 'react';
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { Layout } from 'antd';
// import Loading from "../Loading/Loading";
import { authActions } from "../../../actions";
class Dashboard extends Component {
    logoutHandler = () => {
        this.props.dispatch(authActions.logout());
    };
    // state = {  }
    render() {
        const userName = this.props.auth.user.name;
        return (
            <Layout>
                <a className="dropdown-item"
                    onClick={this.logoutHandler}
                    href="/">Logout</a>
                <h1>Hello<span>{ userName }</span>Welcome to Your Server A Dashboard</h1>
            </Layout>
        );
    }
}
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);




