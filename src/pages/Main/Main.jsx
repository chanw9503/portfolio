import React from 'react';
import Gear from '../../components/Gear/Gear';
import { styled } from 'styled-components';

const Main = () => {
  return (
    <GearBlock>
      <Gear />
    </GearBlock>
  );
};

export default Main;

const GearBlock = styled.div`
  background-color: white;
  width: 100%;
  height: 500px;
`;
