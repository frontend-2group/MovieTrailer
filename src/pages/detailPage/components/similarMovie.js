import { useQuery } from "react-query";
import { getSimilarMovie } from "../../../api";
import styled from "styled-components";
import HoverRevealComponents from "../../../components/hoverReveal";
import { useNavigate, useParams } from "react-router-dom";

const SimilarMovie = ({ movieId }) => {
  const prams = useParams();
  const navigate = useNavigate();

  const { data } = useQuery(["similar"], () => getSimilarMovie(movieId));

  const similarArr = data && data.results;

  // 상세 페이지 이동 함수
  const onOpenDetailPage = (movie) => {
    navigate(`/${prams.movie}/:${movie.id}`);
  };

  return (
    data && (
      <SimilarMovieWrapper>
        {similarArr.map((movie, index) => (
          <HoverRevealComponents
            movie={movie}
            key={index}
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
