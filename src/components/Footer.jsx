import styled from 'styled-components';

const Section = styled.footer`
  border: 1px solid red;
  display: flex;
  width: 90%;
  margin: 4rem 0 0;
`;
const Logo = styled.div`
  font-family: 'Bebas Neue', cursive;
  font-size: 25rem;
`;
const Contents = styled.div``;

const Footer = () => {
  return (
    <Section>
      <Logo>B3.</Logo>
      <Contents>
        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
        <div>@dfkasldfkzvxlkf</div>
      </Contents>
    </Section>
  );
};

export default Footer;
