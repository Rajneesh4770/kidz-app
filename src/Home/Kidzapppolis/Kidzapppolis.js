import React, { Component, useEffect,useState } from "react";
import Slider from "react-slick";
import "./Kidzapppolis.css"
import axios from "axios";
import { Card } from "react-bootstrap";
function Kidzapppolis(){
    const settings = {
    //   dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };
    const settings2 = {
        //   dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1
        };
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get("https://api2.kidzapp.com/api/3.0/categories?country_code=ae")
        .then((res)=>{
            setData(res.data)
            console.log(data)
        })
    },[])
    const [data2,setData2] =useState([]);
    useEffect(()=>{
        axios.get("https://api2.kidzapp.com/api/3.0/lists?country_code=ae")
        .then((res)=>{
            setData2(res.data)
        })
    },[])
    return (
        <>
      <div className="container ">
        <center><strong><h1 className="kidzapp-h" style={{ color: "white" }}>Kidzappolis</h1></strong></center><br/>
        <Slider {...settings}>
            {data.map((item)=>(

            
          <div>
          <div className='activity-box item'>
                    <img src={item.image_url} />
                    <h5>{item.name}</h5>
                </div>
          </div>
         
         
        ))}
        </Slider>
      </div><br/>

      <div >
      <center><strong><h1 className="kidzapp-h" style={{ color: "white" }}>Kidzapproved Collections</h1></strong></center><br/>
      {/* <Slider {...settings2}> */}
      <div className="row">
          <div className=" col-lg-3"></div>
            {data2.map((item)=>(
         <div className='col-lg-3'>
                 
           
    <Card className="card-1" style={{ width: '7rem' }}>
  <Card.Img variant="top" src="https://testimages.kidzapp.com/media/lists/Deals%3A%20Big%20Attractions_bd5fafdc-6791-4ae0-b02f-416d384af321.jpg" className="aproved-img" />
  <Card.Body> 
    <Card.Text className='aproved-p'>
     Deals: Big Attraction
    </Card.Text>
   
  </Card.Body>
</Card>
</div>
            ))};
{/* <div className='col-lg-3'>
                 
           
    <Card className="card-1" style={{ width: '12rem' }}>
  <Card.Img variant="top" src="https://testimages.kidzapp.com/media/lists/All%20Kidzapp%20Deals_75a6bc63-c056-42c0-aaa2-cf9991187d77.jpg" />
  <Card.Body> 
    <Card.Text>
     All Kidzapp Deals
    </Card.Text>
   
  </Card.Body>
</Card>
</div>

<div className='col-lg-3'>
                 
           
    <Card className="card-1" style={{ width: '9rem' }}>
  <Card.Img variant="top" src="https://testimages.kidzapp.com/media/lists/Birthday%20Deals_e20da3f5-acec-4473-a0ed-f7240ad1d158.jpg" />
  <Card.Body> 
    <Card.Text>
     Birthday Deals
    </Card.Text>
   
  </Card.Body>
</Card>
</div> */}
           {/* ))} */}
        
           </div>
      </div>
      </>
    );
  }

export default Kidzapppolis