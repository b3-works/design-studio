import { motion as m } from 'framer-motion';
import styled from 'styled-components';

const LineContainer = styled.div`
  width: 100%;
  height: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-x: hidden;
`;

const AnimatedLine = styled(m.div)`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.white};
  position: absolute;
  right: 100%;
`;

const Line = () => {
  return (
    <LineContainer>
      <AnimatedLine
        initial={{ x: '0%' }}
        whileInView={{ x: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      ></AnimatedLine>
    </LineContainer>
  );
};

export default Line;
