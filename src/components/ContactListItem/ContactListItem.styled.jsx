import styled from '@emotion/styled';

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemText = styled.span`
  font-weight: 700;
  color: #2f4f4f;
  margin-bottom: 5px;
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

  &:hover,
  &:focus {
    background-color: #a9a9a9;
  }
`;

export const Text = styled.span`
  margin-right: auto;
`;
