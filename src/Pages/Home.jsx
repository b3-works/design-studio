import styled from 'styled-components';

const Home = () => {
  return (
    <Section>
      <HeroText>
        WE DESIGN <br /> UNIQUE <br /> WEB/GRAPHIC EXPERIENCE
      </HeroText>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
  border-top: 2px solid ${(props) => props.theme.color.white};
  position: relative;
`;

const HeroText = styled.h1`
  font-family: HansonBold;
  font-size: 8rem;
  position: absolute;
  top: 50%;
`;

export default Home;
