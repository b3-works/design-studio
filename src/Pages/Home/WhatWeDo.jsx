import { useState } from 'react';
import styled from 'styled-components';
import { FaStarOfLife } from 'react-icons/fa';
import { motion as m } from 'framer-motion';
import data from '../../data/cardContents.json';

const Section = styled.section`
  margin: 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const TitleWrapper = styled.div`
  border: 3px solid ${(props) => props.theme.color.red};
  border-radius: 2rem;
  background-color: ${(props) => props.theme.color.black};
  position: absolute;
  z-index: 1;
`;

const Title = styled.div`
  width: 11rem;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.color.ivory};
  padding: 1rem;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;

const Cards = styled.div`
  height: 25rem;
  border: 5px solid ${(props) => props.theme.color.red};
  border-radius: 2rem;
  background-color: ${(props) => props.theme.color.ivory};
  color: ${(props) => props.theme.color.black};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardIcon = styled(m(FaStarOfLife))`
  font-size: 4rem;
`;

const CardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    text-align: justify;
    line-height: 1.3rem;
  }
`;

const CardTitle = styled.h1`
  font-family: 'Bebas Neue', cursive;
  font-size: 2.5rem;
`;

const animationVar = {
  hidden: { scale: 0 },
  show: {
    rotate: 180,
    scale: 1,
    // transition: { type: spring, stiffness: 260, damping: 20 },
  },
  hover: {
    rotate: 360,
    duration: 1,
  },
};
export default function WhatWeDo() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setPosition({ x, y });
  };

  return (
    <Section onMouseMove={handleMouseMove}>
      <TitleWrapper
        style={{
          position: 'absolute',
          left: `${position.x + 20}px`,
          top: `${position.y - 30}px`,
        }}
      >
        <Title>What We Do</Title>
      </TitleWrapper>

      <ContentContainer>
        {data.map((card) => (
          <Cards key={card.id}>
            <CardIcon />
            <CardTextWrapper>
              <CardTitle>{card.title}</CardTitle>
              <div>{card.content}</div>
            </CardTextWrapper>
          </Cards>
        ))}
      </ContentContainer>
    </Section>
  );
}
