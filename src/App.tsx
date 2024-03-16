import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Slide from './component/Slide';
import Products from './component/Products';
import Footer from './component/Footer';
import Iproduct from './interface/product';
import Banner from './component/Banner';

function App() {
  const products: Iproduct[] =[
    {
      "id": 1,
      "name": " Nike Air Jordan 1 Low Panda",
      "image": "https://product.hstatic.net/1000383440/product/dscf8540_c17512698f504dbbab7f750b9264a64b_master.jpg",
      "price": 10
    },
    {
      "id": 2,
      "name": " Air Jordan 3 Katrina White Red",
      "image": "https://giaygiare.vn/upload/sanpham/nike-air-jordan-3-katrina.jpg",
      "price": 20
    },
    {
      "id": 3,
      "name": " Nike Air Jordan 2 Retro GS 'Chicago'",
      "image": "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/air-jordan-2-og-chicago-dx2454-1_5fff7d0ada394d3eaac02098e419a94a.png",
      "price": 30
    },
    {
      "id": 4,
      "name": " Nike Air Jordan 4 Retro Off White Kem",
      "image": "https://giayxshop.vn/wp-content/uploads/2020/12/z4767215674011_a0a2d3e82578a50ca334f57d357e5511.jpg",
      "price": 40
    }


  ]
  return (
    <>
      <Header/>
    <Banner/>
    <Products products={products}/>
    <Footer/>
    </>
  
  );
}

export default App;
