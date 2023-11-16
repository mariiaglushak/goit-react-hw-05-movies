import styled from 'styled-components';

export const SearchForm = styled.form`
  margin: 10px 0 0 60px;
`;

export const SearchInput = styled.input`
  padding-left: 5px;
  width: 300px;
  height: 45px;
  outline: none;
  border-radius: 3px;
  background-color: #eed4ed;
  border-color: #aa709c;
  outline-color: #f180eb;
  &:active {
    background-color: #c5b0c4;
  }
`;

export const SearchBtn = styled.button`
  height: 50px;
  width: 45px;
  border-radius: 2px;
  background-color: #743ad5;
  border-color: transparent;

  &:hover {
    background-color: #52305a;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const NoName = styled.h2`
  color: #3b0d5e;
  display: block;
  width: 100;
  text-align: center;
`;
