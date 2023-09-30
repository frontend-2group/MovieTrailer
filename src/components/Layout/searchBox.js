import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { flexCenter } from "../../styles/common.style";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();
  const [textValue, setTextValue] = useState("");

  const checkTextValue = (e) => {
    e.preventDefault();
    setTextValue(e.target.value);
  };

  const onOpenSearchPage = (e) => {
    e.preventDefault();
    const keyword = e.target.inputValue.value;

    // validation check
    const regExp = /[A-Za-z]+/gi;
    const keywordCheck = keyword.match(regExp);

    navigate(`/searchPage/:${keywordCheck}`);
    window.scroll({
      top: 0,
    });
  };

  return (
    <Wrapper>
      <InputBox>
        <SearchIcon>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#ff0458" }}
          />
        </SearchIcon>
        <Form onSubmit={onOpenSearchPage}>
          <Input
            type="text"
            name="inputValue"
            value={textValue}
            onChange={checkTextValue}
            placeholder="영화의 제목을 입력해주세요."
          />
        </Form>
        <DeleteButton onClick={() => setTextValue("")}>&times;</DeleteButton>
      </InputBox>
    </Wrapper>
  );
};

export default SearchBox;

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
  width: 40%;
  transform: translateY(-50%);
  ${flexCenter}
`;

const Form = styled.form`
  position: absolute;
  width: 60%;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 18%;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 20px;
  margin: 0 10px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 2px 7px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.5s;
  &:focus {
    background-color: ${({ theme }) => theme.COLORS.white};
  }
`;
const DeleteButton = styled.button`
  position: absolute;
  right: 20%;
  width: 20px;
  height: 20px;
  text-align: center;
  border-radius: 50%;
  background: none;
  cursor: pointer;
  transition: all 0.5s;
  color: ${({ theme }) => theme.COLORS.primary.darkGray};

  &:hover {
    color: ${({ theme }) => theme.COLORS.white};
    background-color: ${({ theme }) => theme.COLORS.primary.hotPink};
  }
`;
