import styled from 'styled-components';
import Marquee from 'react-fast-marquee';
import LogoMarquee from '../../components/LogoMarquee';
import Line from '../../components/Line';

const Section = styled.section`
  padding: 4rem 0;
  display: grid;
  grid-template-columns: 20% 80%;
`;

const ClientText = styled.div`
  border: 1px solid ${(props) => props.theme.color.white};
  width: 14rem;
  height: 12rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 1rem;
  font-size: 1.3rem;
`;

const Clients = () => {
  return (
    <>
      <Section>
        <ClientText>Our Clients</ClientText>
        <Marquee gradient={false}>
          <LogoMarquee />
        </Marquee>
      </Section>
      <Line />
    </>
  );
};

export default Clients;
