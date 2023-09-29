import { useQuery } from "react-query";
import { getSimilarMovie } from "../../../api";
import styled from "styled-components";
import HoverRevealComponents from "../../../components/hoverReveal";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const SimilarMovie = ({ movieId, movieDataRefetch, videoRefetch }) => {
  const params = useParams();
  const navigate = useNavigate();

  const { data, refetch } = useQuery(["similar"], () =>
    getSimilarMovie(movieId)
  );

  useEffect(() => {
    movieDataRefetch();
    videoRefetch();
    refetch();
  });

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
