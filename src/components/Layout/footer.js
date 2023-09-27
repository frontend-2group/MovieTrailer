import { styled } from "styled-components";
import { flexCenter } from "../../styles/common.style";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>ALL RIGHTS RESERVED © FRONTEND TEAM 2</p>
      <p>
        KIM-JIWON AHN-JUHYEON OH-JUYEON LEE-DAEKYEONG JEON-KYEONGMI
        JEONG-SOOHYUN
      </p>
    </FooterWrapper>
  );
};
export default Footer;

const FooterWrapper = styled.div`
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
