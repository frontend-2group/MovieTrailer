import { styled } from "styled-components";
import { flexAlignCenter, flexCenter } from "../../styles/common.style";
import { useNavigate } from "react-router-dom";

const SearchResultPage = () => {
  const navigate = useNavigate();
  const onClickDetailPage = () => {
    navigate("/detailPage");
  };
  return (
    <>
      <SearchPageWapper>
        <SearchImageBox>
          <img src="/images/testimg.jpeg" alt="text" />
        </SearchImageBox>
        <SearchTextBox>
          <h1>영화 제목</h1>
          <hr />
          <p>release 2023.00.00</p>
          <p>영화 설명 요약 영화 설명 요약 영화 설명 요약 영화 설명 요약 ...</p>
          <SearchButtonBox onClick={onClickDetailPage}>
            상세보기
          </SearchButtonBox>
        </SearchTextBox>
      </SearchPageWapper>
    </>
  );
};
export default SearchResultPage;
const SearchPageWapper = styled.div`
  background-color: #434343;
  ${flexCenter} /* ${flexAlignCenter} */
  height: 500px;
`;
const SearchImageBox = styled.div`
  width: 230px;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const SearchTextBox = styled.div`
  /* color: ${({ theme }) => theme.COLORS.primary[300]}; */
  padding-left: 100px;
  line-height: 70px;
  color: #ffffff;
  h1 {
    font-size: 34px;
    font-weight: 800;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  }
`;
const SearchButtonBox = styled.button`
  background-color: #ff0458;
  color: #ffffff;
  border: none;
  font-weight: 500;
  border-radius: 30px;
  cursor: pointer;
  width: 100px;
  height: 40px;
`;
