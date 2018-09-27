import React from "react"
const productsJson = require("../products.json")

export default class Product extends
React.Component {

    render() {
      return (
        <div className="App">
           <div className="Product-listing">
           <h2>{this.props.title}</h2>
           <img src={this.props.image}/>
            <ul>
              <li>{this.props.type}</li>
              <li>{this.props.substance}</li>
              <li>{this.props.size}</li>
              <li>{this.props.number} st i förpackningen</li>
            </ul>
             <div className="Buy-button">
                <p>{this.props.price} kr</p>
                <button>Köp</button>
             </div>
           <p>Leveranstid {this.props.leverans}</p>
           </div>
        </div>
      )
    }
  }
