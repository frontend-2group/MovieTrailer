import styled from "styled-components";

const ErrorPage = () => {
  return <ErrorMessage>Oops! Something went wrong!</ErrorMessage>;
};
export default ErrorPage;

const ErrorMessage = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  text-align: center;
  color: ${({ theme }) => theme.COLORS.white};
`;
