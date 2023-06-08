import React from 'react';
import { styled } from 'styled-components';

const TextCard = ({ children }) => {
  return <Container>{children}</Container>;
};

export default TextCard;

const Container = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid rgba(55, 53, 47, 0.09);
  border-radius: 5px;
  font-size: 12px;
`;
