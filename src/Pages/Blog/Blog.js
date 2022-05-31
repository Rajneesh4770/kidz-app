import React from 'react'
import './Blog.css'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Kidzappfeed from '../../Components/Kidzapp-feed/Kidzapp-feed';
import { Typography,Button,Card,CardMedia,CardContent,CardActions } from '@mui/material';
import blog1 from '../../Assets/blog-page1.jpg'
import blog2 from '../../Assets/blog-page2.avif'
import blog3 from '../../Assets/blog-page3.avif'
function Blog() {
  return (
    <>
    
    <section className='section-1'>
      <div className='container background-1'>
        <div className='row'>
          <div className='col-lg-12 md-12 sm-12'>
       <div className='search-img'>
         
       <form class="d-flex search-bar">
        <input class="form-control me-2" type="search" placeholder="Type Here To Search Blog" aria-label="Search"/>
        <button class="btn btn-primary" type="submit">Search</button>
      </form>
          
       </div>
        
          </div>

        </div>
    
    </div>
</section>

{/* section-2 */}

<section className='section-2'>
  <div className='container'>
    <div className='row'>
    <div className='col-lg-12 md-12 sm-12'>
<div className='back-btn'>
<Link to=''><h5> <ArrowBackIcon/> Go Back</h5></Link>
</div>
    </div>
    </div><br/>
  

  <div className='row'>
    <div className='col-lg-12'>
      <h4>The KZ Blog</h4>
      <h6>Your source for everything related to Health & Nutrition, Parenting, Kids Activities and Arts & Crafts.</h6>

    </div><br/>
    </div>
  </div>
</section>

<section className='card-section'>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-4 md-6 sm-12'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={blog1}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        10+ Fun Indoor Things To Do This Week 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

      </div>

      <div className='col-lg-4 md-6 sm-12'>
{/* 2nd  */}
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={blog2}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Fun Things To Do With Your Older Kids In Dubai
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </div>
      <div className='col-lg-4 md-6 sm-12'>
 {/* 3rd */}
 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={blog3}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Kids Birthdays In Dubai And Abu Dhabi:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

      </div>

    </div>

  </div>
</section>
   



   


  



<section className='last-section'>
  <div className='container'>
 < Kidzappfeed/>
  </div>



</section>

    </>
  )
}

export default Blog