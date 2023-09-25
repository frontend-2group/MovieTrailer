import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
const Header = () => {
  return (
    <HeaderWapper>
      <ImageBox>
        <img src="/images/logo.png" alt="로고" />
      </ImageBox>
      <div>
        <UlBox>
          <LiBox>개봉 예정</LiBox>
          <LiBox>인기 작품</LiBox>
          <LiBox>높은 평점</LiBox>
          <LiBox>상영 중</LiBox>
        </UlBox>
      </div>
      <SearchBox>
        <InputField placeholder="검색어를 입력하세요" />
        <IconButton>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </IconButton>
      </SearchBox>
      <ProfileImgButton>?</ProfileImgButton>
    </HeaderWapper>
  );
};
export default Header;
const HeaderWapper = styled.div`
  width: 1024;
  height: 80px;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
`;

//logo
const ImageBox = styled.div`
  width: 100px;
  height: 40px;
  /* position: absolute;
  left: 10%;
  & > img {
    width: 100%;
  } */
`;

const UlBox = styled.ul`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* justify-content: space-between; */
  //지울것
  /* box-sizing: border-box; */
  list-style: none;
`;

// li 간격 조절
const LiBox = styled.li`
  margin-right: 40px;
  &:last-child {
    margin-right: 0;
  }
  cursor: pointer;
`;

//input 감싸는 박스
const SearchBox = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//인풋 태그 css
const InputField = styled.input`
  width: 400px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin-right: 10px; //버튼하고 간격
  text-align: center;
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
