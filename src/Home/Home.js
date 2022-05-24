import React from 'react'
import './Home.css';

import round1 from '../Assets/round1.jpg'
import round2 from '../Assets/round2.jpg'
import round3 from '../Assets/round3.jpg'
import round4 from '../Assets/round4.png'
import round5 from '../Assets/round5.jpg'
import round6 from '../Assets/round6.png'
import kidz1 from '../Assets/kidz1.jpeg'
import kidz2 from '../Assets/kidz2.jpeg'
import kidz3 from '../Assets/kidz3.jpg'
import crousel1 from '../Assets/crousel1.jpg'
import crousel2 from '../Assets/crousel2.jpg'
import crousel3 from '../Assets/crousel3.jpg'
import cartoon1 from '../Assets/cartoon1.jpg'
import cartoon2 from '../Assets/cartoon2.jpg'
import cartoon3 from '../Assets/cartoon3.jpg'
import cartoon4 from '../Assets/cartoon4.png'
import cartoon5 from '../Assets/cartoon5.png'
import cartoon6 from '../Assets/cartoon6.jpg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function Home() {
  return (
    <>
    <div className='container-flex'>
    <section className='crousel'>
    <div className='crousel-css' >

<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active cr-img">
      <img src={crousel1} class="d-block w-100 " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item cr-img">
      <img src={crousel2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item cr-img">
      <img src={crousel3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </div>
    </section>

    <section className='section-2'>
      
          <div class="container">
  <div className="row">
    <div className="col-md-12 text-center">
      <h1 className="animate-charcter"> Find the best places to take your kids in the UAE</h1><br/><br/>
      <h2 className="animate-charcter"> Handpicked Experiences</h2><br/>
      <h4>Our pick of the best kids activities in Dubai, Abu Dhabi and the rest of the UAE</h4><br/>
    </div>
  </div>

                      {/* 1st card row */}

<div className='row'>
  <div className='col-lg-4 col-md-6 col-sm-12'>

  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={kidz1}
        alt=" "
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          School
        </Typography>
        <Typography variant="body2" color="text.secondary">
        “Education is the most powerful weapon you can use to change the world” – Nelson Mandela
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" color="error">Book Now</Button>
        
      </CardActions>
    </Card>
    </div>

                                   

    <div className='col-lg-4 col-md-6 col-sm-12'>

<Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image={kidz2}
      alt=""
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        School
      </Typography>
      <Typography variant="body2" color="text.secondary">
      “Education is the most powerful weapon you can use to change the world” – Nelson Mandela
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant="outlined" color="error">Book Now</Button>
     
    </CardActions>
  </Card>
  </div>

  <div className='col-lg-4 col-md-6 col-sm-12'>

<Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image={kidz3}
      alt=" "
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        School
      </Typography>
      <Typography variant="body2" color="text.secondary">
      “Education is the most powerful weapon you can use to change the world” – Nelson Mandela
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant="outlined" color="error">Book Now</Button>
      
    </CardActions>
  </Card>
  </div>


 </div><br/>

                      {/* 2nd row of card */}
<div className='row'>

 <div className='col-lg-4 col-md-6 col-sm-12'>
<Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image={kidz2}
      alt=""
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        School
      </Typography>
      <Typography variant="body2" color="text.secondary">
      “Education is the most powerful weapon you can use to change the world” – Nelson Mandela
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant="outlined" color="error">Book Now</Button>
     
    </CardActions>
  </Card>
 </div>

 <div className='col-lg-4 col-md-6 col-sm-12'>
<Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image={kidz2}
      alt=""
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        School
      </Typography>
      <Typography variant="body2" color="text.secondary">
      “Education is the most powerful weapon you can use to change the world” – Nelson Mandela
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant="outlined" color="error">Book Now</Button>
      
    </CardActions>
  </Card>
 </div>

 <div className='col-lg-4 col-md-6 col-sm-12'>
<Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image={kidz2}
      alt=""
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        School
      </Typography>
      <Typography variant="body2" color="text.secondary">
      “Education is the most powerful weapon you can use to change the world” – Nelson Mandela
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant="outlined" color="error">Book Now</Button>
      
    </CardActions>
  </Card>
 </div>


 </div>

</div>
 </section><br/>
                                    {/* section-3 */}
<section className='section-3'>
  <div className='container-fluid'>
<center> <h1 style={{color:'white'}}>Kidzappolis</h1></center>
  <div className='row'>
    <div className='col-lg-2 '>
    <div className='col-lg-2'>
    <div class="card" style={{width: '12rem'} }>
  <img src={round1} className="card-img-top " alt="..."/>
  <div class="card-body">
    <p class="card-text">Animal Fun </p>
  </div>
</div>
    </div>
    </div>

    <div className='col-lg-2'>
    <div class="card" style={{width: '12rem'}}>
  <img src={round2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Children </p>
  </div>
</div>
    </div>

    <div className='col-lg-2'>
    <div class="card" style={{width: '12rem'}}>
  <img src={round3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Art, music & dance </p>
  </div>
</div>
    </div>

    <div className='col-lg-2'>
    <div class="card" style={{width: '12rem'}}>
  <img src={round4} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Baby & Toddler </p>
  </div>
</div>
    </div>

    <div className='col-lg-2'>
    <div class="card" style={{width: '12rem'}}>
  <img src={round5} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Birthday </p>
  </div>
</div>
    </div>

    <div className='col-lg-2'>
    <div class="card" style={{width: '12rem'}}>
  <img src={round6} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Course & Workshop </p>
  </div>
</div>
    </div>

  </div><br/>

  <center> <h1 style={{color:'white'}}>Kidzapproved Collections</h1></center>

  <div className='row'>
    <div className='col-lg-2 '>
    <div className='col-lg-2'>
    <div class="card" style={{width: '12rem'} }>
  <img src={cartoon1} className="card-img-top " alt="..."/>
  <div class="card-body">
    <p class="card-text">How to Spend Your Cashback-Top Picks </p>
  </div>
</div>
    </div>
    </div>

    <div className='col-lg-2'>
    <div class="card" style={{width: '12rem'}}>
  <img src={cartoon2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Fun For AED 50 or Less </p>
  </div>
</div>
    </div>

    <div className='col-lg-2'>
    <div class="card" style={{width: '12rem'}}>
  <img src={cartoon3} class="card-img-top" alt="..."/><br/>
  <div class="card-body">
    <p class="card-text">Pay Attraction Deals </p>
  </div>
</div>
    </div>

    <div className='col-lg-2'>
    <div class="card" style={{width: '12rem'}}>
  <img src={cartoon4} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Weekday deals Not to Miss </p>
  </div>
</div>
    </div>

    <div className='col-lg-2'>
    <div class="card" style={{width: '12rem'}}>
  <img src={cartoon5} class="card-img-top" alt="..."/><br/>
  <div class="card-body">
    <p class="card-text">Super Club offers </p>
  </div>
</div>
    </div>

    <div className='col-lg-2'>
    <div class="card" style={{width: '12rem'}}>
  <img src={cartoon6} class="card-img-top" alt="..."/><br/>
  <div class="card-body">
    <p class="card-text">Birthday Deals  </p>
  </div>
</div>
    </div>

  </div><br/>

  </div>
</section>

</div>
    </>
  )
}

export default Home