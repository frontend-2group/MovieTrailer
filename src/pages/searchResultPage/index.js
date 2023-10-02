import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getSearchMovie } from "../../api";
import { MOVIE_QUERY_KEY } from "../../consts/movieQueryKey";

const SearchResultPage = () => {
  const navigate = useNavigate();

  const params = useParams();
  const paramKeyword = params.keyWord.replace(":", "");

  const { data } = useQuery([MOVIE_QUERY_KEY.CONTAIN_KEYWORD], () =>
    getSearchMovie(paramKeyword)
  );

  return (
    <Wrapper>
      <Text>
        "{paramKeyword}" 관련 검색 목록 총 {paramKeyword.length}건
      </Text>
      {data?.results.map((movie) => (
        <OneMovie>
          <MoviePoster>
            {data !== null ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="movie poster"
              />
            ) : (
              <img src={"../images/noPoster.png"} alt="no poster" />
            )}
          </MoviePoster>
          <MovieInfo>
            <Title>{movie.title}</Title>
            <hr />
            <p>{movie.release_date}</p>
            <Description>{movie.overview}</Description>
            <LookDetailBtn
              onClick={() => {
                navigate(`/movie/:${movie.id}`);
              }}
            >
              상세보기
            </LookDetailBtn>
          </MovieInfo>
        </OneMovie>
      ))}
    </Wrapper>
  );
};
export default SearchResultPage;

const Text = styled.h2`
  position: absolute;
  top: 1%;
  left: 10%;
  color: ${({ theme }) => theme.COLORS.white};
`;

const Wrapper = styled.div`
  padding: 10%;
`;
const OneMovie = styled.div`
  min-height: 500px;
  display: flex;
`;

//영화 포스터 박스
const MoviePoster = styled.div`
  margin: 0;
  img {
    min-width: 230px;
    max-width: 230px;
    border-radius: 10px;
    display: inline-block;
    border: 1px solid #111;
  }
`;

const MovieInfo = styled.div`
  width: 100%;
  padding-left: 100px;
  line-height: 40px;
  color: ${({ theme }) => theme.COLORS.white};
`;
const Title = styled.h1`
  font-size: 34px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  padding-bottom: 20px;
`;
const Description = styled.p`
  padding: 2% 0;
  color: #999;
`;
const LookDetailBtn = styled.button`
  width: 100px;
  height: 40px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.primary.hotPink};
  border: 1px solid ${({ theme }) => theme.COLORS.primary.hotPink};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.COLORS.black};
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    background-color: ${({ theme }) => theme.COLORS.primary.hotPink};
    color: ${({ theme }) => theme.COLORS.white};
  }
`;
