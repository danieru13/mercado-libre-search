import React, { useState, useEffect } from 'react';
import ProductGrid from './products/ProductGrid';

function App() {

  const initialProductState = []

  const [ products, setProducts ] = useState(initialProductState);
  const [ search, setSearch ] = useState("")

  useEffect(() => {
    modifyData();
}, [search]);

const fetchProducts  = async () => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${search}`, {mode: "cors"});
  const res = await response.json();

  return res.results;
}

/*const fetchUserName = async (id) => {
  const response = await fetch(`https://api.mercadolibre.com/users/${id}`, {mode: "cors"});
  const res = await response.json()
  return res.nickname;
}*/

const modifyData = () => {
  fetchProducts().then(data => {
    data = data.map((obj) => {
      let new_obj = { id: obj.id, title: obj.title, thumbnail: obj.thumbnail, price: obj.price, seller: obj.seller.id};
      return  new_obj;
    });
    setProducts(data);
  });
}

const handleChange = (event) => {
  setSearch(event.target.value);
}

  return (
    <div>
      <h1>Daniel Vanegas - Mercado Libre</h1>
      <input placeholder="Buscar" onChange={handleChange} />  
      <ProductGrid products={products} />
    </div>
  );
}

export default App;
