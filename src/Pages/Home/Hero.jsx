import styled from 'styled-components';
import { motion as m } from 'framer-motion';

const Section = styled(m.section)`
  border: 1px solid ${(props) => props.theme.color.white};
  border-radius: 2rem;
  margin: 2rem;
  padding: 4rem 0;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 3.7rem 0;
`;

const BrandText = styled(m.h1)`
  font-size: 16rem;
  -webkit-text-stroke: 2px ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.gray};
  width: 100%;
  padding-left: 3rem;
`;

const MainText = styled(m.h1)`
  font-size: 9rem;
  width: 100%;
  padding: 0 3rem;
`;
const MainFirst = styled(m.div)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  :first-child div {
    display: flex;
    gap: 2rem;
  }

  span {
    border: 1px solid yellow;
    width: 100%;
    margin: 1rem 1rem 2rem;
  }
`;

const MainSecond = styled(m.div)`
  display: flex;
  justify-content: space-between;

  span {
    border: 1px solid yellow;
    width: 100%;
    margin: 1rem 1rem 2rem;
  }
`;

const SubText = styled(m.p)`
  font-size: 2rem;
  width: 100%;
  text-align: start;
  padding-left: 3rem;

  span {
    border-bottom: 2px solid ${(props) => props.theme.color.white};
  }
`;

const animationVars = {
  hidden: { opacity: 0 },
  hiddenLeft: { opacity: 0, translateX: '-100%' },
  hiddenRight: { opacity: 0, translateX: '100%' },
  hiddenDown: { opacity: 0, translateY: '100%' },
  show: (custom) => ({
    opacity: 1,
    transition: {
      duration: 1,
      delay: custom * 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  }),
  showOriginX: (custom) => ({
    opacity: 1,
    translateX: '0%',
    transition: {
      duration: 1,
      delay: custom * 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  }),
  showOriginY: (custom) => ({
    opacity: 1,
    translateY: '0%',
    transition: {
      duration: 1,
      delay: custom * 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  }),
  shrink: {
    width: '0%',
  },
  expand: (custom) => ({
    width: '100%',
    transition: {
      duration: 2,
      delay: custom * 0.7,
      ease: [0, 0.71, 0.2, 1.01],
    },
  }),
  expandShort: (custom) => ({
    width: '100%',
    transition: {
      duration: 2,
      delay: custom * 0.7,
      ease: [0, 0.71, 0.2, 1.01],
    },
  }),
};

export default function Hero() {
  return (
    <Section
      variants={animationVars}
      initial="hidden"
      animate="show"
      custom={1}
    >
      <ContentWrapper>
        <BrandText
          variants={animationVars}
          initial="hiddenLeft"
          animate="showOriginX"
          custom={2}
        >
          B3 Studio.
        </BrandText>
        <MainText>
          <MainFirst
            variants={animationVars}
            initial="hiddenRight"
            animate="showOriginX"
            custom={3}
          >
            <div>
              <div>WE</div> <div>DESIGN</div>
            </div>
            <m.span
              variants={animationVars}
              initial="shrink"
              animate="expand"
              custom={5}
            ></m.span>
            <div>UNIQUE</div>
          </MainFirst>
          <MainSecond
            variants={animationVars}
            initial="hiddenLeft"
            animate="showOriginX"
            custom={4}
          >
            <m.span
              variants={animationVars}
              initial="shrink"
              animate="expandShort"
              custom={5}
            ></m.span>
            <div>WEB/GRAPHIC</div>
            <m.span
              variants={animationVars}
              initial="shrink"
              animate="expandShort"
              custom={5}
            ></m.span>
            <div>EXPERIENCE.</div>
          </MainSecond>
        </MainText>
        <SubText
          variants={animationVars}
          initial="hiddenDown"
          animate="showOriginY"
          custom={5}
        >
          We are a design studio from <span>South Korea</span>.
        </SubText>
      </ContentWrapper>
    </Section>
  );
}
