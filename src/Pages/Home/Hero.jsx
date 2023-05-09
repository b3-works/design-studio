import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion as m } from 'framer-motion';
import Korea from '../../image/south-korea.svg';

const Section = styled(m.section)`
  border: 10px solid ${(props) => props.theme.color.red};
  background-color: ${(props) => props.theme.color.ivory};
  color: ${(props) => props.theme.color.black};
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

const BrandTextWrapper = styled.div`
  width: 100%;
  padding-left: 3rem;
`;

const BrandText = styled(m.h1)`
  font-size: 16rem;
  -webkit-text-stroke: 10px ${(props) => props.theme.color.black};
  background-color: ${(props) => props.theme.color.red};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
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
    background-color: ${(props) => props.theme.color.black};
    width: 100%;
    margin: 1rem 1rem 2rem;
  }
`;

const MainSecond = styled(m.div)`
  display: flex;
  justify-content: space-between;

  span {
    background-color: ${(props) => props.theme.color.black};
    width: 100%;
    margin: 1rem 1rem 2rem;
  }
`;

const SubText = styled(m.div)`
  font-size: 2rem;
  width: 100%;
  text-align: start;
  padding-left: 3rem;
  display: flex;
  gap: 5px;
  font-weight: bold;
`;

const FlagWrapper = styled.div`
  position: relative;

  &:first-child {
    border-bottom: 4px solid ${(props) => props.theme.color.red};
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: -16.5rem;
  right: -24rem;
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
    border: '0px solid #d53b3e',
    width: '0%',
  },
  expand: (custom) => ({
    border: '10px solid #d53b3e',
    width: '100%',
    transition: {
      duration: 1.5,
      delay: custom * 0.6,
      ease: [0, 0.71, 0.2, 1.01],
    },
  }),
  expandShort: (custom) => ({
    border: '10px solid #d53b3e',
    width: '100%',
    transition: {
      duration: 1.5,
      delay: custom * 0.6,
      ease: [0, 0.71, 0.2, 1.01],
    },
  }),
};

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const handleMouse = () => {
    setIsHovered(!isHovered);
  };
  const showImage = () => {
    imageRef.current.style.opacity = '1';
    imageRef.current.style.transition = 'all 0.5s ease';
  };
  const hideImage = () => {
    imageRef.current.style.opacity = '0';
    imageRef.current.style.transition = 'all 0.5s ease';
  };

  useEffect(() => {
    isHovered === true ? showImage() : hideImage();
  }, [isHovered]);

  return (
    <Section
      variants={animationVars}
      initial="hidden"
      animate="show"
      custom={1}
    >
      <ContentWrapper>
        <BrandTextWrapper>
          <BrandText
            variants={animationVars}
            initial="hiddenLeft"
            animate="showOriginX"
            custom={2}
          >
            B3 Studio.
          </BrandText>
        </BrandTextWrapper>

        <MainText>
          <MainFirst
            variants={animationVars}
            initial="hiddenRight"
            animate="showOriginX"
            custom={3}
          >
            <div>
              <div>WE</div>
              <div>DESIGN</div>
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
          We are a design studio from
          <FlagWrapper>
            <div
              ref={textRef}
              onMouseEnter={handleMouse}
              onMouseLeave={handleMouse}
            >
              South Korea
            </div>
            <ImageWrapper ref={imageRef}>
              <img src={Korea} alt="South Korea Flag" width={400} />
            </ImageWrapper>
          </FlagWrapper>
          .
        </SubText>
      </ContentWrapper>
    </Section>
  );
}
