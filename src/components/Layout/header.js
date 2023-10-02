import React, { useState } from "react";
import styled from "styled-components";
import { flexAlignCenter } from "../../styles/common.style";
import { useNavigate } from "react-router-dom";
import { MOVIE_QUERY_KEY } from "../../consts/movieQueryKey";
import SearchBox from "./searchBox";

const Header = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(MOVIE_QUERY_KEY.POPULAR);

  const onClickMainHomePage = () => {
    navigate("/");
    window.scroll({
      top: 0,
    });
  };

  const onOpenTab = (tabKey) => {
    navigate(tabKey);
    window.scroll({
      top: 0,
    });
    setActiveTab(tabKey);
  };

  return (
    <HeaderWrapper>
      <Logo onClick={onClickMainHomePage}>
        <img src="/images/logo.png" alt="Catcha Logo" />
      </Logo>
      <FilterBar>
        <Standard
          onClick={() => onOpenTab(MOVIE_QUERY_KEY.UPCOMING)}
          active={activeTab === MOVIE_QUERY_KEY.UPCOMING}
        >
          개봉 예정
        </Standard>
        <Standard
          onClick={() => onOpenTab(MOVIE_QUERY_KEY.POPULAR)}
          active={activeTab === MOVIE_QUERY_KEY.POPULAR}
        >
          인기 작품
        </Standard>
        <Standard
          onClick={() => onOpenTab(MOVIE_QUERY_KEY.TOP_RATED)}
          active={activeTab === MOVIE_QUERY_KEY.TOP_RATED}
        >
          높은 평점
        </Standard>
        <Standard
          onClick={() => onOpenTab(MOVIE_QUERY_KEY.NOW_PLAYING)}
          active={activeTab === MOVIE_QUERY_KEY.NOW_PLAYING}
        >
          상영 중
        </Standard>
      </FilterBar>
      <SearchBox />
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
  color: ${(props) => (props.active ? "#ff0458" : "#fff")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};

  &:hover {
    font-weight: bold;
    color: #ff0458;
  }
`;

const UserProfile = styled.button`
  background-color: #ccc;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 40px;
  height: 40px;
`;
