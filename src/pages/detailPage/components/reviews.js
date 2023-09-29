import { useQuery } from "react-query";
import { getReviews } from "../../../api";
import { styled } from "styled-components";
import { flexAlignCenter, flexCenter } from "../../../styles/common.style";
import { useState } from "react";

const Reviews = ({ movieId }) => {
  // 디테일 페이지로 이동한 영화의 리뷰 내용입니다.
  const { data } = useQuery(["review"], () => getReviews(movieId));

  const [showReviews, setShowReviews] = useState(false);

  const onClickReviews = () => {
    setShowReviews(!showReviews);
  };

  return (
    <DetailPageReviewWrapper>
      <CenteredButtonWrapper>
        <DetailPageReviewButton onClick={onClickReviews}>
          Review
        </DetailPageReviewButton>
      </CenteredButtonWrapper>
      {showReviews && data && (
        <UlContentWrapper>
          {data.results.map((review) => (
            <li key={review.id}>
              <UserContentWrapper>
                <UserProfile>user</UserProfile>
                <UserNickName>
                  <div> {review.author}</div>
                  <div> {review.created_at}</div>
                </UserNickName>
              </UserContentWrapper>
              <br />
              <UserReview>{review.content}</UserReview>
              {/* <hr /> */}
            </li>
          ))}
        </UlContentWrapper>
      )}
    </DetailPageReviewWrapper>
  );
};

export default Reviews;

const DetailPageReviewWrapper = styled.div`
  color: white;
`;

//review 버튼 가운데 정렬
const CenteredButtonWrapper = styled.div`
  ${flexCenter}
  height: 250px;
`;

// review Click button
const DetailPageReviewButton = styled.button`
  color: ${({ theme }) => theme.COLORS.white};
  background-color: ${({ theme }) => theme.COLORS.primary["hotPink"]};
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 100px;
  height: 100px;
`;
// review 전체 감싸고 있는 ul 박스
const UlContentWrapper = styled.ul`
  border-top: 1px solid #ff0458;
`;
//reviewli감싸고 있는 박스
const UserContentWrapper = styled.div`
  ${flexAlignCenter}
  padding-top: 20px;
`;

//Profile
const UserProfile = styled.button`
  background-color: #ccc;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 40px;
  height: 40px;
`;

//nickName
const UserNickName = styled.span`
  margin-left: 10px;
  display: block;
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  & > div:nth-child(2) {
    font-size: 14px;
    line-height: 20px;
  }
`;

//review
const UserReview = styled.div`
  padding-bottom: 30px;
  line-height: 20px;
  border-bottom: 1px solid #ff0458;
`;
