import React, { useEffect, useRef } from 'react';
import Gear from '../../components/Gear/Gear';
import { styled } from 'styled-components';

const Main = () => {
  const targetRef = useRef(null);
  const scrollHandler = () => {
    console.log('scrolling');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener('scroll', scrollHandler);
    }, 100);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div style={{ height: '2000px' }}>
      <GearBlock>
        <Gear />
      </GearBlock>
    </div>
  );
};

export default Main;

const GearBlock = styled.div`
  background-color: white;
  width: 100%;
  height: 500px;
`;
