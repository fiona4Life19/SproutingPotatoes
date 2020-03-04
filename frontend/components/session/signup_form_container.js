import {connect} from "react-redux"
import React from "react"
import {Link} from "react-router-dom"
import {signup} from "../../actions/sessions_actions"
import SessionForm from "./signup"


const mSTP = ({errors}) => ({
    errors: errors.session,
    navLink: <Link to="/signin">You already have an account :) </Link>
})

const mDTP = (dispatch) => ({ 
    signup: (user) => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(SessionForm)