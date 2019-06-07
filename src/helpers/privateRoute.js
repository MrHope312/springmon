import React from 'react';
import { Redirect, Route } from "react-router-dom";
import Header from "../components/Layouts/Header"
const PrivateRoute = ({ component: Component, ...rest }) => (
    < Route
        {...rest}
        render={props => (
            localStorage.getItem("user") ?
                <React.Fragment>
                    <Header />
                    <Component key={props.match.params.type} {...props} />
                </React.Fragment>
                :
                <Redirect to={{
                    pathname: "/login", state: {
                        from: props.location
                    }
                }} />
        )}
    />
);
export default PrivateRoute;
