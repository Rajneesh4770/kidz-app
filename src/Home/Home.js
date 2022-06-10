import {React,useState,useEffect} from "react";
import "./Home.css";
import Axios from "axios"
import { Carousel } from "react-bootstrap"
import blog1 from "../Assets/blog1.jpg";
import blog2 from "../Assets/blog2.jpg";
import blog3 from "../Assets/blog3.jpg";
import blog4 from "../Assets/blog4.jpeg";
import blog5 from "../Assets/blog5.jpg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea, Rating } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Kidzappfeed from '../Components/Kidzapp-feed/Kidzapp-feed'
import SlickCard from "./Slick-slides/SlickCard";
import Kidzapppolis from "./Kidzapppolis/Kidzapppolis";


function Home() {
  const [data,setData]=useState([])
  const renderSlides = () =>
    ['https://drfsb8fjssbd3.cloudfront.net/images/dubai-eye.png',
    'https://drfsb8fjssbd3.cloudfront.net/images/lovin-dubai.png',
    "https://drfsb8fjssbd3.cloudfront.net/images/dubai-tv.png",
    'https://drfsb8fjssbd3.cloudfront.net/images/the-national.png',
    'https://drfsb8fjssbd3.cloudfront.net/images/dubai-eye.png',
    'https://drfsb8fjssbd3.cloudfront.net/images/lovin-dubai.png',
    'https://drfsb8fjssbd3.cloudfront.net/images/dubai-eye.png',
    "https://drfsb8fjssbd3.cloudfront.net/images/dubai-tv.png"

      ].map(num => (
      <div>
        <img className='map-images' src={num} alt=""/>
        
      </div>
    ));
    const getData=()=>{
    Axios.get("https://api2.kidzapp.com/api/3.0/experiences/curated-list/?list_name=featured_banner_uae&country_code=&page=1&page_size=10&city=&website=1")
    .then((res)=>{
      setData(res.data.results)
      console.log(res.data.results)
    })
  }
  useEffect(()=>{
    getData();
  },[])

  
    
  return (
    <>
      <div className="container-flex">
        <section className="section1">
        
        <Carousel>
  {data.map((item)=>{
    return(
              <Carousel.Item>
    <img
      className="d-block w-100"
      src={item.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 className='crousel-h'>{item.title}</h1>
      <p className='crousel-p'>{item.description}</p>
    </Carousel.Caption>
    
   </Carousel.Item>
   )
  })};
</Carousel>
       
        </section>

            {/* section-2 */}

        <section className="section-2">
          <div class="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="animate-charcter">
                  {" "}
                  Find the best places to take your kids in the UAE
                </h1>
                <br />
                <br />
                <h2 className="animate-charcter"> Handpicked Experiences</h2>
                <br />
                <h4>
                  Our pick of the best kids activities in Dubai, Abu Dhabi and
                  the rest of the UAE
                </h4>
                <br />
              </div>
            </div>

            {/* 1st card row */}




{/* slick component */}
<SlickCard />
{/* components closed */}


            

            {/* 2nd row of card */}
           
          </div>
        </section>
        <br />

        <section className="section-3">
          <Kidzapppolis/>
        </section>

        {/* Section-4 */}

        <section className="section-4">
          <center>
            
            <h1 style={{ color: "white" }}>Our Blog Pics</h1>
          <br />
          </center>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12">
                <Card className="card-4" sx={{ maxWidth: 650 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="350"
                      image={blog1}
                      alt=""
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Kidz app Team
                      </Typography>
                      <br />
                      <Typography variant="body2" color="text.secondary">
                        Fun Things To Do With Your Older Kids In Dubai And Abu
                        Dhabi
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
                </Card>
              </div>
              <div className="col-lg-4 col-sm-12 col-md-12">
                <Card className="card-4" sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="350"
                      image={blog2}
                      alt=""
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Kidz app Team
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Kids birthdays In Dubai And Aby Dhabi: 10+ Awesome Ways
                        To Celebrate
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <Card className="card-4" sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={blog3}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        kidz App Team
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        10+ Big Family Attractions You Need To Visit This Eid
                        Holiday
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
                </Card>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12">
                <Card className="card-4" sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={blog4}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Kidz App Team
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        15 Indoor Activities In Dubai And Abu Dhabi You Might
                        Not Have Tried Yet
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
                </Card>
              </div>

              <div className="col-lg-4 md-12 sm-12">
                <Card className="card-4" sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={blog5}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Kidz App Team
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        10 Ramadan Deals In Dubai And Abu Dhabi You Don’t Want
                        To Miss
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-lg-4">
                <Card className="card-4" sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="350"
                      image={blog2}
                      alt=""
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Kidz app Team
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Kids birthdays In Dubai And Aby Dhabi: 10+ Awesome Ways
                        To Celebrate
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
                </Card>
              </div>
              <div className="col-lg-8 special ">
                <Card className="card-4" sx={{ maxWidth: 650 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="350"
                      image={blog1}
                      alt=""
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Kidz app Team
                      </Typography>
                      <br />
                      <Typography variant="body2" color="text.secondary">
                        Fun Things To Do With Your Older Kids In Dubai And Abu
                        Dhabi
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <Card className="card-4" sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={blog3}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        kidz App Team
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        10+ Big Family Attractions You Need To Visit This Eid
                        Holiday
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
                </Card>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12">
                <Card className="card-4" sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={blog4}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Kidz App Team
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        15 Indoor Activities In Dubai And Abu Dhabi You Might
                        Not Have Tried Yet
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
                </Card>
              </div>

              <div className="col-lg-4 md-12 sm-12">
                <Card className="card-4" sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={blog5}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Kidz App Team
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        10 Ramadan Deals In Dubai And Abu Dhabi You Don’t Want
                        To Miss
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </div>
            <br />
          </div>
        </section>

        {/* Section-5 */}

        <section className="section-5">
          <div className="container">
            <center>
              {" "}
              <h1 className="animate-charcter">
                Kids Activities Reviews by Real Parents
              </h1>
            </center>
            <br />
            <div className="row">
              <div className="col-lg-4">
                <Card className='media-5' sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      TR88House Family
                    </Typography>
                    <Typography variant="h4" component="div" color="blue">
                      MAzzING
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Not for kids 6and under.. it's would be boring! They would
                      run around mindlessly and not know what's going on.... I
                      saw kids running around... on the tramnoline and hitting
                      themselves.
                    </Typography>
                    <Typography variant="body2">
                      <Rating name="rating" />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
              <div className="col-lg-4">
                <Card className='media-5' sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      OutDoor playground at AI Barari
                    </Typography>
                    <Typography variant="h4" component="div" color="blue">
                      It's Ok
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Not for kids 6and under.. it's would be boring! They would
                      run around mindlessly and not know what's going on.... I
                      saw kids running around... on the tramnoline and hitting
                      themselves.
                    </Typography>
                    <Typography variant="body2">
                      <Rating name="rating" />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>

              <div className="col-lg-4">
                <Card className='media-5' sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      BOUNCE X
                    </Typography>
                    <Typography variant="h4" component="div" color="blue">
                      Amazing
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Not for kids 6and under.. it's would be boring! They would
                      run around mindlessly and not know what's going on.... I
                      saw kids running around... on the tramnoline and hitting
                      themselves.
                    </Typography>
                    <Typography variant="body2">
                      <Rating name="rating" />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
            </div>
          </div>
        </section>
        {/* section-5 closed */}

        {/* section-6 */}

        <section className="section-6">
          <div className="container">
            <center>
              <h1 style={{ color: "darkblue" }}>As Featured in </h1>
            </center>
            <br />

              <div className="container">
              <div className="App">
      <Slider
        dots={false}
        slidesToShow={4}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
      >
        {renderSlides()}
      </Slider>
    </div>

              </div><br/>

<Kidzappfeed/>
            
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
