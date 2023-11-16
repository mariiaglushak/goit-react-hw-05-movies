import styled from 'styled-components';

export const NawList = styled.ul`
  margin: 0;
  padding: 10px 0 10px 15px;
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 5px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
`;

export const NawItem = styled.li`
  margin-left: 15px;
  padding: 0;
  list-style: none;
`;
