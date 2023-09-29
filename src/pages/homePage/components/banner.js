import styled from "styled-components";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getMovieVideo } from "../../../api";

const Banner = () => {
  const params = useParams();
  const { data: videoData } = useQuery(["video"], () => getMovieVideo(762430));

  return (
    <Wrapper>
      <ShowContent>
        {videoData && (
          <Video
            src={`https://www.youtube.com/embed/${videoData.results[0].key}?autoplay=1&mute=1`}
            frameBorder="0"
            allowFullScreen
          />
        )}
      </ShowContent>
    </Wrapper>
  );
};
export default Banner;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 800px;
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
