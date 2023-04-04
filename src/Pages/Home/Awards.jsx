import styled from 'styled-components';
import Line from '../../components/Line';
import awardsData from '../../data/awards.json';

const Section = styled.section`
  /* border: 1px solid red; */
  padding: 4rem 0;
  margin: 0 4rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const Title = styled.div`
  /* border: 1px solid blue; */
  font-size: 1.3rem;
  text-align: center;
`;
const AwardsContainer = styled.div`
  /* border: 1px solid yellow; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const AwardsWrapper = styled.div`
  /* border: 1px solid white; */
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Award = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
`;

const Awards = () => {
  const data = awardsData.awards;

  return (
    <Section>
      <Title>Awards</Title>
      <AwardsContainer>
        {data.map((award) => (
          <AwardsWrapper key={award.id}>
            <Award>
              <div>{award.id}</div>
              <div>{award.name}</div>
              <div>{award.year}</div>
            </Award>
            <Line />
          </AwardsWrapper>
        ))}
      </AwardsContainer>
    </Section>
  );
};

export default Awards;
