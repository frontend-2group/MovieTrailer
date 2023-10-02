import { useQuery } from "react-query";
import { getReviews } from "../../../api";
import { styled } from "styled-components";
import { flexAlignCenter, flexCenter } from "../../../styles/common.style";
import { useState } from "react";
import { MOVIE_QUERY_KEY } from "../../../consts/movieQueryKey";

const Reviews = ({ movieId }) => {
  const { data } = useQuery([MOVIE_QUERY_KEY.REVIEWS], () =>
    getReviews(movieId)
  );
  const [showReviews, setShowReviews] = useState(false);

  const onClickReviews = () => {
    setShowReviews(!showReviews);
  };

  return (
    <Wrapper>
      <Center>
        <Button onClick={onClickReviews}>Review</Button>
      </Center>
      {showReviews && data && (
        <ReviewBox>
          {data.results.map((review) => (
            <OneReview key={review.id}>
              <UserInfo>
                <Profile>user</Profile>
                <UserNickName> {review.author}</UserNickName>
                <Written> {review.created_at}</Written>
              </UserInfo>
              <br />
              <Content>{review.content}</Content>
            </OneReview>
          ))}
        </ReviewBox>
      )}
    </Wrapper>
  );
};

export default Reviews;

const Wrapper = styled.div`
  color: white;
`;

const Center = styled.div`
  ${flexCenter}
`;

const Button = styled.button`
  width: 160px;
  height: 50px;
  margin-bottom: 5%;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.COLORS.primary.hotPink};
  color: ${({ theme }) => theme.COLORS.primary.hotPink};
  background-color: ${({ theme }) => theme.COLORS.black};
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.COLORS.white};
    background-color: ${({ theme }) => theme.COLORS.primary.hotPink};
  }
`;

const ReviewBox = styled.ul`
  height: fit-content;
  min-height: 100px;
  border: 1px solid ${({ theme }) => theme.COLORS.primary.hotPink};
  border-radius: 10px;
  padding: 2%;
  margin-bottom: 8%;
  transition: height 0.3s;
`;
const OneReview = styled.li``;

const UserInfo = styled.div`
  ${flexAlignCenter}
  padding-top: 20px;
`;
const Profile = styled.button`
  background-color: #ccc;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 40px;
  height: 40px;
`;
const UserNickName = styled.div`
  margin-left: 10px;
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};

  & > div:nth-child(2) {
    font-size: 14px;
    line-height: 20px;
  }
`;
const Written = styled.span`
  font-size: 14px;
  color: #999;
  margin-left: 65%;
`;
const Content = styled.div`
  padding-bottom: 30px;
  line-height: 20px;
  padding: 2%;
`;
