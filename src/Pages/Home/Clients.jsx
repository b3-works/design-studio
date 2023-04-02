import styled from 'styled-components';
import Marquee from 'react-fast-marquee';
import LogoMarquee from '../../components/LogoMarquee';

import VerticalLine from '../../components/VerticalLine';

const Section = styled.section`
  padding: 2rem 0;
  margin: 0 5rem;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  height: 120px;
  gap: 3rem;
`;

const ClientText = styled.div`
  width: 8.5rem;
  text-align: start;
  font-size: 1.3rem;
`;

export default function Clients() {
  return (
    <Section>
      <Contents>
        <ClientText>Our Clients</ClientText>
        <VerticalLine />
        <Marquee gradient={false}>
          <LogoMarquee />
        </Marquee>
      </Contents>
    </Section>
  );
}
