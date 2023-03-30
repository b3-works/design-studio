import styled from 'styled-components';
import Marquee from 'react-fast-marquee';
import LogoMarquee from '../../components/LogoMarquee';

import VerticalLine from '../../components/VerticalLine';

const Section = styled.section`
  padding: 1.5rem 0;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  gap: 2rem;
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
