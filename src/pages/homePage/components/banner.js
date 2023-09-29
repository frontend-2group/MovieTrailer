import styled from "styled-components";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getMovieVideo } from "../../../api";

const Banner = () => {
  const params = useParams();
  const movieId = params.movieId;

  // const { data: videoData } = useQuery(["video"], () => getMovieVideo(movieId));
  // console.log(videoData); // undefined

  // 개봉 예정작들 포스터 이미지 슬라이드?? 아니면 대표 영화 영상 무제한 틀어놓기? 배너 어떻게 할까요
  return (
    <Wrapper>
      {/* {videoData && ( */}
      <ShowContent>
        {/* <Video
          src={`https://www.youtube.com/embed/${videoData.results[0].key}?autoplay=1&mute=1`}
        /> */}
      </ShowContent>
      {/* )} */}
      <TextBox>
        <MovieTitle>movie title</MovieTitle>
        <ReleaseDate>release 2024.00.00</ReleaseDate>
      </TextBox>
    </Wrapper>
  );
};
export default Banner;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 800px;
  background-color: hotpink;
  opacity: 0.5;
`;
const ShowContent = styled.div``;
const Video = styled.iframe`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const TextBox = styled.div`
  position: absolute;
  left: 5%;
  bottom: 10%;
  font-size: 20px;
  color: white;
  text-align: left;
`;
const MovieTitle = styled.div`
  font-weight: 700;
  font-size: 50px;
  padding-bottom: 20px;
`;

const ReleaseDate = styled.div`
  font-weight: 100;
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.primary["gray"]};
`;
