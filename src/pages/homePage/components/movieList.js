import React from "react";
import styled from "styled-components";
import { useInfiniteQuery } from "react-query";
import { fetchMovies } from "../../../api";
import { useNavigate, useParams } from "react-router-dom";
import { MOVIE_QUERY_KEY } from "../../../consts/movieQueryKey";

const MovieList = () => {
  const prams = useParams();
  const navigate = useNavigate();

  let pramsKey = prams.movie;
  pramsKey === undefined
    ? (pramsKey = MOVIE_QUERY_KEY.POPULAR)
    : (pramsKey = prams.movie);

  // 영화 목록 받아오기
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
  // 영화 목록 배열
  const movieList = data?.pages[0];

  // 상세 페이지 이동 함수
  const onOpenDetailPage = (movie) => {
    navigate(`/${pramsKey}/:${movie.id}`);
  };

  return (
    <MovieWrapper>
      <MovieGrid>
        {movieList?.map((movie, index) => (
          <MovieTrailer key={movie.id}>
            <MovieImg
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
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
const MovieTrailer = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.2;
  }
`;
const MovieImg = styled.img`
  width: 212px;
  height: 282px;
`;
