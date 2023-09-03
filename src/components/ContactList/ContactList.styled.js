import styled from 'styled-components';

export const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-direction: column;
  width: 480px;
  padding: 40px 0;
  border-radius: 10px;
  background-color: #e4cce6;
  -webkit-box-shadow: -5px -7px 9px #fff inset, 5px 11px 17px -13px #000 inset;
  box-shadow: -5px -7px 9px #fff inset, 5px 11px 17px -13px #000 inset;
`;

export const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
`;