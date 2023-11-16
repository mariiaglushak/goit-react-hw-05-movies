import styled from 'styled-components';

export const MainName = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const ListCast = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 20px;
  column-gap: 14px;

  list-style: none;
  padding: 0;
  color: #3b0d5e;
`;

export const ItemCast = styled.li`
  width: 200px;
  margin-bottom: 20px;
  border-bottom: 3px solid;
  border-color: rgb(230, 34, 203);
`;

export const Character = styled.p`
  font-size: 15px;
  font-weight: bold;
`;

export const Name = styled.span`
  font-size: 16px;

  font-weight: bold;
  margin-left: 4px;
  color: rgb(230, 34, 203);
`;
