import styled from "styled-components";

const HoverRevealComponents = ({ movie, onOpenDetailPage }) => {
  const MAX_TITLE_LENGTH = 20;
  const MAX_OVERVIEW_LENGTH = 80;

  const skipTitleView = (title) => {
    if (title.length > MAX_TITLE_LENGTH) {
      return title.substring(0, MAX_TITLE_LENGTH) + "...";
    }
    return title;
  };
  const skipOverView = (overview) => {
    if (overview.length > MAX_OVERVIEW_LENGTH) {
      return overview.substring(0, MAX_OVERVIEW_LENGTH) + "...";
    }
    return overview;
  };

  return (
    <MovieTrailer key={movie.id}>
      <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      <HoverReveal onClick={() => onOpenDetailPage(movie)}>
        <Rate>
          <span>★</span>
          <span>{Math.round(movie.vote_average)}</span>
        </Rate>
        <Title> {skipTitleView(movie.title)}</Title>
        <Content> {skipOverView(movie.overview)}</Content>
      </HoverReveal>
    </MovieTrailer>
  );
};
export default HoverRevealComponents;

const MovieTrailer = styled.div`
  &:hover {
    cursor: pointer;
  }
  position: relative;
`;
const Poster = styled.img`
  width: 212px;
  height: 282px;
`;

const HoverReveal = styled.div`
  width: 220px;
  height: 290px;
  padding: 30px;
  line-height: 20px;
  color: ${({ theme }) => theme.COLORS.white};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: none;
  overflow: hidden;

  ${MovieTrailer}:hover & {
    display: block;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    border: 1px solid ${({ theme }) => theme.COLORS.primary.hotPink};
  }
`;
const Rate = styled.div`
  padding: 10px 0;
  span:first-child {
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
    color: ${({ theme }) => theme.COLORS.primary.hotPink};
  }
`;
const Title = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  line-height: 150%;
`;
const Content = styled.p`
  font-size: 12px;
  padding-top: 28px;
`;
