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
        let errorMessages = this.props.errors.map(err => <div>{ err }</div>)
        return (
            <div>
            <div className="modal-form"> 
                    <h2 className="modal-header">Sign in to Sprouting Potatoes!</h2>
                <div className="form-content">
                        Please Sign In or  &nbsp;&nbsp;
                    {this.props.signupButton}
                        <br />
                        <br />
                        <form >
                            <label>Email:
                            <br/>
                                <input className="modal-field" type="text"
                                value={this.state.first_name}
                                onChange={this.update("email")} />
                            </label>
                            <br/>
                            <br />
                            <label>Password:
                            <br/>
                                <input className="modal-field" type="password"
                                    value={this.state.last_name}
                                    onChange={this.update("password")} />
                            </label>
                            <br/>
                            <br/>
                                <button className="modal-btn"  onClick={this.handleSubmit}>Sign In!
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin