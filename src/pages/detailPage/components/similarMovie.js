import { useQuery } from "react-query";
import { getSimilarMovie } from "../../../api";
import styled from "styled-components";

const SimilarMovie = ({ movieId }) => {
  const { data } = useQuery(["similar"], () => getSimilarMovie(movieId));

  const similarArr = data && data.results;

  return (
    data && (
      <SimilarMovieWrapper>
        {similarArr.map((img, index) => (
          <MovieImg
            key={index}
            src={`https://image.tmdb.org/t/p/w500${img.poster_path}`}
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

const MovieImg = styled.img`
  width: 212px;
  height: 282px;
`;
