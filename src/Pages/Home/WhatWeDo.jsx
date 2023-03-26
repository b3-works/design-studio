import styled from 'styled-components';
import Line from '../../components/Line';

const Section = styled.section`
  padding: 4rem 0;
  border: 1px solid green;
  display: grid;
  grid-template-columns: 20% 80%;
`;

const Title = styled.div`
  border: 1px solid ${(props) => props.theme.color.white};
  font-size: 1.3rem;
  width: 14rem;
  height: 12rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 1rem;
`;
const ContentContainer = styled.div`
  border: 1px solid red;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3rem;
`;
const Cards = styled.div`
  border: 1px solid ${(props) => props.theme.color.white};
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
const WhatWeDo = () => {
  return (
    <>
      <Section>
        <Title>What we do</Title>

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
      <Line />
    </>
  );
};

export default WhatWeDo;
