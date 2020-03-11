import React from "react"


class Signin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        this.handleDemoUser = this.handleDemoUser.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillUnmount(){
        this.props.clearErrors()
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.signin(this.state)
            .then(this.props.closeModal)
    }


    handleDemoUser(e) {
        e.preventDefault()
        this.props.signin({email: "ASEbuzz@aol.com", password: "password"})
            .then(this.props.closeModal)
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        let errorMessages = this.props.errors.map(err => <div className="errors" >{ err }</div>)
        return (
            <div className="modal-form"> 
                <div>
                    <h2 className="modal-header">Sign in 
                        <i className="fas fa-times" onClick={this.props.closeModal}></i>
                    </h2>
                </div>
                <div className="form-content">
                        <form >
                            <label>Email Address
                            <br/>
                                <input className="modal-field" type="text"
                                value={this.state.first_name}
                                onChange={this.update("email")} />
                            </label>
                            <br/>
                            <br/>
                            <label>Password
                            <br/>
                                <input className="modal-field" type="password"
                                    value={this.state.last_name}
                                    onChange={this.update("password")} />
                            </label>
                            <br/>
                            <br/>
                                <button className="modal-btn"  onClick={this.handleSubmit}>Sign In
                                </button>
                            <br/>
                            <div>
                                {errorMessages}
                            </div>
                            <br/>
                            <div>
                                <button className="modal-btn" onClick={this.handleDemoUser}
                                >Demo User</button>
                            </div>
                        </form>
                            <div className="signin-modal-footer">
                                <h3 className="modal-footer-text">Don't have an account?</h3>
                                &nbsp;&nbsp;
                                {this.props.signUpButton}
                            </div>
                </div>
            </div>
        )
    }
}

export default Signin