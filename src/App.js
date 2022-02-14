import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { wores } from './words'
import data from './data.json'
import Products from './components/Products/Products'
import { useState } from 'react';


function App(){
  const [products , setProducts] =useState(data)
  console.log(products)
  return (
    <div className="layout">
      <Header/>
      <main>
        <div className="wrapper">
            <Products products={products} />
            <div className="filter-wrapper">Filter</div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
