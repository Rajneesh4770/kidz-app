import React,{useState,useEffect} from 'react'
import "./HomeBlog.css"
import axios from "axios"
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Button,CardContent,Card,CardActions,Typography } from "@mui/material";
function HomeBlog() {
    const [data,setData]=useState([])
    useEffect(()=>{
                    axios.get("https://api2.kidzapp.com/api/3.0/blogs?page=1&limit=10&country_code=ae")
                    .then((res)=>{
                        setData(res.data.results)

                    })
    },[])
  return (
    <>
     <center>
            
            <h1 style={{ color: "white" }}>Our Blog Pics</h1>
          <br />
          </center>
          <div className="container">
            <div className="row">
                {data.map((item,i)=>{

             
             return(
                <div className={`${i===0 ||i===5?'col-md-8':'col-md-4 '} col-sm-12 blog-card-home`}>
                <Card className="card-4" sx={{ maxWidth: 650 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="350"
                      image={item.cover_image}
                      alt=""
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" color="#002240" component="div" className="title-blog">
                    {item.meta_title}
                      </Typography>
                      <br />
                      <Typography variant="h6" color="#9F57A9">
                        {item.auther_name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                   
                  </CardActions>
                </Card>
              </div>
             )
                })}
              </div>
            </div>
        
          
    </>
  )
}

export default HomeBlog