import {connect} from "react-redux"
import {signup} from "../../actions/sessions_actions"
import Signup from "./signup"


const mSTP = ({errors}) => ({
    errors: errors.session
})

const mDTP = (dispatch) => ({ 
    signup: (user) => dispatch(signup(user)),
    demoUser: () => dispatch(signup({ 
                                    email: "ASEbuzz@aol.com", 
                                    password: "password", 
                                    first_name: "Aaron", 
                                    lastName: "Baum" }))
})

export default connect(mSTP, mDTP)(Signup)