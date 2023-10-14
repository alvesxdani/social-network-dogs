import React from 'react';
import Feed from '../Feed';
import { StyledHome } from './style';
import Loading from '../../Components/Loading'
import Head from '../../Components/Head'

function Home() {
  return (
    <StyledHome className="container main-container">
      <Head title="Fotos" description="Home do site dogs, com o feed de fotos." />
      <Feed />
    </StyledHome>
  );
}

export default Home;
