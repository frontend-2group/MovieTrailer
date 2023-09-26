import { styled } from "styled-components";
import { DetailMovieTitle } from "../../styles/common.style";

const DetailPage = () => {
  return (
    <>
      {/*ImageBox안에 영화 동영상 또는 이미지 넣어주세요.!*/}
      <ImageBox />

      <DetailPageWrapper>
        <TextBox>
          <MovieStar>★{/* 별점 */}</MovieStar>
          <MovieTitle>영화 제목</MovieTitle>
          <ReleaseDate>release 2023.00.00</ReleaseDate>
          <TextWrap>
            <MovieAOnelineExplain>영화 설명 한 줄 요약</MovieAOnelineExplain>
            <MovieExplain>
              {/*영화 내용 설명 */}
              Lorem ipsum dolor sit amet consectetur. Pellentesque interdum et
              hendrerit feugiat quisque. Vitae lacus aenean tellus amet sed.
              Adipiscing odio commodo ultricies fames hac morbi nullam aliquet.
              Laoreet cum arcu suspendisse in turpis ornare et ac neque.
            </MovieExplain>
          </TextWrap>
        </TextBox>
        <SimiliarMovieBox>
          <SimiliarMovieBoxMent>이 영화와 비슷해요!</SimiliarMovieBoxMent>
          <SimiliarMovieBoxPoster
            src="/images/cat.jpg"
            alt="비슷한영화 포스터"
          />
        </SimiliarMovieBox>
      </DetailPageWrapper>
    </>
  );
};

export default DetailPage;

const DetailPageWrapper = styled.div`
  width: 1280px;
  height: auto;
  margin: 0 auto;
`;
const ImageBox = styled.div`
  background-size: cover;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    ),
    url("/images/cat.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: auto;
  height: 500px;
`;

const MovieStar = styled.span`
  color: ${({ theme }) => theme.COLORS.primary["hotPink"]};
  font-size: ${({ theme }) => theme.FONT_SIZE.movie};
`;

const TextBox = styled.div`
  padding-left: 30px;
  color: white;
`;

const TextWrap = styled.div`
  width: 1000px;
`;
const MovieTitle = styled.div`
  ${DetailMovieTitle}
  margin-top: 20px;
  padding-bottom: 30px;
`;

const ReleaseDate = styled.div`
  text-align: end;
  font-weight: 100;
  font-size: 24px;
  margin-right: 50px;
  color: ${({ theme }) => theme.COLORS.primary["gray"]};
`;

const MovieAOnelineExplain = styled.div`
  font-weight: 400;
  font-size: 35px;
  padding-top: 80px;
  padding-bottom: 60px;
`;

const MovieExplain = styled.div`
  font-weight: 300;
  font-size: 28px;
  word-wrap: break-word;
  padding-bottom: 150px;
`;

const SimiliarMovieBox = styled.div``;

const SimiliarMovieBoxMent = styled.p`
  color: ${({ theme }) => theme.COLORS.primary["hotPink"]};
  padding-left: 30px;
  font-size: 28px;
  padding-bottom: 30px;
  font-weight: 400;
`;

const SimiliarMovieBoxPoster = styled.img`
  width: 300px;
  height: 430px;
  border-radius: 20px;
`;
