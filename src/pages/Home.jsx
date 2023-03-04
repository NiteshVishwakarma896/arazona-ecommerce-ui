import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Navbar from '../components/Navbar/Navbar';
import Carousel from '../components/HeaderCarousel/Carousel';
import Category from '../components/Category/Category';
import Featured from '../components/Featured/Featured';
import SaleBanner from '../components/Sale Banner/SaleBanner';
import Products from '../components/Product Card/Products';
import { productsDetail } from '../utils/products';
import Footer from '../components/Footer/Footer';
import { headerColor } from '../config/theme';

export default function Home() {
    useEffect(() => {
        document.title = 'Arazona Furnitures - All types of tables, chairs, cabinets etc..., at low prices'
    }, [])
    
  return (
    <React.Fragment>
        <Box sx={{ width:'100%',height:'680px', bgcolor: headerColor}}>
          <Container maxWidth="xl" sx={{ bgcolor: headerColor,height:'680px', paddingBottom:'2%' }}>
            <Navbar />
            <Box sx={{ width:'100%',height:'100%' }}>
              <Carousel />
            </Box>
          </Container>
        </Box>
        <Container maxWidth="xl" sx={{ height:'fit-content',paddingTop:'4%' }}>
            <Category />
            <Featured headerTitle="Featured Products" />
        </Container>
        <Box sx={{ width:'100%',height:'fit-content', bgcolor: headerColor,marginTop:'4%',marginBottom:"2%"}}>
          <Container maxWidth="xl" sx={{ height:'fit-content',paddingTop:'4%' }}>
              <SaleBanner />
          </Container>
        </Box>
        <Container maxWidth="xl" sx={{ height:'fit-content',padding:'4%' }}>
            <Featured headerTitle="Best Sellers" />
        </Container>
        <Box sx={{ width:'100%',height:'fit-content', bgcolor: headerColor,marginTop:'4%',marginBottom:'4%'}}>
          <Container maxWidth="xl" sx={{ height:'fit-content',paddingTop:'4%' }}>
              <SaleBanner />
          </Container>
        </Box>
        <Container maxWidth="xl" sx={{ height:'fit-content',paddingTop:'2%' }}>
          <Grid container spacing={4}>
            {
              Array.from(productsDetail).map((e,index)=>(
                <Grid item xs={12} sm={6} md={6} lg={6} xl={3} key={index}>
                  <Products data={e} key={index} />
                </Grid>
              ))
            }
          </Grid>
        </Container>
        <Box sx={{ width:'100%',height:'fit-content', bgcolor: '#000823',marginTop:'4%',marginBottom:"2%"}}>
          <Footer />
        </Box>
    </React.Fragment>
  )
}
