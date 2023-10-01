import styled from "styled-components";

const SkeletonBox = styled.div`
  width: 212px;
  height: 282px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
  background-color: #f2f2f2;
  overflow: hidden;

  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: skeleton-gradient 1.5s infinite ease-in-out;
  }
`;

export default SkeletonBox;
