import React from "react";
import styled from "styled-components";
import { useInfiniteQuery } from "react-query";
import { fetchMovies } from "../../../api";
import { useParams } from "react-router-dom";
import { MOVIE_QUERY_KEY } from "../../../consts/movieQueryKey";

const MAX_OVERVIEW_LENGTH = 100; // 최대 길이 설정
const MovieList = () => {
  const prams = useParams();
  let pramsKey = prams.movie;
  pramsKey === undefined
    ? (pramsKey = MOVIE_QUERY_KEY.POPULAR)
    : (pramsKey = prams.movie);

  const { data, isFetching } = useInfiniteQuery(
    `${pramsKey}`,
    async ({ pageParam = 1 }) => {
      const response = await fetchMovies(
        `/movie/${pramsKey}?page=${pageParam}`
      );
      return response.results;
    },
    {
      getNextPageParam: (lastPage) =>
        lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    }
  );

  const movieList = data?.pages[0];

  const skipOverView = (overview) => {
    if (overview.length > MAX_OVERVIEW_LENGTH) {
      return overview.substring(0, MAX_OVERVIEW_LENGTH) + "...";
    }
    return overview;
  };

  return (
    <MovieWrapper>
      <MovieGrid>
        {movieList?.map((movie, index) => (
          <MovieTrailer key={movie.id}>
            <MovieImg
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
            <TestBox>
              <div>
                {" "}
                <span>⭑</span>
                <span>{movie.vote_average}</span>
              </div>
              <h3> {movie.title}</h3>
              <p> {skipOverView(movie.overview)}</p>
            </TestBox>
          </MovieTrailer>
        ))}
      </MovieGrid>
      {isFetching && <p>Loading...</p>}
    </MovieWrapper>
  );
};

export default MovieList;

const MovieWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const MovieGrid = styled.div`
  width: 1172px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 50px;
`;

//
const MovieTrailer = styled.div`
  &:hover {
    cursor: pointer;
  }
  position: relative;
`;
const MovieImg = styled.img`
  width: 212px;
  height: 282px;
`;

const TestBox = styled.div`
  width: 212px;
  height: 282px;
  padding: 20px;
  line-height: 20px;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  color: ${({ theme }) => theme.COLORS.white};
  box-sizing: border-box;
  z-index: 1; /* 이미지보다 위에 나오도록 z-index 설정 */
  /* 호버했을 때 표시되도록 설정 */
  ${MovieTrailer}:hover & {
    display: block;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
  }
  div {
    padding: 20px 0;
  }
  span:first-child {
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
    color: ${({ theme }) => theme.COLORS.primary.hotPink};
  }
  h3 {
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }
  p {
    font-size: 15px;
    padding-top: 25px;
  }
`;
