import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductDetailPage from './pages/product-detail';
import Home from './pages/Home';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
    </Routes>
  )
}

export default App
