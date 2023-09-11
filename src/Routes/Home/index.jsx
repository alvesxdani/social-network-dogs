import React from 'react';
import Feed from '../Feed';
import { StyledHome } from './style';

function Home() {
  return (
    <StyledHome className="container main-container">
      <Feed />
    </StyledHome>
  );
}

export default Home;
