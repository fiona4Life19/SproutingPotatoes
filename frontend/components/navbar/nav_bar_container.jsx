import {connect} from "react-redux"
import NavBar from "./nav_bar"
import {signout} from "../../actions/sessions_actions";

const mSTP = (state) => {
    return{
    currentUser: state.session.currentUser
    }
}

const mDTP = (dispatch) => ({
    signout: () => dispatch(signout())
})

export default connect(mSTP, mDTP)(NavBar)