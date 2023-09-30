import styled from "styled-components";
import { flexAlignCenter } from "../../styles/common.style";
import { useNavigate } from "react-router-dom";
import { MOVIE_QUERY_KEY } from "../../consts/movieQueryKey";
import ShowRelatedMovie from "./showRelatedMovie";

const Header = () => {
  const navigate = useNavigate();
  const onClickMainHomePage = () => {
    navigate("/");
    window.scroll({
      top: 0,
    });
  };

  const onOpenUpcomingMovieList = () => {
    navigate(MOVIE_QUERY_KEY.UPCOMING);
    window.scroll({
      top: 0,
    });
  };
  const onOpenPopularMovieList = () => {
    navigate(MOVIE_QUERY_KEY.POPULAR);
    window.scroll({
      top: 0,
    });
  };
  const onOpenTopRatedMovieList = () => {
    navigate(MOVIE_QUERY_KEY.TOP_RATED);
    window.scroll({
      top: 0,
    });
  };
  const onOpenNowPlayingMovieList = () => {
    navigate(MOVIE_QUERY_KEY.NOW_PLAYING);
    window.scroll({
      top: 0,
    });
  };

  return (
    <HeaderWrapper>
      <Logo onClick={onClickMainHomePage}>
        <img src="/images/logo.png" alt="로고" />
      </Logo>
      <FilterBar>
        <Standard onClick={onOpenUpcomingMovieList}>개봉 예정</Standard>
        <Standard onClick={onOpenPopularMovieList}>인기 작품</Standard>
        <Standard onClick={onOpenTopRatedMovieList}>높은 평점</Standard>
        <Standard onClick={onOpenNowPlayingMovieList}>상영 중</Standard>
      </FilterBar>
      <ShowRelatedMovie />
      <UserProfile>user</UserProfile>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  z-index: 100;
`;

const Logo = styled.div`
  width: 100px;
  height: 40px;
  cursor: pointer;
`;

const FilterBar = styled.ul`
  position: absolute;
  left: 16%;
  width: 36%;
  ${flexAlignCenter}
  justify-content: space-evenly;
`;

const Standard = styled.li`
  cursor: pointer;
  color: #fff;

  &:hover {
    font-weight: bold;
    color: #ff0458;
  }
`;

// UserInfo.
// 로그인/로그아웃 로직 구현 시 활용할 수 있는 회원 프로필
const UserProfile = styled.button`
  background-color: #ccc;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 40px;
  height: 40px;
`;
