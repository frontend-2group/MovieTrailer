import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../styles/common.style";
import { useNavigate } from "react-router-dom";
import { MOVIE_QUERY_KEY } from "../../consts/movieQueryKey";
const Header = () => {
  const navigate = useNavigate();
  const onClickMainHomePage = () => {
    navigate("/");
  };

  const onOpenUpcomingMovieList = () => {
    navigate(MOVIE_QUERY_KEY.UPCOMING);
  };
  const onOpenPopularMovieList = () => {
    navigate(MOVIE_QUERY_KEY.POPULAR);
  };
  const onOpenTopRatedMovieList = () => {
    navigate(MOVIE_QUERY_KEY.TOP_RATED);
  };
  const onOpenNowPlayingMovieList = () => {
    navigate(MOVIE_QUERY_KEY.NOW_PLAYING);
  };

  return (
    <HeaderWrapper>
      <ImageBox onClick={onClickMainHomePage}>
        <img src="/images/logo.png" alt="로고" />
      </ImageBox>
      <div>
        <UlBox>
          <LiBox onClick={onOpenUpcomingMovieList}>개봉 예정</LiBox>
          <LiBox onClick={onOpenPopularMovieList}>인기 작품</LiBox>
          <LiBox onClick={onOpenTopRatedMovieList}>높은 평점</LiBox>
          <LiBox onClick={onOpenNowPlayingMovieList}>상영 중</LiBox>
        </UlBox>
      </div>
      <SearchBox>
        <InputField placeholder="검색어를 입력하세요" />
        <IconButton>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </IconButton>
      </SearchBox>
      <ProfileImgButton>user</ProfileImgButton>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 1024;
  height: 80px;
  padding: 0 50px;
  ${flexCenter}/* justify-content: space-between; */
`;

//logo
const ImageBox = styled.div`
  width: 100px;
  height: 40px;
  :hover {
    cursor: pointer;
  }
`;

const UlBox = styled.ul`
  ${flexAlignCenter}
  /* justify-content: center; */
  justify-content: space-between;
  list-style: none;
  margin-left: 40px;
`;

// li 간격 조절
const LiBox = styled.li`
  margin-right: 40px;
  &:last-child {
    margin-right: 0;
  }
  cursor: pointer;
  color: #fff;
`;

//input 감싸는 박스
const SearchBox = styled.div`
  flex-grow: 1;
  ${flexCenter}
  position: relative;
`;

//인풋 태그 css
const InputField = styled.input`
  width: 400px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin-right: 10px; //버튼하고 간격
  text-align: center;
  position: absolute;
  right: 150px;
`;

// input 옆에 버튼
const IconButton = styled.button`
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #000;
  :hover {
    transform: scale(1.1);
  }
  position: absolute;
  right: 180px;
`;

//??버튼 css
const ProfileImgButton = styled.button`
  background-color: #ccc;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 40px;
  height: 40px;
`;
