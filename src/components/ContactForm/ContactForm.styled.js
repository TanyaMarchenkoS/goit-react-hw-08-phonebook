import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  padding: 40px;
  border-radius: 10px;
  background-color: #e4cce6;
  -webkit-box-shadow: -5px -7px 9px #fff inset, 5px 11px 17px -13px #000 inset;
  box-shadow: -5px -7px 9px #fff inset, 5px 11px 17px -13px #000 inset;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const FormInput = styled.input`
  height: 45px;
  margin: 8px;
  border-radius: 20px;
  font-size: 24px;
  text-align: end;
  outline: 0;
  padding-right: 10px;
  background-color: #ffffff;
`;

export const FormButton = styled.button`
 color: black;
  border-radius: 50px;
  font-size: 20px;
  font-weight: 500;
  background-color: #a3e1a7;
  width: 200px;
  height: 50px;
  margin: 8px;
  cursor: pointer;
  outline: 0;

  &:hover,
  &:focus {
    background-color: #5ae95a;
  }
`;