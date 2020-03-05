import { connect } from "react-redux"
import { signout } from "../../actions/sessions_actions"
import { openModal } from "../../actions/modal_actions"
import Greeting from "./greeting"


const mSTP = (state) => ({
    currentUser: state.session.currentUser
})

const mDTP = (dispatch) => ({
    signout: () => dispatch(signout()),
    openModal: modal => dispatch(openModal(modal))
})


export default connect(mSTP, mDTP)(Greeting)