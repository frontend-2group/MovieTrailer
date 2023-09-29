import React from "react";
import styled from "styled-components";
import { useInfiniteQuery } from "react-query";
import { fetchMovies } from "../../../api";
import { useNavigate, useParams } from "react-router-dom";
import { MOVIE_QUERY_KEY } from "../../../consts/movieQueryKey";
import HoverRevealComponents from "../../../components/hoverReveal";

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
    window.scroll({
      top: 0,
    });
  };

  return (
    <MovieWrapper>
      <MovieGrid>
        {movieList?.map((movie, index) => (
          <HoverRevealComponents
            movie={movie}
            onOpenDetailPage={onOpenDetailPage}
          />
        ))}
      </MovieGrid>
      {isFetching && <p>Loading...</p>}
    </MovieWrapper>
  );
};

export default MovieList;

const MovieWrapper = styled.div`
  margin-top: 900px;
  display: flex;
  justify-content: center;
`;
const MovieGrid = styled.div`
  width: 1172px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 50px;
`;
