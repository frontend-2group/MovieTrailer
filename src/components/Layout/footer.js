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
  text-align: center;
  flex-direction: column;
  width: 100%;
  height: 80px;
  margin-top: 40px;
  line-height: 20px;
  background-color: ${({ theme }) => theme.COLORS.black};
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  color: ${({ theme }) => theme.COLORS.primary.gray};
`;
