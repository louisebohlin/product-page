import React from "react"
import Product from "./product"
const productsAPI = "http://localhost:8080/products"

console.log("Products: (Remove this line in app.js!)", productsAPI)

class App extends React.Component {

state = {
  products: []
  }

  componentDidMount() {
    fetch(productsAPI)
      .then(response => {
      return response.json()
    })
    .then(json => {
      this.setState({
        products: json
      })
    })
  }

  render() {
    return (
      <div className="header"><h1>Produkter</h1>
        <div className="App">
          {this.state.products.map((product) => {
            return <Product title={product.name}
                  image={product.image}
                  type={product.type}
                  substance={product.substance}
                  size={product.size}
                  number={product.numberInPack}
                  price={product.price}
                  leverans={product.deliveryTime}/>
        })}
        </div>
      </div>
    )
  }

}

export default App
