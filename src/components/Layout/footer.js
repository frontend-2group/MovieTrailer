import { styled } from "styled-components";

const Footer = () => {
  return (
    <HeaderWapper>
      <FooterTextBox>
        <p>ALL RIGHTS RESERVED © FRONTEND TEAM 2</p>
        <p>
          KIM-JIWON AHN-JUHYEON OH-JUYEON LEE-DAEKYEONG JEON-KYEONGMI
          JEONG-SOOHYUN
        </p>
      </FooterTextBox>
    </HeaderWapper>
  );
};
export default Footer;

const HeaderWapper = styled.div`
  width: 100%;
  height: 90px;
  position: absolute;
  bottom: 0;

  // 임시작성입니다.
  background-color: #000;
  text-align: center;
  color: #ccc;
`;

const FooterTextBox = styled.div`
  font-size: 10px;
  padding-top: 20px;
`;
