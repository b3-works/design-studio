import styled from 'styled-components';
import { motion as m } from 'framer-motion';

const Section = styled.section`
  border: 1px solid white;
  margin: 4rem 2rem;
  height: 100vh;
  display: grid;
  grid-template-columns: 30% 70%;
  align-items: center;
  gap: 3rem;
  position: relative;
`;
const TitleWrapper = styled.div`
  border: 1px solid blue;
  border-radius: 50%;
  padding: 15rem;
`;

const Title = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid red;
  width: 28rem;
  font-size: 4rem;
  font-weight: bold;
  text-align: center;

  &::after {
    content: '';
    border: 1px solid yellow;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
  }
`;
const Circle = styled.span`
  border: 1px solid yellow;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
`;
const ContentContainer = styled.div`
  border: 1px solid green;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const Cards = styled.div`
  border: 1px solid blue;
`;
const CardTitle = styled.h1`
  font-family: 'Bebas Neue', cursive;
  font-size: 2rem;
  border: 1px solid ${(props) => props.theme.color.ivory};
`;
export default function WhatWeDo() {
  return (
    <Section>
      <TitleWrapper>
        <Title>What We Do</Title>
        <Circle></Circle>
      </TitleWrapper>

      <ContentContainer>
        <Cards>
          {/* <Icon /> */}
          <CardTitle>Strategy</CardTitle>
          <div>We plan for the right strategy to help your brand grow.</div>
        </Cards>
        <Cards>
          {/* <Icon /> */}
          <CardTitle>Branding</CardTitle>
          <div>We use market data for branding.</div>
        </Cards>
        <Cards>
          {/* <Icon /> */}
          <CardTitle>Art Direction</CardTitle>
          <div>
            We can support art direction by providing creative expertise, access
            to specialized tools and collaborators, and overseeing the execution
            of visual strategies to elevate the impact and effectiveness of a
            project.
          </div>
        </Cards>

        <Cards>
          {/* <Icon /> */}
          <CardTitle>UI/UX Design</CardTitle>
          <div>Descrition of service</div>
        </Cards>
        <Cards>
          {/* <Icon /> */}
          <CardTitle>Logo Design</CardTitle>
          <div>Descrition of service</div>
        </Cards>
        <Cards>
          {/* <Icon /> */}
          <CardTitle>Front-End</CardTitle>
          <div>Descrition of service</div>
        </Cards>
      </ContentContainer>
    </Section>
  );
}
