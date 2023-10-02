import { useQuery } from "react-query";
import { getSimilarMovie } from "../../../api";
import styled from "styled-components";
import HoverRevealComponents from "../../../components/hoverReveal";
import { useNavigate, useParams } from "react-router-dom";
import { MOVIE_QUERY_KEY } from "../../../consts/movieQueryKey";

const SimilarMovie = ({ movieId }) => {
  const params = useParams();
  const navigate = useNavigate();

  const { data } = useQuery([MOVIE_QUERY_KEY.SIMILAR_MOVIE, movieId], () =>
    getSimilarMovie(movieId)
  );

  const similarArr = data && data.results;

  // 상세 페이지 이동 함수
  const onOpenDetailPage = (movie) => {
    navigate(`/${params.movie}/:${movie.id}`);
    window.scroll({
      top: 0,
    });
  };

  return (
    data && (
      <SimilarMovieWrapper>
        {similarArr.map((movie) => (
          <HoverRevealComponents
            key={movie.id}
            movie={movie}
            onOpenDetailPage={onOpenDetailPage}
          />
        ))}
      </SimilarMovieWrapper>
    )
  );
};
export default SimilarMovie;

const SimilarMovieWrapper = styled.div`
  width: 1172px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 50px;
`;
