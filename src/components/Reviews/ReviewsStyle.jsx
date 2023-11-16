import styled from 'styled-components';

export const ReviewsList = styled.ul`
  list-style: none;
  color: #3b0d5e;
  padding: 0;
`;

export const ReviewsItem = styled.li`
  padding-right: 20px;
  border-bottom: 2px solid;
  border-color: #743ad5;
`;

export const RevAuchtor = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const RevAutorName = styled.span`
  font-size: 16px;

  font-weight: bold;
  margin-left: 4px;
  color: rgb(230, 34, 203);
`;

export const RevText = styled.p`
  font-weight: bold;
  line-height: 1.5;
`;

export const NoReviews = styled.p`
  font-weight: bold;
  color: #3b0d5e;
`;
