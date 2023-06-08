import React, { useState } from 'react';
import { keyframes, styled } from 'styled-components';
import Car from '../Car/Car';
import Fumes from '../Car/Fumes';
import { useSpring, a } from '@react-spring/web';
import MoveCar from '../../Molecule/MoveCar/MoveCar';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const data = useSelector((state) => state);

  console.log('data -30 = ', Number(data) - 30);

  const { transform, width, opacity } = useSpring({
    transform: `perspective(600px) translateX(${data ? Number(data) - 60 : -60}px)`,
    opacity: data > 10 ? 1 : 0,
    width: `${data ? Number(data) - 10 : 0}px`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <Container>
      <UlBlock>
        <LiBlock>Home</LiBlock>
        <LiBlock>Resume</LiBlock>
        <LiBlock>Portfolio</LiBlock>
        <LiBlock>Github</LiBlock>
        <LiBlock>Blog</LiBlock>
      </UlBlock>
      <ScrollMoveBlock>
        <a.div style={{ transform }}>
          <MoveCar />
        </a.div>
        <a.div style={{ width }}>
          <RoadBlock />
        </a.div>
      </ScrollMoveBlock>
    </Container>
  );
};

export default Navigation;

const Container = styled.div`
  width: 100%;
  height: 90px;
  z-index: 10000;
  background-color: white;

  transform: ;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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

const ScrollMoveBlock = styled.div`
  width: 100%;
  height: 30px;
`;

const RoadBlock = styled.div`
  border-top: 2px solid black;
  width: 100%;
`;
