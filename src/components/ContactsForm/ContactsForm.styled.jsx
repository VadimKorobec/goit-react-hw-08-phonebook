import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  margin: 0 auto;
  width: 400px;
  gap: 15px;
  border-radius: 8px;
  background-color: #ffefd5;
  padding: 20px;
  margin-top: 50px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 320px;
  margin: 0 auto;
  text-align: center;
`;

export const LabelText = styled.span`
  font-weight: 700;
  color: #2f4f4f;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  display: block;
  height: 25px;
  border-radius: 5px;
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  text-align: center;
  background-color: #808080;
  padding: 8px;
  font-weight: 700;
  color: white;
  border-radius: 8px;
  width: 100px;
  cursor: pointer;
  border: none;

  &:hover,
  &:focus {
    background-color: #a9a9a9;
  }
`;
