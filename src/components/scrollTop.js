import styled from "styled-components";
import toTop from "../img/to_top.png";

const ScrollTop = () => {
  const onClickTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Wrap>
      <img
        src={toTop}
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
  top: 652px;
  left: 1188px;

  & > img:hover {
    cursor: pointer;
  }
`;
