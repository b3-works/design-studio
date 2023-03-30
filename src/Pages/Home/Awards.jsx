import styled from 'styled-components';
import Line from '../../components/Line';
import awardsData from '../../data/awards.json';

const Section = styled.section``;
const Title = styled.h1``;
const AwardsContainer = styled.div``;
const Award = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  div {
    font-size: 1.5rem;
  }
`;

const Awards = () => {
  const data = awardsData.awards;

  return (
    <Section>
      <Title>Awards</Title>
      <AwardsContainer>
        {data.map((award) => (
          <>
            <Award key={award.id}>
              <div>{award.id}</div>
              <div>{award.name}</div>
              <div>{award.year}</div>
            </Award>
            <Line />
          </>
        ))}
      </AwardsContainer>
    </Section>
  );
};

export default Awards;
