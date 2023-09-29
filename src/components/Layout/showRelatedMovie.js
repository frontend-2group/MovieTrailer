import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { flexCenter } from "../../styles/common.style";
import { useQuery } from "react-query";
import { getSearchMovie } from "../../api";

const ShowRelatedMovie = () => {
  const { data: movieData } = useQuery(["searchKeyword"], () =>
    getSearchMovie(inputValue)
  );

  const [inputValue, setInputValue] = useState("");
  const [hasInputValue, setHasInputValue] = useState(false);
  const [dropDownList, setDropDownList] = useState();
  const [dropDownMovieIndex, setDropDownMovieIndex] = useState(-1);

  // show related movieList
  // filter movies which includes(contains) inputValue
  const showDropDownList = () => {
    // validation check
    const regExp = /[A-Za-z]+/gi;
    console.log(inputValue.match(regExp));

    if (inputValue.match(regExp)) {
      const titleArray = movieData.results;
      const resultsArrayList = titleArray.filter((title) => {
        return title.title.includes(inputValue);
      });
      const resultsTitleList = resultsArrayList.map((row) => {
        return row.title;
      });
      setDropDownList(resultsTitleList);
    } else {
      setHasInputValue(false);
      setDropDownList([]);
    }
  };

  const checkInputValue = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    setHasInputValue(true);
  };

  // dropdown에서 특정 영화 클릭 시 발생할 이벤트
  const clickedDropDownItem = (clickedItem) => {
    setInputValue(clickedItem);
    setHasInputValue(false);
  };

  // 키보드 조작 관련 로직 : keyUp, keyDown, Enter
  // dropdown의 요소를 선택하기 위해 키보드에 버튼을 눌릴 때마다, 아래의 조건에 따라 dropDownMovieIndex 값 업데이트
  const handleDropDownKey = (e) => {
    e.preventDefault();
    // if something is written...
    if (hasInputValue) {
      if (
        e.key === "ArrowDown" &&
        dropDownList.length - 1 > dropDownMovieIndex
      ) {
        setDropDownMovieIndex(dropDownMovieIndex + 1);
      } else if (e.key === "ArrowUp" && dropDownMovieIndex >= 0)
        setDropDownMovieIndex(dropDownMovieIndex - 1);
      else if (e.key === "Enter" && dropDownMovieIndex >= 0) {
        clickedDropDownItem(dropDownList[dropDownMovieIndex]);
        setDropDownMovieIndex(-1);
      }
    }
  };

  useEffect(showDropDownList, [inputValue]);

  return (
    <Wrapper>
      <InputBox hasInputValue={hasInputValue}>
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
          placeholder="영화의 제목을 입력해주세요."
        />
        <DeleteButton onClick={() => setInputValue("")}>&times;</DeleteButton>
      </InputBox>
      {hasInputValue && (
        <DropDownWrapper>
          {dropDownList.length === 0 && (
            <ShowMessage>해당 단어와 관련 있는 영화가 없습니다.</ShowMessage>
          )}
          {dropDownList.map((movie, movieIndex) => {
            return (
              <RelatedMovieList
                key={movieIndex}
                onClick={() => clickedDropDownItem(movie)}
                onMouseOver={() => {
                  setDropDownMovieIndex(movieIndex);
                }}
                className={dropDownMovieIndex === movieIndex ? "selected" : ""}
              >
                {movie}
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
  height: auto;
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
  margin-bottom: 10%;
`;
