import React from 'react'
import './Kidzapp-feed.css'

import {Box, TextField,Typography,Card,CardMedia,CardContent,Button} from '@mui/material'
function Kidzappfeed() {
    // document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
    //     e.preventDefault();
    //     document.querySelector('.subscription').classList.add('done');
    //   });
  return (
    <>
    <div className='container'>
    <div className="row">
              <div className="col-lg-12 new-img">
                <Card sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 400 }}
                    image ='https://drfsb8fjssbd3.cloudfront.net/images/subsc-baby.png'
                    alt=""
                    height='284px'
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h3" ml={20}>
                        The Kidzapp Feed
                      </Typography>
                      <Typography component="div" variant="h6" ml={15}>
                        Receive regular updates and promotions from Kidzapp
                      </Typography>
                      <Typography component="div" ml={15}>
                        {/* <TextField
                          id="standard-basic"
                          label="Enter your E-mail here"
                          variant="standard"
                        /> */}
                        {/* <Button color="error" sx={{ mt: 2 }}>
                          Subscribe
                        </Button> */}
                       
                       {/* <div class="container">
  <div class="content">
    <form class="subscription">
      <input class="add-email" type="email" placeholder="subscribe@me.now"/>
      <button class="submit-email" type="button">
        <span class="before-submit">Subscribe</span>
        <span class="after-submit">Thank you for subscribing!</span>
       </button>
    </form>
  </div>
</div> */}

<div class="form-input">
      <label for="email"></label>
      <input type="email" placeholder="Your Email"/>
      <button class="subscribe-btn">Subscribe</button>
    </div>

                      </Typography>
                      <Typography component="div" variant="h5" ml={15} mt={5} color="red">
                        2500+
                      </Typography>
                      <Typography component="div" variant="h5" ml={15}>
                        Experiences
                      </Typography>
                      <hr className="hr-1" />

                      <Typography component="div" variant="h5" ml={36} mt={-6} color="red">
                        500+
                      </Typography>
                      <Typography component="div" variant="h5" ml={36}>
                        Venues & Events
                      </Typography>
                      <hr className="hr-2" />

                      <Typography component="div" variant="h5" ml={63} mt={-6} color="red">
                        1000+
                      </Typography>
                      <Typography component="div" variant="h5" ml={63}>
                        Classes
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </div>
            </div>
            </div>
    </>
  )
}

export default Kidzappfeed