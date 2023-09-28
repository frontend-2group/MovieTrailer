import { useQuery } from "react-query";
import { getReviews } from "../../../api";

const Reviews = ({ movieId }) => {
  // 디테일 페이지로 이동한 영화의 리뷰 내용입니다.
  const { data } = useQuery(["review"], () => getReviews(movieId));
  data && console.log(data);

  return <div>{/* 리뷰창 */}</div>;
};

export default Reviews;
