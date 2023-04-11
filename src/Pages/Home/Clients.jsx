import styled from 'styled-components';
import Marquee from 'react-fast-marquee';
import LogoMarquee from '../../components/LogoMarquee';
import { motion as m } from 'framer-motion';

const Section = styled.section`
  padding: 2rem 0;
  margin: 0 5rem;
`;

const Contents = styled(m.div)`
  display: flex;
  align-items: center;
  height: 120px;
  gap: 3rem;
`;

const ClientText = styled.div`
  width: 11rem;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  border: 3px solid ${(props) => props.theme.color.red};
  padding: 0.4rem;
`;

const animationVars = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 1.5 } },
};

export default function Clients() {
  return (
    <Section>
      <Contents
        variants={animationVars}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <ClientText>Our Clients</ClientText>

        <Marquee gradient={false}>
          <LogoMarquee />
        </Marquee>
      </Contents>
    </Section>
  );
}
