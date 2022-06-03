import { React, useState, useEffect } from "react";
import Axios from "axios";
import "./Blog.css";
import { useNavigate } from "react-router-dom";

// import SearchIcon from '@mui/icons-material/Search';
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import StadiumIcon from "@mui/icons-material/Stadium";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Kidzappfeed from "../../Components/Kidzapp-feed/Kidzapp-feed";
import {
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
function Blog() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const getData = () => {
    Axios.get(
      "https://api2.kidzapp.com/api/3.0/blogs?country_code=ae&limit=21&page=2"
    )
      .then((res) => {
        console.log(res.data.results);
        setData(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  });

  return (
    <>
      <section className="section-1">
        <div className="container background-1">
          <div className="row">
            <div className="col-lg-12 md-12 sm-12">
              <div className="search-img">
                <form class="d-flex search-bar">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Type Here To Search Blog"
                    aria-label="Search"
                  />
                  <button class="btn btn-primary" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section-2 */}

      <section className="section-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 md-12 sm-12">
              <div className="back-btn">
                {/* <Link to=''> */}
                <Button onClick={() => navigate(-1)}>
                  <h5 className="button-back">
                    {" "}
                    <ArrowBackIcon /> Go Back
                  </h5>
                </Button>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <br />

          <div className="container">
            <div className="row">
              <div className="col-3 button-div">
                <button class="button-85" role="button">
                  Arts & Crafts &nbsp; <BubbleChartIcon />
                </button>
              </div>
              <div className="col-3 button-div">
                <button class="button-85" role="button">
                  Kids Activities &nbsp; <StadiumIcon />
                </button>
              </div>
              <div className="col-3 button-div">
                <button class="button-85" role="button">
                  Parenting &nbsp; <BabyChangingStationIcon />
                </button>
              </div>
              <div className="col-3 button-div">
                <button class="button-85" role="button">
                  Health & Nutrition &nbsp; <HealthAndSafetyIcon />
                </button>
              </div>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-lg-12">
              <h4>The KZ Blog</h4>
              <h6>
                Your source for everything related to Health & Nutrition,
                Parenting, Kids Activities and Arts & Crafts.
              </h6>
            </div>
            <br />
          </div>
        </div>
      </section>

      <div className="container map-1">
        {data?.map((item) => {
          return (
            <div className="row ">
              <div className="col-lg-4 col-md-6 col-sm-12 m-2">

<article class="blog-card">
              <div class="blog-card__background">
                <div class="card__background--wrapper">
                  <div class="card__background--main" >
                  <img src={item.cover_image}/>
                    <div class="card__background--layer"><img src={item.cover_image}/></div>
                  </div>
                </div>
              </div>
              <div class="blog-card__head">
                {/* <span class="date__box">
                  <span class="date__day">11</span>
                
                </span> */}
              </div>
              <div class="blog-card__info">
                <h5> {item.meta_title}</h5><br/>
                
                <DateRangeIcon/> &nbsp; {item.created_at} <br/>
                <AccountCircleIcon/> &nbsp; Posted  By:- {item.auther_name}<br/><br/>
                
                <p className="body-api">{item.excerpt}</p>
                <a href="#" class="btn-card btn--with-icon"><i class="btn-icon fa fa-long-arrow-right"></i>READ MORE</a>
              </div>
            </article>



                    {/* old */}
              </div>
            </div>
          );
        })}
      </div>

      <section className="last-section">
        <div className="container">
          <Kidzappfeed />
        </div>
      </section>
    </>
  );
}

export default Blog;
