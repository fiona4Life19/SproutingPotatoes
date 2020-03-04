import {connect} from "react-redux";
import {signin} from "../../actions/sessions_actions"
import Signin from "./signin"
import {Link, NavLink} from "react-router-dom"
import React from "react"


const mSTP = ({errors}) => ({
    errors: errors.session,
    navLink: <Link to="/signup" > Please, create an account :)</Link>
})

const mDTP = dispatch => ({
    signin: (user) => dispatch(signin(user))
})

export default connect(mSTP, mDTP)(Signin)