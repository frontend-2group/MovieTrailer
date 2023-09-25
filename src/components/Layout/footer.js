import { styled } from "styled-components";
import { flexCenter } from "../../styles/common.style";

const Footer = () => {
  return (
    <HeaderWapper>
      <p>ALL RIGHTS RESERVED © FRONTEND TEAM 2</p>
      <p>
        KIM-JIWON AHN-JUHYEON OH-JUYEON LEE-DAEKYEONG JEON-KYEONGMI
        JEONG-SOOHYUN
      </p>
    </HeaderWapper>
  );
};
export default Footer;

const HeaderWapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  font-size: 10px;
  width: 100%;
  height: 90px;
  /* background-color: green; */
  color: #ccc;
`;
