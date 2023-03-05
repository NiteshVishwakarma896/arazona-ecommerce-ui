import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { headerColor } from '../../config/theme';
import { productsDetail } from '../../utils/products';
import ProductSearch from '../../components/Product Card/ProductSearch';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './ProductDetail.css';

export default function ProductDetail() {
    useEffect(() => {
        document.title = 'Product Detail'
    }, [])
    return (
        <React.Fragment>
            <Box sx={{ width:'100%',height:'fit-content', bgcolor: headerColor}}>
                <Container maxWidth="xl" sx={{ bgcolor: headerColor,height:'fit-content' }} >
                    <Navbar />
                </Container>
            </Box>
            <Container maxWidth="xl" sx={{ height:'fit-content',padding:'4%',paddingTop:'2%',paddingBottom:'2%' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={4} lg={6} xl={5}>
                        <Carousel autoPlay interval={2000} showArrows={true} showIndicators={false} showStatus={false} swipeable={true} infiniteLoop={true} >
                            {
                                Array.from(productsDetail).map((e,index)=>(
                                    <div key={index}>
                                        <img className='product-detail-carousel-img' src={e.img} />
                                    </div>
                                ))
                            }
                        </Carousel>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={6} xl={7} >
                        <div className="product-detail-item">
                            <h2>Latest Foam Chair</h2>
                            <p className='detailed-price'>$ 120.00</p>
                            <p className='category-link'>Category: <a href="#link">Tables</a>, <a href="#link">Chairs</a>, <a href="#link">Sofas</a>, <a href="#link">Chairs</a></p>
                            <p className='product-avalibility'>Avalibility: <span>In-Stock</span></p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis odio doloribus qui accusantium laudantium modi praesentium, consectetur ipsa eos inventore quibusdam itaque reprehenderit rerum voluptas, facilis enim dignissimos neque ad! Consequuntur aliquid provident dignissimos, assumenda unde, nostrum consequatur doloremque, excepturi autem culpa tempora modi beatae velit corrupti asperiores sunt. Nulla?</p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{ width:'100%',height:'fit-content', bgcolor: '#000823',marginTop:'4%',marginBottom:"2%"}}>
                <Footer />
            </Box>
        </React.Fragment>
    )
}
