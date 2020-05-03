import React from "react"
import { Link } from "react-router-dom"




class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.personalGreeting = this.personalGreeting.bind(this);
    this.session_links = this.session_links.bind(this)
  }

  componentWillMount() {
    this.props.fetchReviews();
  }

  session_links() {
    return (
      <div>
        <nav className="signin-signup">
          <div className="left-nav">
            <Link className="header-link" to="/">
              {" "}
              Sprouting Potatoes
            </Link>
          </div>

          <div className="right-nav">
            <button
              className="greeting-btn"
              onClick={() => this.props.openModal("signin")}
            >
              Sign In
            </button>
            <button
              className="greeting-btn"
              onClick={() => this.props.openModal("signup")}
            >
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    );
  }

    personalGreeting(currentUser){
        let sum = 0
          for(let i = 0; i < this.props.reviews.length; i += 1) {
              let review = this.props.reviews[i]
              if (review.author_id === currentUser.id) {
                  sum += 1
                  debugger
              }
          }
          return(
              
          <div>
              <nav className="signin-signup">
                  <div className="left-nav">
                      <Link className="header-link" to="/"> Sprouting Potatoes </Link>
                  </div>

                  <div className="right-nav-signedin">
                        <i className="fas fa-user"></i>

                            <div className="dropdown-trigger">
                                <button className="dropdown-btn" >{this.props.currentUser.first_name}
                                    <span className="dropdown-arrow">  ▾ </span>
                                </button>

                                <ul className="dropdown-items">
                                    <li className="dropdown-li">

                                    <div className="upper-dropdown">
                                        <i className="dropdown-user fas fa-user fa-3x fa-gradient"> </i>

                                    <div className="right-upper-dropdown">
                                        <p className="dropdown-name">{this.props.currentUser.first_name} {this.props.currentUser.last_name}</p>
                                        <p className="dropdown-ratings"> <i className="dropdown-star fas fa-star"></i> <span className="ratings-number">{sum} </span> Ratings</p>
                                    </div>

                                    </div>
                                        <button className="signout-btn" onClick={this.props.signout}>
                                            <span href="#" className="inner-button">Log Out</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                  </div>
              </nav>
          </div>
          )
      }

  render() {
    debugger;
    return (
        <div>
            {this.props.currentUser ? this.personalGreeting(this.props.currentUser) : this.session_links()}
        </div>
    )
  }
}


    // const Greeting = ({currentUser, signout, openModal, reviews}) => {
    //     debugger
    //     const session_links = () => (
    //         <div>
    //             <nav className="signin-signup">
    //                 <div className="left-nav">
    //                     <Link className="header-link" to="/"> Sprouting Potatoes</Link>
    //                 </div>

    //                 <div className="right-nav"> 
    //                     <button className="greeting-btn" onClick={ () => openModal('signin')}>Sign In</button>                
    //                     <button className="greeting-btn" onClick={ () => openModal('signup')}>Sign Up</button>
    //                 </div>
    //             </nav>
    //         </div>
    //     ); 
        
    //     const personalGreeting = () => {
    //         debugger
    //         return(
                
    //         <div>
    //             <nav className="signin-signup"> 
    //                 <div className="left-nav">
    //                     <Link className="header-link" to="/"> Sprouting Potatoes </Link>
    //                 </div>

    //                 <div className="right-nav-signedin">
    //                         <i className="fas fa-user"></i>

    //                             <div className="dropdown-trigger">
    //                                  <button className="dropdown-btn" >{currentUser.first_name} 
    //                                     <span className="dropdown-arrow">  ▾ </span>
    //                                  </button>
                                   
    //                                 <ul className="dropdown-items">
    //                                     <li className="dropdown-li">

    //                                     <div className="upper-dropdown">  
    //                                         <i className="dropdown-user fas fa-user fa-3x"> </i> 
    //                                         <p className="dropdown-name">{currentUser.first_name} {currentUser.last_name}</p>
    //                                     </div>  
                                            
    //                                         <button className="signout-btn" onClick={signout}>
    //                                             <span href="#" className="inner-button">Log Out</span>
    //                                         </button>
    //                                     </li>
    //                                 </ul>
    //                             </div>
    //                 </div>
    //             </nav>
    //         </div>
    //         )
    //     }

    //     return currentUser ? personalGreeting() : session_links()
    // }



export default Greeting