import * as React from 'react';
import './App.css'
import Home from './pages/Home';
import CssBaseline from '@mui/material/CssBaseline';
import ProductSearchPage from './pages/ProductSearch/ProductSearchPage';
import ProductDetail from './pages/ProductDetail/ProductDetail';

function App() {

  return (
    <React.Fragment>
      <CssBaseline />
      <ProductDetail />
    </React.Fragment>
  )
}

export default App
