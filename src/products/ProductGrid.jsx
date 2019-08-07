import React from 'react';

const ProductGrid = props => (
    <div className="container">
        {props.products.length > 0 ? (
            props.products.map( product => (
                <div className="card" key={product.id}>
                    <div className="title">{product.title}</div>
                    <img src={product.thumbnail} alt=""/>
                    <div className="price">Precio: {product.price}</div>
                </div>
            ))
        ) : (
            <marquee>Ingrese una busqueda</marquee>
        )}
    </div>
)

export default ProductGrid;