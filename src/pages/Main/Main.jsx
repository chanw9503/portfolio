import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { moveScroll } from '../../redux/modules/scrollSlice';
import useScrollEvent from '../../hooks/useScrollEvent';
import TextCard from '../../components/TextCard/TextCard';

const Main = () => {
  const dispatch = useDispatch();

  const [targetRef, scrollValue] = useScrollEvent();

  useEffect(() => {
    dispatch(moveScroll(parseInt(scrollValue)));
  }, [scrollValue]);

  return (
    <Wrap ref={targetRef}>
      <Container>
        <HeadContainer>
          <h3>
            <strong>박찬우</strong>
          </h3>
          <br />
          <h3>Web Frontend Developer</h3>
        </HeadContainer>
        <BodyContainer>
          <TextCard>
            <p>안녕하세요. 웹 프론트엔드 개발자 박찬우 입니다.</p>
            <br />
            <p>
              발전하고 성장하고 있는 모습에 성취감을 느끼고, 함께 성장하는걸 좋아합니다.
            </p>
          </TextCard>
        </BodyContainer>
      </Container>
    </Wrap>
  );
};

export default Main;

const Wrap = styled.div`
  width: 100%;
  height: 2000px;
  position: relative;
  top: 50px;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 500px;
`;
const HeadContainer = styled.div`
  width: 100%;
  margin-top: 50px;
`;
const BodyContainer = styled.div`
  margin-top: 50px;
  width: 100%;
`;
