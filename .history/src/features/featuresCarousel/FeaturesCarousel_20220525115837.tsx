/** @format */

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React from "react";

type Props = {};

const FeaturesCarousel = (props: Props) => {
  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlay={true}
        autoPlaySpeed={2500}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={300}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={props.deviceType}
        dotListClass="custom-dot-list-style "
        itemClass="carousel-item-padding-40-px mx-4"
      >
        <div className="h-48  w-full bg-primary-color-dark"></div>
        <div className="h-48  w-full bg-red-500"></div>
        <div className="h-48  w-full bg-blue-400"></div>
        <div className="h-48  w-full bg-green-200"></div>
        <div className="h-48  w-full bg-yellow-500"></div>
        <div className="h-48  w-full bg-red-500"></div>
        <div className="h-48  w-full bg-blue-400"></div>
        <div className="h-48  w-full bg-green-200"></div>
        <div className="h-48  w-full bg-yellow-500"></div>
      </Carousel>
    </div>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default FeaturesCarousel;
