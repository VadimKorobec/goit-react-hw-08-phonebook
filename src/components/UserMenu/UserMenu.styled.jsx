import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
  font-weight: 700;
  color: #ff7f50;
`;

export const SpanText = styled.span`
  font-weight: 700;
  color: #2f4f4f;
`;

export const Button = styled.button`
  display: block;
  margin-left: 40px;
  text-align: center;
  background-color: #808080;
  padding: 8px;
  font-weight: 700;
  color: white;
  border-radius: 8px;
  width: 80px;
  cursor: pointer;
  border: none;
  margin-right: 12px;

  &:hover,
  &:focus {
    background-color: #a9a9a9;
  }
`;
