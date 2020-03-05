import React from "react"


class Signin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.signin(this.state)
            .then( () => this.props.history.push("/"))
    }

    

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }



    render() {
        let errorMessages = this.props.errors.map(err => <div>{ err }</div>)
        return (
            <div className="signin-form">
                <h2>Sign in to Sprouting Potatoes!</h2>
                <br/>
                
                <form >
                    <label>Email:
                        <input type="text"
                            value={this.state.first_name}
                            onChange={this.update("email")} />
                    </label>
                    <label>Password:
                        <input type="password"
                            value={this.state.last_name}
                            onChange={this.update("password")} />
                    </label>
                    
                    <button onClick={this.handleSubmit}>Sign in!</button>
                    <br/>

                    <div>
                        {errorMessages}
                    </div>

                    <div>
                        <button onClick={this.props.demoUser}>Demo User</button>
                    </div>

                </form>
            </div>
        )

    }

}

export default Signin