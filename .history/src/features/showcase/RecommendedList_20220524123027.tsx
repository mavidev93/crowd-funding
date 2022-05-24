/** @format */

//App
import CommonTitle from "../../components/CommonTitle/CommonTitle";
import SingleRecommend from "./SingleRecommend";

type Props = {};

const dummyRecommendations = [
  {
    title: "abdolreza joon",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia officia numquam quos!",
    imgSrc:
      "https://images.unsplash.com/photo-1619650277752-9b853abf815b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887",
  },
  {
    title: "abdolreza joon",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia officia numquam quos!",
    imgSrc:
      "https://images.unsplash.com/photo-1619650277752-9b853abf815b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887",
  },
  {
    title: "abdolreza joon",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia officia numquam quos!",
    imgSrc:
      "https://images.unsplash.com/photo-1619650277752-9b853abf815b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887",
  },
];

export default function RecommendedList() {
  return (
    <div className="py-5">
      <CommonTitle
        className="text-sm uppercase mt-2  mb-4	"
        text="Recommended projects"
        variant="h6"
        component="div"
      />
      <div className="flex flex-col gap-4 justify-between">
        {dummyRecommendations.map((r) => (
          <SingleRecommend
          
            key={r.imgSrc}
            title={r.title}
            text={r.text}
            imgSrc={r.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}
