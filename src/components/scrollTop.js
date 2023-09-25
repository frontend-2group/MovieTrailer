import styled from "styled-components";
import toTop from "../img/to_top.png";
import toTopHover from "../img/to_tophover.png";
import { useState } from "react";

const ScrollTop = () => {
  const onClickTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isHover, setIsHover] = useState(false);

  return (
    <Wrap
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <img
        src={isHover ? toTopHover : toTop}
        alt="toTopIcon"
        onClick={onClickTop}
        width={60}
        height={60}
      ></img>
    </Wrap>
  );
};

export default ScrollTop;

const Wrap = styled.div`
  position: fixed;
  bottom: 4%;
  right: 2%;

  & > img:hover {
    cursor: pointer;
  }
`;
