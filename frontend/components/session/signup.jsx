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
        // this.openModal = this.openModal.bind(this)
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
            <div className="signup-form">
                <h2>Sign up for Sprouting Potatoes!</h2>
                <form>
                    <br/>
                    Please Sign Up or {this.props.signinButton}
                    <br/>
                    <label>First Name:
                        <input type="text" 
                               value={this.state.first_name} 
                               onChange={this.update('first_name')}/>
                    </label>
                    <br/>
                    <label>Last Name:
                        <input type="text" 
                               value={this.state.last_name} 
                               onChange={this.update("last_name")}/>
                    </label>
                    <br/>
                    <label>Email:
                        <input type="text" 
                               value={this.state.email} 
                               onChange={this.update("email")}/>
                    </label>
                    <br/>
                    <label>Password:
                        <input type="password" 
                               value={this.state.password} 
                               onChange={this.update("password")}/>
                    </label>
                    <br/>

                    <button className="btn" onClick={this.handlesubmit}>Sign up!
                    </button>

                    <div>
                        {error_messages}
                    </div>

                    <button className="btn" 
                    onClick={this.handleDemoUser}>Demo User</button> 
                </form>
            </div>
        )

    }

}

export default Signup