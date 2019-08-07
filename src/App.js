import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import ProductGrid from './products/ProductGrid';

function App() {

  const initialProductState = []

  const [ products, setProducts ] = useState(initialProductState);
  const [ search, setSearch ] = useState("")

  useEffect( () => {

    console.log(search)
    async function fetchData(){
    const response = await fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${search}`, {mode: "cors"})
    const prod = await response.json()

    setProducts(prod.results)
  }

  fetchData()

}, [search]);

const handleChange = (event) => {
  setSearch(event.target.value);
}

  return (
    <div>
      <input placeholder="Buscar" onChange={handleChange} />  
      <ProductGrid products={products} />
    </div>
  );
}

export default App;
