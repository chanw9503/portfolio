import React, { useState } from 'react';
import { keyframes, styled } from 'styled-components';
import Car from '../Car/Car';
import Fumes from '../Car/Fumes';

const Navigation = () => {
  const [carPosition, setCarPosition] = useState(0);

  const mouseEnterHanlder = (index) => {
    setCarPosition(index * 100);
  };

  return (
    <Container>
      <UlBlock>
        <LiBlock onMouseEnter={() => mouseEnterHanlder(1)}>Home</LiBlock>
        <LiBlock onMouseEnter={() => mouseEnterHanlder(2)}>Resume</LiBlock>
        <LiBlock onMouseEnter={() => mouseEnterHanlder(3)}>Portfolio</LiBlock>
        <LiBlock onMouseEnter={() => mouseEnterHanlder(4)}>Github</LiBlock>
        <LiBlock onMouseEnter={() => mouseEnterHanlder(5)}>Blog</LiBlock>
      </UlBlock>
      <CarBlock>
        <Car moveCar={200} />
        <Fumes />
      </CarBlock>
    </Container>
  );
};

export default Navigation;

const slideAnimation = keyframes`
  from {
    transform: translateX(0);
  } to{
    transform: translateX(100px);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: tomato;
`;

const UlBlock = styled.ul`
  height: 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const LiBlock = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CarBlock = styled.div`
  position: relative;
  left: 30px;
`;
