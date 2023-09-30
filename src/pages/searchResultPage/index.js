import { styled } from "styled-components";
import { flexCenter } from "../../styles/common.style";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getSearchMovie } from "../../api";

const SearchResultPage = () => {
  const navigate = useNavigate();
  const onClickDetailPage = () => {
    navigate("/detailPage");
  };

  const params = useParams();
  const paramKeyword = params.keyWord.replace(":", "");

  const { data } = useQuery(["qqqqq"], () => getSearchMovie(paramKeyword));
  data && console.log(data);

  return (
    <>
      {data?.results.map((movie) => (
        <SearchPageWapper>
          <SearchImageBox>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          </SearchImageBox>
          <SearchTextBox>
            <h1>{movie.title}</h1>
            <hr />
            <p>{movie.release_date}</p>
            <p>{movie.overview}</p>
            <SearchButtonBox
              onClick={() => {
                navigate(`/movie/:${movie.id}`);
              }}
            >
              상세보기
            </SearchButtonBox>
          </SearchTextBox>
        </SearchPageWapper>
      ))}
      <div>{data?.results[0].title}</div>
    </>
  );
};
export default SearchResultPage;

const SearchPageWapper = styled.div`
  background-color: #434343;
  ${flexCenter}
  height: 500px;
`;

//영화 포스터 박스
const SearchImageBox = styled.div`
  width: 230px;
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

//영화 제목, 간략 설명 박스
const SearchTextBox = styled.div`
  /* color: ${({ theme }) => theme.COLORS.primary[300]}; */
  color: ${({ theme }) => theme.COLORS.white};
  padding-left: 100px;
  line-height: 70px;

  h1 {
    font-size: 34px;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  }
`;

// 상세보기 버튼css
const SearchButtonBox = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.COLORS.black};
    //색상변경예정
  }

  background-color: ${({ theme }) => theme.COLORS.primary.hotPink};
  color: ${({ theme }) => theme.COLORS.white};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;
