import styled from 'styled-components';
import Line from '../../components/Line';

const Section = styled.section``;
const Title = styled.div``;
const WorksContainer = styled.div``;
const Work = styled.div``;
const Selected = () => {
  return (
    <>
      <Section>
        <Title>Selected Works</Title>
        <WorksContainer>
          {/* data & map */}
          <Work>
            <div></div>
            <div></div>
          </Work>
        </WorksContainer>
      </Section>
      <Line />
    </>
  );
};

export default Selected;
