import styled from 'styled-components';
import VerticalLine from '../../components/VerticalLine';

const Section = styled.section`
  margin: 4rem 2rem;
  height: 45rem;
  display: flex;
`;

const TitleWrapper = styled.div`
  width: 14%;
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  height: 45rem;
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  div {
    position: sticky;
    top: 10rem;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  padding: 0 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
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
  background: radial-gradient(
    circle,
    #23272d 75%,
    #575b60 93%,
    #6f7378 95%,
    #979b9f 98%,
    #dfe3e7 100%
  );
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
