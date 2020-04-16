import React from "react";
import { connect } from "react-redux"
import { Redirect, Route, withRouter} from "react-router-dom"

const mSTP = (state) => ({
    signedIn: Boolean(state.session.currentUser)  
});

const Auth = ({signedIn, path, component: Component}) => (
    <Route path={path}
    render={props => ( 
        signedIn ?  <Redirect to="/" />  :  <Component {...props} /> 
    )}
        />
)

const Protected = ({signedIn, path, component: Component }) => (
    <Route 
        path={path}
        render={props => (
            signedIn ? <Component {...props} /> : <Redirect to="/signup" />
        )} 
    />
)

export const AuthRoute = withRouter(connect(mSTP)(Auth))
export const ProtectedRoute = withRouter(connect(mSTP)(Protected))
