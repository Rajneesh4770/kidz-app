import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "./Kidzapppolis.css";
import axios from "axios";
import { Card } from "react-bootstrap";
function Kidzapppolis() {
  const settings = {
    //   dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const settings2 = {
    //   dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api2.kidzapp.com/api/3.0/categories?country_code=ae")
      .then((res) => {
        setData(res.data);
        console.log(data);
      });
  }, []);
  const [data2, setData2] = useState([]);
  useEffect(() => {
    axios
      .get("https://api2.kidzapp.com/api/3.0/lists?country_code=ae")
      .then((res) => {
        let kidzaprovedCollections = [];

        // let blogNames = []
        // let review_dates = []
        let response_Name = [];
        if (res.data.length > 0) {
          for (let val of res.data) {
            if (
              val.create_button === false &&
              val.internal_name !== "featured" &&
              val.internal_name !== "featured_banner_uae"
            ) {
              response_Name.push(val);
            } else if (
              val.create_list === true &&
              val.internal_name !== "featured" &&
              val.internal_name !== "featured_banner_uae"
            ) {
              response_Name.push(val);
            }
            if (val.create_button === true) {
              kidzaprovedCollections.push(val);
            }
          }
        }

        setData2(kidzaprovedCollections);
        console.log(data2, "kidzaproved collection");
      });
  }, []);
  return (
    <>
      <div className="container ">
        <center>
          <strong>
            <h1 className="kidzapp-h" style={{ color: "white" }}>
              Kidzappolis
            </h1>
          </strong>
        </center>
        <br />
        <Slider {...settings}>
          {data.map((item) => (
            <div>
              <div className="activity-box item">
                <img src={item.image_url} />
                <h5>{item.name}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <br />

      <div className="container">
        <center>
          <strong>
            <h1 className="kidzapp-h" style={{ color: "white" }}>
              Kidzapproved Collections
            </h1>
          </strong>
        </center>
        <br />
        <Slider {...settings2}>
          {data2.map((item1) => (
            <div>
              <Card className=" conditional-card" style={{ width: "7rem" }}>
                <Card.Img
                  variant="top"
                  src={item1.image_url}
                  className="aproved-img"
                />
                <Card.Body>
                  <Card.Text className="aproved-p">{item1.name}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Kidzapppolis;
