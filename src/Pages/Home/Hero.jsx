import styled from 'styled-components';

const Section = styled.section`
  border: 1px solid ${(props) => props.theme.color.white};
  /* background-color: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.gray}; */
  border-radius: 2rem;
  margin: 2rem;
  padding: 4rem 0;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const BrandText = styled.h1`
  font-size: 16rem;
  -webkit-text-stroke: 2px ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.gray};
`;

const MainText = styled.h1`
  font-size: 9rem;
  text-align: center;
`;

const SubText = styled.p`
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
`;

// const ImageWrapper = styled.div`
//   height: 30rem;
//   overflow: hidden;
//   position: relative;
//   border-radius: 0.7rem;

//   img {
//     width: 110%;
//     height: inherit;
//     object-fit: cover;
//     position: absolute;
//     bottom: 0;
//     left: 0;
//   }
// `;

export default function Hero() {
  return (
    <Section>
      <ContentWrapper>
        <BrandText>B3 Studio.</BrandText>

        <MainText>
          <div>WE DESIGN</div>
          <div>
            UNIQUE <span>WEB/GRAPHIC</span>
          </div>
          <div>EXPERIENCE.</div>
        </MainText>

        <SubText>
          We are a design studio from <span>South Korea</span>.
        </SubText>
      </ContentWrapper>
    </Section>
  );
}
