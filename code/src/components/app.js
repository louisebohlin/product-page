import React from "react"
import Product from "./product"
const productsJson = require("../products.json")

console.log("Products: (Remove this line in app.js!)", productsJson)

class App extends React.Component {

  render() {
    return (
      <div className="header"><h1>Produkter</h1>
        <div className="App">
          {productsJson.products.map((product) => {
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
