import {connect} from "react-redux"
import welcomeBar from "./welcome_bar";

const mSTP = (state) => ({
    user: state.session.currentUser
});

export default connect(mSTP)(welcomeBar)