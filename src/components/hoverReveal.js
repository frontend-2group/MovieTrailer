import styled from "styled-components";

const HoverRevealComponents = ({ movie, onOpenDetailPage }) => {
  const MAX_OVERVIEW_LENGTH = 100; // 최대 길이 설정

  const skipOverView = (overview) => {
    if (overview.length > MAX_OVERVIEW_LENGTH) {
      return overview.substring(0, MAX_OVERVIEW_LENGTH) + "...";
    }
    return overview;
  };

  return (
    <MovieTrailer key={movie.id}>
      <MovieImg src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      <HoverReveal onClick={() => onOpenDetailPage(movie)}>
        <div>
          <span>★</span>
          <span>{Math.round(movie.vote_average)}</span>
        </div>
        <h3> {movie.title}</h3>
        <p> {skipOverView(movie.overview)}</p>
      </HoverReveal>
    </MovieTrailer>
  );
};
export default HoverRevealComponents;

const MovieImg = styled.img`
  width: 212px;
  height: 282px;
`;

const MovieTrailer = styled.div`
  &:hover {
    cursor: pointer;
  }
  position: relative;
`;

const HoverReveal = styled.div`
  width: 212px;
  height: 282px;
  padding: 20px;
  line-height: 20px;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  color: ${({ theme }) => theme.COLORS.white};
  box-sizing: border-box;
  z-index: 1;
  ${MovieTrailer}:hover & {
    display: block;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
  }
  div {
    padding: 20px 0;
  }
  span:first-child {
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
    color: ${({ theme }) => theme.COLORS.primary.hotPink};
  }
  h3 {
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }
  p {
    font-size: 15px;
    padding-top: 25px;
  }
`;
