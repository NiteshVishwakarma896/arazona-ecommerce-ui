import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { headerColor } from '../../config/theme';
import { productsDetail } from '../../utils/products';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './ProductDetail.css';
import Featured from './../../components/Featured/Featured';
import Review from '../../components/Review/Review';

export default function ProductDetail() {

    const [count,setCount] = useState(1);

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
            <Container maxWidth="lg" sx={{ height:'fit-content',padding:'4%',paddingTop:'2%',paddingBottom:'2%' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={4} lg={6} xl={6}>
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
                    <Grid item xs={12} sm={12} md={8} lg={6} xl={6} >
                        <div className="product-detail-item">
                            <h2>Latest Foam Chair</h2>
                            <p className='detailed-price'>$ 120.00</p>
                            <p className='category-link'>Category: <a href="#link">Tables</a>, <a href="#link">Chairs</a>, <a href="#link">Sofas</a>, <a href="#link">Chairs</a></p>
                            <p className='product-avalibility'>Avalibility: <span>In-Stock</span></p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis odio doloribus qui accusantium laudantium modi praesentium, consectetur ipsa eos inventore quibusdam itaque reprehenderit rerum voluptas, facilis enim dignissimos neque ad! Consequuntur aliquid provident dignissimos, assumenda unde, nostrum consequatur doloremque, excepturi autem culpa tempora modi beatae velit corrupti asperiores sunt. Nulla?</p>
                            <hr style={{marginTop:'2%',borderColor:'#F4F4F4',opacity:0.5}} />
                            <div className="product-detail-item-btns">
                                <div className="item-count">
                                    <button onClick={()=>setCount(count-1)}>-</button>
                                    <span>{count}</span>
                                    <button onClick={()=>setCount(count+1)}>+</button>
                                </div>
                                <button className="add-to-cart">Add to Cart</button>
                                <button className="add-to-wishlist hidden-mobile"><i class="bi bi-heart"></i></button>
                            </div>
                            <hr style={{borderColor:'#F4F4F4',opacity:0.5}}  />
                            <div className="other-detail">
                                <div className="other-detail-box">
                                    <p>Overall</p>
                                    <span>4.0</span>
                                    <p className='_txt_review'>100 reviews</p>
                                </div>
                                <div className="other-detail-box-2">
                                    <p>Based on 100 Reviews</p>
                                    <span>5 Star <i class="bi bi-star-fill yellow-color"></i><i class="bi bi-star-fill yellow-color"></i><i class="bi bi-star-fill yellow-color"></i><i class="bi bi-star-fill yellow-color"></i><i class="bi bi-star-fill yellow-color"></i> (100)</span>
                                    <span>4 Star <i class="bi bi-star-fill yellow-color"></i><i class="bi bi-star-fill yellow-color"></i><i class="bi bi-star-fill yellow-color"></i><i class="bi bi-star-fill yellow-color"></i> (100)</span>
                                    <span>3 Star <i class="bi bi-star-fill yellow-color"></i><i class="bi bi-star-fill yellow-color"></i><i class="bi bi-star-fill yellow-color"></i> (100)</span>
                                    <span>2 Star <i class="bi bi-star-fill yellow-color"></i><i class="bi bi-star-fill yellow-color"></i> (100)</span>
                                    <span>1 Star <i class="bi bi-star-fill yellow-color"></i> (100)</span>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <hr style={{marginTop:'2%',marginBottom:'2%',borderColor:'#F4F4F4',opacity:0.5}} />
                <div className="product-description">
                    <h4>Description</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nesciunt ipsa ratione. Repellendus ipsa ipsum ullam dolorum, iste itaque corrupti commodi praesentium illo modi? Odio earum, ducimus nam placeat officiis aperiam doloremque nesciunt dignissimos ullam tempore alias obcaecati unde nihil vel itaque natus error! Totam minus architecto veniam! Sunt, atque!</p>
                </div>
                <br />
                <div className="product-description">
                    <h4>Specification</h4>
                    <div className='mt-2'>
                        <div className="data-row-content">
                            <p>Width</p>
                            <p>128mm</p>
                        </div>
                        <div className="data-row-content">
                            <p>Height</p>
                            <p>128mm</p>
                        </div>
                        <div className="data-row-content">
                            <p>Depth</p>
                            <p>128mm</p>
                        </div>
                        <div className="data-row-content">
                            <p>Weight</p>
                            <p>128mm</p>
                        </div>
                        <div className="data-row-content">
                            <p>Quality checking</p>
                            <p>128mm</p>
                        </div>
                        <div className="data-row-content">
                            <p>Freshness Duration</p>
                            <p>128mm</p>
                        </div>
                    </div>
                </div>
                <br />
                <div className="product-description">
                    <h4>Reviews</h4>
                    <Review />
                </div>
                <br />
                <br />
                <Featured headerTitle="More Best Selling Products" />
            </Container>
            
            <Box sx={{ width:'100%',height:'fit-content', bgcolor: '#000823',marginTop:'4%',marginBottom:"2%"}}>
                <Footer />
            </Box>
        </React.Fragment>
    )
}
