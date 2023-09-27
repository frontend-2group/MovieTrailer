import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { flexCenter } from "../../styles/common.style";

const ShowRelatedMovie = ({ MovieList }) => {
  // input 검색어가 포함된 영화 목록 가져오기
  // 목록이 안 가져와져서 일단 아래 sampleDropDown으로 대체해서 로직 구현
  // console.log(MovieList);

  // sample array: 영화 장르에 관한 텍스트 배열
  const sampleTextArray = [
    "로맨스코미디",
    "로맨스",
    "한국드라마",
    "호러",
    "스릴러",
    "미국드라마",
    "영국드라마",
    "웹드라마",
    "애니메이션",
    "시대극",
    "추리",
  ];
  // const relatedDropDown = [];

  const [inputValue, setInputValue] = useState("");
  // isHaveInputValue: 입력된 input값이 있는지의 여부
  const [isHaveInputValue, setIsHaveInputValue] = useState(false);
  // dropdown에 보여줄 영화 추천 목록(리스트) >> 일단 sampleTextArray로 처리
  const [dropDownList, setDropDownList] = useState(sampleTextArray);
  // dropDownList에서 사용자가 선택한 영화의 index
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1);

  // show related movieList
  // filter movies which includes(contains) inputValue and push to relatedDropDown(empty array)
  const showDropDownList = () => {
    if (inputValue) {
      console.log(inputValue); // log되기는 함
      // inputValue에 어떠한 값이 들어왔을 때 관련 드롭다운 띄워주기
      // sampleTextArray >> MovieList 로 변경 요망
      const RelatedMovieList = sampleTextArray.filter((textValue) =>
        textValue.includes(inputValue)
      );
      setDropDownList(RelatedMovieList);
    } else {
      setIsHaveInputValue(false);
      setDropDownList([]);
    }
  };

  const checkInputValue = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    setIsHaveInputValue(true);
  };

  // dropdown에서 특정 영화 클릭 시 발생할 이벤트
  const clickedDropDownItem = (clickedItem) => {
    setInputValue(clickedItem);
    setIsHaveInputValue(false);
  };

  // 키보드 조작 관련 로직 : keyUp, keyDown, Enter
  // dropdown의 요소를 선택하기 위해 키보드에 버튼을 눌릴 때마다, 아래의 조건에 따라 dropDownItemIndex 값 업데이트
  const handleDropDownKey = (e) => {
    e.preventDefault();
    // if something is written...
    if (isHaveInputValue) {
      if (
        e.key === "ArrowDown" &&
        dropDownList.length - 1 > dropDownItemIndex
      ) {
        setDropDownItemIndex(dropDownItemIndex + 1);
      } else if (e.key === "ArrowUp" && dropDownItemIndex >= 0)
        setDropDownItemIndex(dropDownItemIndex - 1);
      else if (e.key === "Enter" && dropDownItemIndex >= 0) {
        clickedDropDownItem(dropDownList[dropDownItemIndex]);
        setDropDownItemIndex(-1);
      }
    }
  };

  useEffect(showDropDownList, [inputValue]);

  return (
    <Wrapper>
      <InputBox isHaveInputValue={isHaveInputValue}>
        <SearchIcon>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#ff0458" }}
          />
        </SearchIcon>
        <Input
          type="text"
          value={inputValue}
          onChange={checkInputValue}
          onKeyUp={handleDropDownKey}
          placeholder="관심 있는 장르는 무엇인가요?"
        />
        <DeleteButton onClick={() => setInputValue("")}>&times;</DeleteButton>
      </InputBox>
      {isHaveInputValue && (
        <DropDownWrapper>
          {dropDownList.length === 0 && (
            <ShowMessage>해당 단어와 관련 있는 영화가 없습니다.</ShowMessage>
          )}
          {dropDownList.map((dropDownItem, dropDownIndex) => {
            return (
              <RelatedMovieList
                key={dropDownIndex}
                onClick={() => clickedDropDownItem(dropDownItem)}
                onMouseOver={() => {
                  setDropDownItemIndex(dropDownIndex);
                }}
                className={
                  dropDownItemIndex === dropDownIndex ? "selected" : ""
                }
              >
                {dropDownItem}
              </RelatedMovieList>
            );
          })}
        </DropDownWrapper>
      )}
    </Wrapper>
  );
};

export default ShowRelatedMovie;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

// input box
const InputBox = styled.div`
  position: absolute;
  left: 55%;
  transform: translateY(-50%);
  width: 30%;
  ${flexCenter}
`;

const SearchIcon = styled.div``;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin: 0 10px;
  cursor: pointer;
  box-shadow: 0px 2px 7px 5px rgba(0, 0, 0, 0.2);
`;
const DeleteButton = styled.button`
  position: absolute;
  right: 5%;
  width: 20px;
  height: 20px;
  text-align: center;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #d9d9d9;
  }
`;

// dropdownlist
const DropDownWrapper = styled.ul`
  position: absolute;
  top: 30px;
  left: 56.5%;
  width: 27.9%;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  z-index: -1;
`;
const RelatedMovieList = styled.li`
  position: relative;
  width: 96%;
  text-align: left;
  padding: 10px;
  margin-left: 2%;
  &:nth-of-type(1) {
    margin-top: 12%;
  }
  &:last-of-type {
    margin-bottom: 5%;
  }

  &.selected {
    background-color: rgba(153, 153, 153, 0.5);
    border-radius: 5px;
  }
`;
const ShowMessage = styled.li`
  margin-top: 15%;
`;
