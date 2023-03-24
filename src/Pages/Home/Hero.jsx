import styled from 'styled-components';
import designTeam from '../../image/design-team.jpg';

const Section = styled.section`
  /* border: 1px solid red; */
  /* height: 100%; */
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  /*  */
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
  gap: 2.5rem;
`;

const TextWrapper = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: space-between;
`;

const MainText = styled.h1`
  /* border: 1px solid yellow; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: 'Bebas Neue', cursive;
  font-size: 9rem;
`;

const SubText = styled.p`
  border: 1px solid white;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  /* padding-bottom: 1.5rem; */
  padding: 1rem;
`;

const ImageWrapper = styled.div`
  /* border: 1px solid green; */
  height: 30rem;
  overflow: hidden;
  position: relative;
  border-radius: 0.7rem;

  img {
    width: 110%;
    height: inherit;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const Hero = () => {
  return (
    <Section>
      <TextWrapper>
        <MainText>
          <div>
            WE DESIGN <span>UNIQUE WEB/GRAPHIC</span>
          </div>

          <div>EXPERIENCE.</div>
        </MainText>
        <SubText>
          <div>We are a</div>
          <div>design studio</div>
          <div>
            from <span>South Korea</span>.
          </div>
        </SubText>
      </TextWrapper>
      <ImageWrapper>
        <img src={designTeam} alt="Design Team" />
      </ImageWrapper>
    </Section>
  );
};

export default Hero;
