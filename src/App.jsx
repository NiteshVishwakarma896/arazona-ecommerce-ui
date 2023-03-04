import * as React from 'react';
import './App.css'
import Home from './pages/Home';
import CssBaseline from '@mui/material/CssBaseline';
import ProductSearchPage from './pages/ProductSearchPage';

function App() {

  return (
    <React.Fragment>
      <CssBaseline />
      <ProductSearchPage />
    </React.Fragment>
  )
}

export default App
