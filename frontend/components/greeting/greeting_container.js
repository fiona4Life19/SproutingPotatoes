import {connect} from "react-redux"
import {signout} from "../../actions/sessions_actions"
import Greeting from "./greeting"


const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
    signout: () => dispatch(signout())
})


export default connect(mSTP, mDTP)(Greeting)