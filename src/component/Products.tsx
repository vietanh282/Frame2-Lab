import React, { useState } from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Products = (props: Props) => {
    const [products, setProduct] = useState([])
  return (
    <div className="container">
      <div className="row">
        {/* <div style={{background:(status)?"red":"blue",width:100,height:100}} onClick={handleClick}></div> */}
        {products.map((product: any) => {
          return (
            <div className="col-12 col-sm-4 col-md3">
              <img src={product.thumbnail} />
              <h3><Link to={'/details/' + product.id}>{product.title}</Link></h3>
              <span>{product.price}</span>
              <p></p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Products