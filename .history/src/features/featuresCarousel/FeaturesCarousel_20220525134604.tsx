/** @format */

//Third Party
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { nanoid } from "@reduxjs/toolkit";
import { compareAsc, format } from "date-fns";

//App
import SingleItem from "./SingleItem";

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
        dotListClass="custom-dot-list-style hidden "
        itemClass="carousel-item-padding-40-px "
      >
        {dummySingleItems.map((item) => (
          <SingleItem
            title={item.title}
            date={item.date}
            text={item.text}
            amount={item.amount}
            id={item.id}
            key={item.id}
          />
        ))}
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

const dummySingleItems = [
  {
    title: "Title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa dolorum tenetur enim molestias corrupti laudantium eum optio, illo quia maiores, dolorem, abexpedita voluptatum voluptatem? Dignissimos ea at magnam eligendi enim. Accusamus, dolor ab!",
    date: format(new Date(), "yyyy MM dd"),
    id: nanoid(),
    amount: "120 ETH",
  },
  {
    title: "Title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa dolorum tenetur enim molestias corrupti laudantium eum optio, illo quia maiores, dolorem, abexpedita voluptatum voluptatem? Dignissimos ea at magnam eligendi enim. Accusamus, dolor ab!",
    date: format(new Date(), "yyyy-MM-dd"),
    id: nanoid(),
    amount: "4 ETH",
  },
  {
    title: "Title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa dolorum tenetur enim molestias corrupti laudantium eum optio, illo quia maiores, dolorem, abexpedita voluptatum voluptatem? Dignissimos ea at magnam eligendi enim. Accusamus, dolor ab!",
    date: format(new Date(), "yyyy-MM-dd"),
    id: nanoid(),
    amount: "16 ETH",
  },
  {
    title: "Title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa dolorum tenetur enim molestias corrupti laudantium eum optio, illo quia maiores, dolorem, abexpedita voluptatum voluptatem? Dignissimos ea at magnam eligendi enim. Accusamus, dolor ab!",
    date: format(new Date(), "yyyy-MM-dd"),
    id: nanoid(),
    amount: "5 ETH",
  },
];

export default FeaturesCarousel;
