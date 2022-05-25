/** @format */
// import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const FeaturesCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src="https://images.unsplash.com/photo-1653368263498-6e709e5e7b7a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1653339997956-5554594ff10f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1653317059878-2814018c7ae6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default FeaturesCarousel;
