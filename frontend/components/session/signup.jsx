import React from "react"


class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
        }

        this.handleDemoUser = this.handleDemoUser.bind(this)
        this.handlesubmit = this.handlesubmit.bind(this)
    }

    handlesubmit(e) {
        e.preventDefault()
        this.props.signup(this.state)
            .then(this.props.closeModal)
            
    }

    handleDemoUser(e) {
        e.preventDefault()
        this.props.signin({email: "ASEbuzz@aol.com", 
                           password: "password", 
                           first_name: "Aaron", 
                           last_name: "Baum" })
            .then(this.props.closeModal)
            
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value} )
        }
    }

    render() {
        const error_messages = this.props.errors.map( (err) => <div>{err}</div>)
        return(
            <div className="modal-form">
                <h2 className="modal-header">Sign up for Sprouting Potatoes!
                    <i className="fas fa-times" onClick={this.props.closeModal}></i>
                </h2>
                <form>
                <div className="modal-content">
                    <div className="field-name-container">
                        <label>First Name
                        <br/>
                        <input className="modal-field-name"
                               type="text" 
                               value={this.state.first_name} 
                               onChange={this.update('first_name')}/>
                        </label>
                                    &nbsp;&nbsp;     
                        <label>Last Name
                            <br/>
                            <input 
                               className="modal-field-name" 
                               type="text" 
                               value={this.state.last_name} 
                               onChange={this.update("last_name")}/>
                        </label>
                    </div>
                    <label>Email
                        <br />
                        <input 
                            className="modal-field"
                            type="text" 
                            value={this.state.email} 
                            onChange={this.update("email")}/>
                    </label>
                    <br/>
                    <label>Password
                        <br />
                        <input 
                            className="modal-field"
                            type="password" 
                            value={this.state.password} 
                            onChange={this.update("password")}/>
                    </label>
                    <br/>
                    <br/>
                    <button className="modal-btn" onClick={this.handlesubmit}
                    >Sign Up!</button>

                    <div>
                        {error_messages}
                    </div>
                    <br/>
                    <button className="modal-btn" onClick={this.handleDemoUser}
                        >Demo User</button> 
                    </div>
                </form>


                <div className="signup-modal-footer">
                    <h5 className="modal-footer-text">Already have an account?</h5>
                    &nbsp;&nbsp;
                        {this.props.signinButton}
                </div>
            </div>      
        )
    }
}
        
export default Signup