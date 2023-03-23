import styled from 'styled-components';
import designTeam from '../image/design-team.jpg';

const Section = styled.section`
  border: 1px solid red;
  /* height: 100%; */
  display: flex;
  padding: 4rem 0;
  gap: 2.5rem;
`;

const TextWrapper = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2rem;
`;
const MainText = styled.h1`
  border: 1px solid yellow;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: HansonBold;
  font-size: 5rem;
`;
const SubText = styled.p`
  border: 1px solid white;
  font-size: 1.8rem;
`;
const ImageWrapper = styled.div`
  border: 1px solid green;
  flex: 1;
  overflow: hidden;
  position: relative;

  img {
    width: 110%;
    height: inherit;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
// const HeroTextContainer = styled.h1`
//   border: 1px solid blue;
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: column;
//   gap: 1rem;
//   font-family: HansonBold;
//   font-size: 5rem;
//   width: 100%;
//   height: 100%;
//   position: relative;

//   div {
//     border: 1px solid white;
//     width: fit-content;
//   }
//   span {
//   }
// `;

const Home = () => {
  return (
    <Section>
      <TextWrapper>
        <MainText>
          <div>WE DESIGN</div>
          <div>UNIQUE</div>
          <div>
            WEB<span>/</span>GRAPHIC
          </div>
          <div>EXPERIENCE</div>
        </MainText>
        <SubText>
          <div>We are a design studio from South Korea.</div>
        </SubText>
      </TextWrapper>
      <ImageWrapper>
        <img src={designTeam} alt="Design Team" />
      </ImageWrapper>
    </Section>
  );
};

export default Home;
