import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { headerColor } from '../config/theme';
import { productsDetail } from '../utils/products';
import ProductSearch from '../components/Product Card/ProductSearch';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import './ProductSearchPage.css';

export default function ProductSearchPage() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }

    setState({ ...state, [anchor]: open });
    };
    useEffect(() => {
        document.title = 'Search for Furnitures - All types of tables, chairs, cabinets etc..., at low prices'
    }, [])
    return (
        <React.Fragment>
            <Box sx={{ width:'100%',height:'fit-content', bgcolor: headerColor}}>
                <Container maxWidth="xl" sx={{ bgcolor: headerColor,height:'fit-content' }} >
                    <Navbar />
                </Container>
            </Box>
            <Container maxWidth="xl" sx={{ height:'fit-content',padding:'4%',paddingTop:'2%',paddingBottom:'2%' }}>
                <Grid container spacing={3}>
                    <Grid item sx={12} md={2} lg={3} xl={2} >
                        <div className='arazona-search-sidebar hidden-mobile'>
                            <div className='arazona-search-category'>
                                <h4>Browse Category</h4>
                                <ul>
                                    <li><input type="checkbox" className='checkbox-category' /> Tables</li>
                                    <li><input type="checkbox" className='checkbox-category' /> Chairs</li>
                                    <li><input type="checkbox" className='checkbox-category' /> Sofa Sets</li>
                                    <li><input type="checkbox" className='checkbox-category' /> Cupboards</li>
                                    <li><input type="checkbox" className='checkbox-category' /> Beds</li>
                                    <li><input type="checkbox" className='checkbox-category' /> Lamps</li>
                                </ul>
                            </div>
                            <div className='arazona-search-category'>
                                <h4>Product Filters</h4>
                                <ul>
                                    <li><input type="checkbox" className='checkbox-category' /> Tables</li>
                                    <li><input type="checkbox" className='checkbox-category' /> Chairs</li>
                                    <li><input type="checkbox" className='checkbox-category' /> Sofa Sets</li>
                                    <li><input type="checkbox" className='checkbox-category' /> Cupboards</li>
                                    <li><input type="checkbox" className='checkbox-category' /> Beds</li>
                                    <li><input type="checkbox" className='checkbox-category' /> Lamps</li>
                                </ul>
                            </div>
                            <div className='arazona-search-category'>
                                <h4>Colors</h4>
                                <ul>
                                    <li><input type="checkbox" className='checkbox-category' /> Black</li>
                                    <li><input type="checkbox" className='checkbox-category' /> Red</li>
                                    <li><input type="checkbox" className='checkbox-category' /> Black with Red</li>
                                    <li><input type="checkbox" className='checkbox-category' /> Space Grey</li>
                                    <li><input type="checkbox" className='checkbox-category' /> Black Leather</li>
                                </ul>
                            </div>
                            <div className='arazona-search-category'>
                                <h4>Price Range</h4>
                                <ul>
                                    <li><input type="checkbox" className='checkbox-category' /> Under $100</li>
                                    <li><input type="checkbox" className='checkbox-category' /> Under $500</li>
                                    <li><input type="checkbox" className='checkbox-category' /> Under $1000</li>
                                    <li><input type="checkbox" className='checkbox-category' /> Under $1200</li>
                                    <li><input type="checkbox" className='checkbox-category' /> Over $1500</li>
                                </ul>
                            </div>
                        </div>
                        <div className='row mt-4 hidden-desktop'>
                            <button onClick={toggleDrawer('bottom', true)} className='filter-btn'><i class="bi bi-funnel"></i>{' '}Filters</button>
                            <div className='drop-down-select'>
                                <select className='drop-down-select'>
                                    <option className='option-css' selected value="Relevant">Price: Relevant</option>
                                    <option className='option-css' value="Low to High">Price: Low to High</option>
                                    <option className='option-css' value="High to Low">Price: High to Low</option>
                                    <option className='option-css' value="High to Low">Rating: High to Low</option>
                                    <option className='option-css' value="Low to High">Rating: Low to High</option>
                                </select>
                            </div>
                        </div>
                        <Drawer
                            style={{width:250}}
                            anchor={'bottom'}
                            open={state['bottom']}
                            onClose={toggleDrawer('bottom', false)}
                            color={headerColor}
                        >
                            <Box
                                sx={{ width:'100%'}}
                                role="presentation"
                                onKeyDown={toggleDrawer('bottom', false)}
                            >
                                <Container maxWidth="xl" sx={{ height:'fit-content',padding:'4%' }}>
                                    <div className="row">
                                        <h4>Filters</h4>
                                        <button onClick={toggleDrawer('bottom', false)} className='drawer-close-btn'>
                                            <i class="bi bi-x"></i>
                                        </button>
                                    </div>
                                    <Divider style={{marginTop:'2%',marginBottom:'2%'}} />
                                    <div className='drawer-contents'>
                                    <div className='arazona-search-sidebar'>
                                        <div className='arazona-search-category'>
                                            <h4>Browse Category</h4>
                                            <ul>
                                                <li><input type="checkbox" className='checkbox-category' /> Tables</li>
                                                <li><input type="checkbox" className='checkbox-category' /> Chairs</li>
                                                <li><input type="checkbox" className='checkbox-category' /> Sofa Sets</li>
                                                <li><input type="checkbox" className='checkbox-category' /> Cupboards</li>
                                                <li><input type="checkbox" className='checkbox-category' /> Beds</li>
                                                <li><input type="checkbox" className='checkbox-category' /> Lamps</li>
                                            </ul>
                                        </div>
                                        <div className='arazona-search-category'>
                                            <h4>Product Filters</h4>
                                            <ul>
                                                <li><input type="checkbox" className='checkbox-category' /> Tables</li>
                                                <li><input type="checkbox" className='checkbox-category' /> Chairs</li>
                                                <li><input type="checkbox" className='checkbox-category' /> Sofa Sets</li>
                                                <li><input type="checkbox" className='checkbox-category' /> Cupboards</li>
                                                <li><input type="checkbox" className='checkbox-category' /> Beds</li>
                                                <li><input type="checkbox" className='checkbox-category' /> Lamps</li>
                                            </ul>
                                        </div>
                                        <div className='arazona-search-category'>
                                            <h4>Colors</h4>
                                            <ul>
                                                <li><input type="checkbox" className='checkbox-category' /> Black</li>
                                                <li><input type="checkbox" className='checkbox-category' /> Red</li>
                                                <li><input type="checkbox" className='checkbox-category' /> Black with Red</li>
                                                <li><input type="checkbox" className='checkbox-category' /> Space Grey</li>
                                                <li><input type="checkbox" className='checkbox-category' /> Black Leather</li>
                                            </ul>
                                        </div>
                                        <div className='arazona-search-category'>
                                            <h4>Price Range</h4>
                                            <ul>
                                                <li><input type="checkbox" className='checkbox-category' /> Under $100</li>
                                                <li><input type="checkbox" className='checkbox-category' /> Under $500</li>
                                                <li><input type="checkbox" className='checkbox-category' /> Under $1000</li>
                                                <li><input type="checkbox" className='checkbox-category' /> Under $1200</li>
                                                <li><input type="checkbox" className='checkbox-category' /> Over $1500</li>
                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                </Container>
                            </Box>
                        </Drawer>
                    </Grid>
                    <Grid item xs={12} sm={12} md={10} lg={10} xl={10} >
                        <div className='arazona-product-display-header'>
                            <span>Category: <b>{'Chairs'}</b></span>
                            <span>1000 Products Found</span>
                            <div className='hidden-mobile'>
                                <p>Sort By:{''}</p>
                                <select className='drop-down-select'>
                                    <option className='option-css' selected value="Relevant">Price: Relevant</option>
                                    <option className='option-css' value="Low to High">Price: Low to High</option>
                                    <option className='option-css' value="High to Low">Price: High to Low</option>
                                    <option className='option-css' value="High to Low">Rating: High to Low</option>
                                    <option className='option-css' value="Low to High">Rating: Low to High</option>
                                </select>
                            </div>
                        </div>
                        <Grid container xs={12} sm={12} md={12} lg={12} xl={12} spacing={1}>
                            {
                            Array.from(productsDetail).map((e,index)=>(
                                <Grid item xs={12} sm={6} md={4} lg={6} xl={3} key={index}>
                                    <ProductSearch data={e} key={index} />
                                </Grid>
                            ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{ width:'100%',height:'fit-content', bgcolor: '#000823',marginTop:'4%',marginBottom:"2%"}}>
                <Footer />
            </Box>
        </React.Fragment>
    )
}
