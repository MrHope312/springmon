//Home Landing Page
import React, { Component } from 'react';

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { authActions } from "../../../actions";
// import PropTypes from "prop-types";
// import jHeader from '../../Layouts/Header'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import Background from '../../Layouts/Background';
import styled from 'styled-components';
//custom js import
// import Loading from "../Loading/Loading";

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  min-height: 95vh;
  margin:1.2em;
  position: relative;
`;
const Parts = styled.div`
    position: relative;
    display: flex;
    justify-content: top;
    text-align:center;
`;



class Login extends Component {
    state = {
        username: "",
        password: "",
        submitted: false,
        loading: false
    };
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth) {
            const { loading } = nextProps.auth;
            this.setState({ loading });
        }
    }
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(authActions.login(username, password));
        }
    };
    // toggleRegister = e => {
    //     var res = this.state.toggleregister;
    //     this.setState({ toggleregister: !res });
    //     console.log('meow')
    // }

    render() {
        const { loggedIn } = this.props.auth;
        const { username, password } = this.state;


        return (
            <Background>
                <Container>
                    <Parts style={{ backgroundColor: '#eee', opacity: '0.5' }} />
                    <Parts style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <h1 style={{ textAlign: 'left', color: '#77C7D6', fontSize: '1.8em' }}>Welcome back</h1>
                        <h3 style={{ textAlign: 'left', color: '#B4B4BC' }}>Login to manage your server</h3>
                        <Form onSubmit={this.handleSubmit} style={{ width: '50%', textAlign: 'center' }}>
                            <Form.Item>
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                    name="username"
                                    value={username}
                                    onChange={this.handleChange}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={this.handleChange}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Parts style={{ flexDirection: 'column' }}>
                                    <Parts style={{ justifyContent: 'space-around' }}>
                                        <Checkbox>Remember me</Checkbox>
                                        <a href="/recovery">Forgot password</a>
                                    </Parts>
                                    <Parts style={{ justifyContent: 'space-around' }}>
                                        <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
                                        {loggedIn && <Redirect to="/dashboard" />}
                                        <Button href="/register">Register</Button>
                                        {/* {
                                            this.state.toggleregister ? (<h3 style={{ textAlign: 'left', color: '#B4B4BC' }}>Login to manage your server</h3>) : null
                                        } */}
                                    </Parts>
                                </Parts>
                            </Form.Item>
                        </Form>
                    </Parts>
                </Container>
            </Background >

        );
    }
}
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Login);
