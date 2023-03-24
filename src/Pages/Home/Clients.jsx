import styled from 'styled-components';
import { motion as m } from 'framer-motion';
import Airbnb from '../../image/airbnb.svg';
import Cartier from '../../image/cartier.svg';
import Forbes from '../../image/forbes.svg';
import Github from '../../image/github.svg';
import Google from '../../image/google.svg';
import Spotify from '../../image/spotify.svg';
import Tesla from '../../image/tesla.svg';

const Section = styled.section`
  border-bottom: 1px solid white;
  display: flex;
  padding: 2rem 0;
  gap: 3rem;
`;

const ClientText = styled.div`
  border: 1px solid ${(props) => props.theme.color.white};
  width: 12rem;
  height: 12rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 1rem;
  font-size: 1.3rem;
`;

const LogoContainer = styled(m.div)`
  border: 1px solid red;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  /*  */
  overflow-y: hidden;
`;

const LogoWrapper = styled.div`
  border: 1px solid yellow;
`;

const marqueeVars = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 5,
        ease: 'linear',
      },
    },
  },
};

const Clients = () => {
  return (
    <Section>
      <ClientText>Our Clients</ClientText>
      <LogoContainer>
        <LogoWrapper variants={marqueeVars} animate="animate">
          <img src={Airbnb} alt="airbnb logo" width={200} />
        </LogoWrapper>
        <LogoWrapper>
          <img src={Cartier} alt="cartier logo" width={200} />
        </LogoWrapper>
        <LogoWrapper>
          <img src={Forbes} alt="forbes logo" width={200} />
        </LogoWrapper>
        <LogoWrapper>
          <img src={Github} alt="github logo" width={200} />
        </LogoWrapper>
        <LogoWrapper>
          <img src={Google} alt="google logo" width={200} />
        </LogoWrapper>
        <LogoWrapper>
          <img src={Spotify} alt="spotify logo" width={200} />
        </LogoWrapper>
        <LogoWrapper>
          <img src={Tesla} alt="tesla logo" width={200} />
        </LogoWrapper>
      </LogoContainer>
    </Section>
  );
};

export default Clients;
