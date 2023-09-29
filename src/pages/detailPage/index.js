import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getDetailMoviePage, getMovieVideo } from "../../api";
import styled from "styled-components";
import { DetailMovieTitle } from "../../styles/common.style";
import SimilarMovie from "./components/similarMovie";
import Reviews from "./components/reviews";

const DetailPage = () => {
  const params = useParams();
  const movieId = params.movieId.replace(":", "");

  const { data: movieData, refetch: movieDataRefetch } = useQuery(
    ["detailMovie"],
    () => getDetailMoviePage(movieId)
  );
  const { data: videoData, refetch: videoRefetch } = useQuery(["video"], () =>
    getMovieVideo(movieId)
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
        <TextBox>
          <MovieStar>★{Math.round(movieData.vote_average)}</MovieStar>
          <MovieTitle>{movieData.title}</MovieTitle>
          <ReleaseDate>release {movieData.release_date}</ReleaseDate>
          <TextWrap>
            <MovieAOnelineExplain>{movieData.tagline}</MovieAOnelineExplain>
            <MovieExplain>{movieData.overview}</MovieExplain>
          </TextWrap>
        </TextBox>
        <SimiliarMovieBox>
          <SimiliarMovieBoxMent>이 영화와 비슷해요!</SimiliarMovieBoxMent>
          <SimilarMovie
            movieId={movieId}
            movieDataRefetch={movieDataRefetch}
            videoRefetch={videoRefetch}
          />
        </SimiliarMovieBox>
        {/* 리뷰컴포넌트 */}
        <Reviews movieId={movieId} />
      </DetailPageWrapper>
    )
  );
};

export default DetailPage;

// 전체
const DetailPageWrapper = styled.div`
  width: 1280px;
  height: auto;
  margin: 0 auto;
`;

// 비디오
const DetailMovieVideo = styled.iframe`
  width: 1280px;
  height: 700px;
  margin-top: 52px;
`;

const MovieStar = styled.span`
  color: ${({ theme }) => theme.COLORS.primary["hotPink"]};
  font-size: ${({ theme }) => theme.FONT_SIZE.movie};
`;

const TextBox = styled.div`
  padding-left: 30px;
  color: white;
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
  color: ${({ theme }) => theme.COLORS.primary["gray"]};
`;

const MovieAOnelineExplain = styled.div`
  font-weight: 400;
  font-size: 35px;
  padding-top: 80px;
  padding-bottom: 60px;
`;

const MovieExplain = styled.div`
  font-weight: 300;
  font-size: 28px;
  word-wrap: break-word;
  padding-bottom: 150px;
`;

const SimiliarMovieBox = styled.div``;

const SimiliarMovieBoxMent = styled.p`
  color: ${({ theme }) => theme.COLORS.primary["hotPink"]};
  padding-left: 30px;
  font-size: 28px;
  padding-bottom: 30px;
  font-weight: 400;
`;
