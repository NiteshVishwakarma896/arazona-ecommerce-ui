import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import './Footer.css'

export default function Footer() {
  return (
    <Container maxWidth='xl'sx={{ height:'fit-content',padding:'4%',paddingBottom:'1%',marginTop:'4%',backgroundColor:'#000823',color:'#fff' }} >
        <Box sx={{ flexGrow: 1,padding:'2%' }}>
            <Grid container spacing={4} alignItems='center'>
                <Grid  item xs={12} sm={6} md={6} lg={6} xl={2} >
                    <div className='footer-column'>
                        <h4>Top Products</h4>
                        <ul>
                            <li>Managed Website</li>
                            <li>Managed Reputation</li>
                            <li>Power Tools</li>
                            <li>Marketing Service</li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={2} >
                    <div className='footer-column'>
                        <h4>Quick Links</h4>
                        <ul>
                            <li>Managed Website</li>
                            <li>Managed Reputation</li>
                            <li>Power Tools</li>
                            <li>Marketing Service</li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={2} >
                    <div className='footer-column'>
                        <h4>Features</h4>
                        <ul>
                            <li>Managed Website</li>
                            <li>Managed Reputation</li>
                            <li>Power Tools</li>
                            <li>Marketing Service</li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={2} >
                    <div className='footer-column'>
                        <h4>Resources</h4>
                        <ul>
                            <li>Managed Website</li>
                            <li>Managed Reputation</li>
                            <li>Power Tools</li>
                            <li>Marketing Service</li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={2} >
                    <div className='footer-column'>
                        <h4>Newsletter</h4>
                        <ul>
                            <li>Managed Website</li>
                            <li>Managed Reputation</li>
                            <li>Power Tools</li>
                            <li>Marketing Service</li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={2} >
                    <div className='footer-column'>
                        <h4>Office Address:</h4>
                        <p>
                        Flipkart Internet Private Limited,

                        Buildings Alyssa, Begonia &

                        Clove Embassy Tech Village,

                        Outer Ring Road, Devarabeesanahalli Village,

                        Bengaluru, 560103,

                        Karnataka, India

                        CIN : U51109KA2012PTC066107

                        Telephone: 044-45614700
                        </p>
                    </div>
                </Grid>
            </Grid>
            <Divider orientation='horizontal' style={{margin:'3% 0%'}} className='footer-divider' color='#C3C3C3' />
            <Grid container spacing={4} alignItems='center'>
                <Grid  item xs={12} sm={6} md={6} lg={6} xl={2} >
                    <div className='footer-column'>
                        <h5>Become a Seller</h5>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={2} >
                    <div className='footer-column'>
                        <h5>Advertise</h5>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={2} >
                    <div className='footer-column'>
                        <h5>Gift Cards</h5>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={2} >
                    <div className='footer-column'>
                        <h5>Help Center</h5>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={2} >
                    <div className='footer-column'>
                        <h5>&copy; 2023 Arazona.com</h5>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={2} >
                    <div className='footer-column'>
                        <h5>Telephone: 044-45614700</h5>
                    </div>
                </Grid>
            </Grid>
        </Box>
    </Container>
  )
}
