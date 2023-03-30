import Hero from './Hero';
import Clients from './Clients';
import WhatWeDo from './WhatWeDo';
import Selected from './Selected';
import Awards from './Awards';
import Line from '../../components/Line';

const Home = () => {
  return (
    <>
      <Hero />
      <Line />
      <Clients />
      <Line />
      <WhatWeDo />
      <Line />
      <Selected />
      <Line />
      <Awards />
    </>
  );
};

export default Home;
