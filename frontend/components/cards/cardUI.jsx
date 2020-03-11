import React from "react"

class CardUI extends React.Component {
    render(){
        movie = this.props.mov
    return(
        <div className="card">
            <div className="">
                <img className="img" src="https://cdn10.bigcommerce.com/s-vzuks4/products/2674/images/3491/Baby_Driver__89942.1505228769.1280.1280.jpg?c=2" alt=""/>
            </div>

            <div className="">
                <h4 className="card-title">Card Title</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Odit voluptatem quasi minima totam nemo. Placeat provident 
                    nihil molestias nemo nesciunt?
                </p>
                <a href="#" className="btn btn-outline-sucess">go anywhere</a>
            </div>
        </div>
        )
    }
}

export default CardUI;