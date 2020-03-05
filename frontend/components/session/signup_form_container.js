import {connect} from "react-redux"
import {signup, signin} from "../../actions/sessions_actions"
import Signup from "./signup"


const mSTP = ({errors}) => ({
    errors: errors.session
})

const mDTP = (dispatch) => ({ 
    signup: (user) => dispatch(signup(user)),
    signin: (user) => dispatch(signin(user)),
})

export default connect(mSTP, mDTP)(Signup)