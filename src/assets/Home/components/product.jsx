import React from "react";

const Product =({product})=>{
    const{id, name, price, category, image}=product

    return <div className="one-product">
        <img src={image} alt="{name}" />
        <div className="pDetail">
        <p className="title">{name.slice(0,30)}</p>
        <span className="cat">Product type : {category}</span>
        <span className="price">₹{price}</span>
        </div>
    </div>
}
export default Product;