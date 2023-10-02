import React, { useEffect } from "react";
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
  const { data, fetchNextPage, isFetching } = useInfiniteQuery(
    `${pramsKey}`,
    async ({ pageParam = 1 }) => {
      const response = await fetchMovies(
        `/movie/${pramsKey}?page=${pageParam}`
      );
      return response.data;
    },
    {
      getNextPageParam: (lastPage) => {
        const page = lastPage.page;
        if (lastPage.total_pages === page) return false;
        return page + 1;
      },
    }
  );

  // 스크롤 최하단 시 fetchNextPage실행
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) return fetchNextPage();
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

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
        {data?.pages.map((page) => {
          const movieList = page.results;
          return movieList.map((movie, index) => (
            <HoverRevealComponents
              key={index}
              movie={movie}
              onOpenDetailPage={onOpenDetailPage}
              isFetching={isFetching}
            />
          ));
        })}
      </MovieGrid>
    </MovieWrapper>
  );
};

export default MovieList;

const MovieWrapper = styled.div`
  margin-top: 200px;
  display: flex;
  justify-content: center;
`;
const MovieGrid = styled.div`
  width: 1172px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 50px;
`;
