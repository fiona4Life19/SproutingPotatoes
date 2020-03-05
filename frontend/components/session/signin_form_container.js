import {connect} from "react-redux";
import {signin} from "../../actions/sessions_actions"
import Signin from "./signin"
import {Link, NavLink} from "react-router-dom"
import React from "react"


const mSTP = ({errors}) => ({
    errors: errors.session
})

const mDTP = dispatch => ({
    signin: (user) => dispatch(signin(user)),
    demoUser: () => dispatch(signin({email: "ASEbuzz@aol.com", password: "password"}))
})

export default connect(mSTP, mDTP)(Signin)