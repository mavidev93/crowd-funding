/** @format */

//App
import CommonTitle from "../../components/CommonTitle/CommonTitle";
import SingleRecommend from './SingleRecommend'

type Props = {};

const dummyRecommendations = [{
  title:"abdolreza joon",
  imgSrc:''
}]

export default function RecommendedList() {
  return (
    <div>
      <CommonTitle
        className="text-sm uppercase mt-2  mb-4	"
        text="Recommended projects"
        variant="h6"
        component="div"
      />

    </div>
  );
}
