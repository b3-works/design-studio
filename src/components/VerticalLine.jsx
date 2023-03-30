import React from 'react';

import { motion as m } from 'framer-motion';
import styled from 'styled-components';

const LineContainer = styled.div`
  width: 1px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-y: hidden;
`;

const AnimatedLine = styled(m.div)`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.white};
  position: absolute;
`;

export default function VerticalLine() {
  return (
    <LineContainer>
      <AnimatedLine
        initial={{ y: '-100%' }}
        whileInView={{ y: '0%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      ></AnimatedLine>
    </LineContainer>
  );
}
