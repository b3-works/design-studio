import styled from 'styled-components';
import Line from '../../components/Line';
import data from '../../data/projects.json';
import Marquee from 'react-fast-marquee';

const Section = styled.section`
  padding: 4rem 0;
  display: grid;
  grid-template-columns: 20% 80%;
`;
const Title = styled.div`
  border: 1px solid ${(props) => props.theme.color.white};
  font-size: 1.3rem;
  width: 14rem;
  height: 12rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 1rem;
`;
const WorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Work = styled.div`
  border: 1px solid darkgray;
  border-radius: 1rem;
  height: 20rem;
  display: flex;
  position: relative;
`;
const ProjectTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const ProjectTitle = styled.h1`
  font-family: 'Bebas Neue', cursive;
  font-size: 4rem;
`;
const TagWrapper = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;
const Tag = styled.div`
  border: 1px solid white;
  border-radius: 2rem;
  font-size: 1.5rem;
  padding: 0.8rem;
`;

const Selected = () => {
  return (
    <>
      <Section>
        <Title>Selected Works</Title>
        <WorksContainer>
          {/* data & map */}
          {data.slice(0, 4).map((work) => (
            <Work key={work.id}>
              <Marquee gradient={false}>
                <ProjectTitleWrapper>
                  <ProjectTitle>{work.title}</ProjectTitle>
                  <ProjectTitle>{work.title}</ProjectTitle>
                  <ProjectTitle>{work.title}</ProjectTitle>
                  <ProjectTitle>{work.title}</ProjectTitle>
                </ProjectTitleWrapper>
              </Marquee>
              <TagWrapper>
                {work.tags.map((tag) => (
                  <Tag>{tag}</Tag>
                ))}
              </TagWrapper>
            </Work>
          ))}
        </WorksContainer>
      </Section>
      <Line />
    </>
  );
};

export default Selected;
