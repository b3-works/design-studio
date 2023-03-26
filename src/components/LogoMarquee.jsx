import styled from 'styled-components';
import Airbnb from '../image/airbnb.svg';
import Cartier from '../image/cartier.svg';
import Forbes from '../image/forbes.svg';
import Github from '../image/github.svg';
import Google from '../image/google.svg';
import Spotify from '../image/spotify.svg';
import Tesla from '../image/tesla.svg';

const LogoContainer = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-right: 4rem;
  overflow-y: hidden;
`;

const LogoMarquee = () => {
  return (
    <LogoContainer>
      <div>
        <img src={Airbnb} alt="airbnb logo" width={200} />
      </div>
      <div>
        <img src={Cartier} alt="cartier logo" width={200} />
      </div>
      <div>
        <img src={Forbes} alt="forbes logo" width={200} />
      </div>
      <div>
        <img src={Github} alt="github logo" width={200} />
      </div>
      <div>
        <img src={Google} alt="google logo" width={200} />
      </div>
      <div>
        <img src={Spotify} alt="spotify logo" width={200} />
      </div>
      <div>
        <img src={Tesla} alt="tesla logo" width={200} />
      </div>
    </LogoContainer>
  );
};

export default LogoMarquee;
