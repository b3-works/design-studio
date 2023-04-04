import styled from 'styled-components';
import data from '../../data/projects.json';
import Marquee from 'react-fast-marquee';
import VerticalLine from '../../components/VerticalLine';

const Section = styled.section`
  margin: 4rem 2rem;
  height: 85rem;
  display: flex;
`;

const TitleWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  height: 85rem;
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  div {
    position: sticky;
    top: 10rem;
  }
`;

const WorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  gap: 3rem;
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
  border: 1px solid ${(props) => props.theme.color.white};
  border-radius: 2rem;
  color: ${(props) => props.theme.color.white};
  font-size: 1.5rem;
  padding: 0.8rem;
`;

export default function Selected() {
  return (
    <Section>
      <TitleWrapper>
        <Title>
          <div>Selected Works</div>
        </Title>
      </TitleWrapper>

      <VerticalLine />

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
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagWrapper>
          </Work>
        ))}
      </WorksContainer>
    </Section>
  );
}
