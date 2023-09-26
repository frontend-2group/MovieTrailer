import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  const onClickTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ButtonWrap
      onClick={onClickTop}
      className={scrollPosition < 20 ? "hide" : ""}
    >
      <FontAwesomeIcon
        icon={faCaretUp}
        style={{ color: "#ffffff" }}
        size="2xl"
      />
    </ButtonWrap>
  );
};

export default ScrollTop;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  bottom: 10%;
  right: 2%;
  opacity: 0.3;
  transition: all ease-in-out 0.3s;

  &.hide {
    opacity: 0;
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;
