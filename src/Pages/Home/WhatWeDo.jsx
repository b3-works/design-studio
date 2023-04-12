import { useState } from 'react';
import styled from 'styled-components';
import { FaStarOfLife } from 'react-icons/fa';
import { motion as m } from 'framer-motion';

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
  gap: 9rem;
`;

const CardIcon = styled(FaStarOfLife)`
  font-size: 3.5rem;
`;
const CardTextWrapper = styled.div``;
const CardTitle = styled.h1`
  font-family: 'Bebas Neue', cursive;
  font-size: 2rem;
  border: 1px solid ${(props) => props.theme.color.ivory};
`;

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
        <Cards>
          <CardIcon />
          <CardTextWrapper>
            <CardTitle>Strategy</CardTitle>
            <div>We use market data for branding.</div>
          </CardTextWrapper>
        </Cards>
        <Cards>
          <CardIcon />
          <CardTextWrapper>
            <CardTitle>Branding</CardTitle>
            <div>We use market data for branding.</div>
          </CardTextWrapper>
        </Cards>
        <Cards>
          <CardIcon />
          <CardTextWrapper>
            <CardTitle>Art Direction</CardTitle>
            <div>
              We can support art direction by providing creative expertise,
              access to specialized tools and collaborators, and overseeing the
              execution of visual strategies to elevate the impact and
              effectiveness of a project.
            </div>
          </CardTextWrapper>
        </Cards>
        <Cards>
          <CardIcon />
          <CardTextWrapper>
            <CardTitle>UI/UX Design</CardTitle>
            <div>Descrition of service</div>
          </CardTextWrapper>
        </Cards>
        <Cards>
          <CardIcon />
          <CardTextWrapper>
            <CardTitle>Logo Design</CardTitle>
            <div>Descrition of service</div>
          </CardTextWrapper>
        </Cards>
        <Cards>
          <CardIcon />
          <CardTextWrapper>
            <CardTitle>Front-End</CardTitle>
            <div>Descrition of service</div>
          </CardTextWrapper>
        </Cards>
      </ContentContainer>
    </Section>
  );
}
