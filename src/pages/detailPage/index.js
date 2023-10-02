import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getDetailMoviePage, getMovieVideo } from "../../api";
import styled from "styled-components";
import { DetailMovieTitle } from "../../styles/common.style";
import SimilarMovie from "./components/similarMovie";
import Reviews from "./components/reviews";
import { MOVIE_QUERY_KEY } from "../../consts/movieQueryKey";

const DetailPage = () => {
  const params = useParams();
  const movieId = params.movieId.replace(":", "");

  const { data: movieData } = useQuery(
    [MOVIE_QUERY_KEY.DETAIL_MOVIE, movieId],
    () => getDetailMoviePage(movieId)
  );
  const { data: videoData } = useQuery(
    [MOVIE_QUERY_KEY.DETAIL_VIDEO, movieId],
    () => getMovieVideo(movieId)
  );

  return (
    movieData !== undefined && (
      <DetailPageWrapper>
        {videoData && (
          <DetailMovieVideo
            src={`https://www.youtube.com/embed/${videoData.results[0].key}?autoplay=1&mute=1`}
            frameBorder="0"
            allowFullScreen
          ></DetailMovieVideo>
        )}
        <MovieInfo key={movieData.id}>
          <MovieStar>★{Math.round(movieData.vote_average)}</MovieStar>
          <MovieTitle>{movieData.title}</MovieTitle>
          <ReleaseDate>release {movieData.release_date}</ReleaseDate>
          <TextWrap>
            <MovieAOnelineExplain>{movieData.tagline}</MovieAOnelineExplain>
            <MovieExplain>{movieData.overview}</MovieExplain>
          </TextWrap>
        </MovieInfo>
        <Reviews movieId={movieId} />
        <Recommend>
          <Text>이 영화와 비슷해요!</Text>
          <SimilarMovie movieId={movieId} />
        </Recommend>
      </DetailPageWrapper>
    )
  );
};

export default DetailPage;

const DetailPageWrapper = styled.div`
  width: 1280px;
  height: auto;
  margin: 0 auto;
`;

const DetailMovieVideo = styled.iframe`
  width: 1280px;
  height: 700px;
  margin-top: 52px;
`;

const MovieInfo = styled.div`
  padding-left: 30px;
  color: white;
`;

const MovieStar = styled.div`
  padding-top: 5%;
  color: ${({ theme }) => theme.COLORS.primary.hotPink};
  font-size: ${({ theme }) => theme.FONT_SIZE.movie};
`;

const TextWrap = styled.div`
  width: 1000px;
`;
const MovieTitle = styled.div`
  ${DetailMovieTitle}
  margin-top: 20px;
  padding-bottom: 30px;
`;

const ReleaseDate = styled.div`
  text-align: end;
  font-weight: 100;
  font-size: 24px;
  margin-right: 50px;
  color: ${({ theme }) => theme.COLORS.primary.gray};
`;

const MovieAOnelineExplain = styled.div`
  font-weight: 400;
  font-size: 32px;
  padding-top: 80px;
  padding-bottom: 60px;
`;

const MovieExplain = styled.div`
  width: 1200px;
  font-weight: 300;
  font-size: 28px;
  line-height: 160%;
  word-wrap: break-word;
  padding-bottom: 150px;
`;

const Recommend = styled.div`
  position: relative;
  left: 55%;
  transform: translateX(-50%);
`;
const Text = styled.p`
  color: ${({ theme }) => theme.COLORS.primary["hotPink"]};
  padding-left: 30px;
  font-size: 28px;
  padding-bottom: 30px;
  font-weight: 400;
`;
