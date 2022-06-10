import { useState, useEffect } from "react";
import Slider from "react-slick";
import "./Slick.css";
import axios from "axios";
import { Typography,CardContent,CardMedia,CardActions,Button,Card } from "@mui/material";
function SlickCard() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api2.kidzapp.com/api/3.0/lists?country_code=ae")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err, "error"));
  },[]);

  // console.log(data);

  
    const settings1 = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    const [resData1,setResData1]=useState([]);
    const[activeTab,setActiveTab]=useState("featured_kidzapp_deal");
    useEffect(()=>{
     axios.get(`https://api2.kidzapp.com/api/3.0/experiences/curated-list/?list_name=${activeTab}&country_code=&page=1&page_size=10&city=&website=1`)
     .then((res)=>{
      setResData1(res.data.results)
       console.log("apiname",activeTab);
       console.log("data",resData1)
     }
    
     )  .catch(err=>{
      console.log(err)
    })
    },[activeTab]);
  
  return (
   <>
      <div className="container slider-1">
        <Slider {...settings}>
          {data?.map((item) => (
            <div>
              <button onClick={()=>setActiveTab(item.internal_name)} className="button-14" role="button">
                {item.name}
              </button>
            </div>
          ))}
        </Slider>
      </div><br/>
              {/* CardSlider */}
             
              <Slider {...settings1} className="slick-1">
                {resData1?.map((item)=>(

               
<div >
<Card className='card-hover-1' sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image_url}

                    alt=" "
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className="item-title">
                      {item.title}
                    </Typography>
                    <Typography variant="body4" color="purple" className="item-title">
                     {item.brief_address}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained" color="error">
                      Book Now
                    </Button>
                  </CardActions>
                </Card>
</div>
 ))}
</Slider>

      </>      
  );
}

export default SlickCard;
