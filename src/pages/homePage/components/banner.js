import styled from "styled-components";
import { useQuery } from "react-query";
import { getMovieVideo } from "../../../api";
import { MOVIE_QUERY_KEY } from "../../../consts/movieQueryKey";

const Banner = () => {
  const { data: videoData } = useQuery([MOVIE_QUERY_KEY.BANNER_VIDEO], () =>
    getMovieVideo(762430)
  );

  return (
    <Wrapper>
      <ShowContent>
        {videoData && (
          <Video
            src={`https://www.youtube.com/embed/${videoData.results[0].key}?autoplay=1&mute=1`}
            frameBorder="0"
            allowFullScreen
            autoplay
          />
        )}
      </ShowContent>
    </Wrapper>
  );
};
export default Banner;

const Wrapper = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 900px;
  opacity: 0.5;
  overflow: hidden;
`;
const ShowContent = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Video = styled.iframe`
  width: 2000px;
  height: 1100px;
  overflow: hidden;
`;
