import styled from 'styled-components';
import Line from '../../components/Line';
import VerticalLine from '../../components/VerticalLine';

const Section = styled.section`
  border: 1px solid red;
  margin: 4rem 2rem;
  height: 70rem;
  display: flex;
  /* gap: 3rem; */
`;

const TitleWrapper = styled.div`
  border: 1px solid white;
  width: 14%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  border: 1px solid blue;
  height: 100%;
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ContentContainer = styled.div`
  border: 1px solid green;
  width: 100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;

  gap: 3rem;
`;
const Cards = styled.div`
  border: 1px solid ${(props) => props.theme.color.white};
  border-radius: 2rem;
  height: 18rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const CardTitle = styled.h1`
  font-family: 'Bebas Neue', cursive;
  font-size: 2rem;
`;
export default function WhatWeDo() {
  return (
    <Section>
      <TitleWrapper>
        <Title>
          <div>What We Do</div>
        </Title>
      </TitleWrapper>

      <VerticalLine />

      <ContentContainer>
        <Cards>
          {/* <Icon /> */}
          <CardTitle>Strategy</CardTitle>
          <div>Descrition of service</div>
        </Cards>
        <Cards>
          {/* <Icon /> */}
          <CardTitle>Branding</CardTitle>
          <div>Descrition of service</div>
        </Cards>
        <Cards>
          {/* <Icon /> */}
          <CardTitle>Art Direction</CardTitle>
          <div>Descrition of service</div>
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
