import { styled } from 'styled-components';

export const StyledTitle = styled.div`
margin: 1rem 0;
position: relative;
font-family: var(--type-second);
line-height: 1;
z-index: 1;

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h1::after, h2::after {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #fb1;
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: .2rem;
    z-index: -1;
  }

  h2::after {
    background: #ddd;
    width: 3rem;
    height: 0.5rem;
    border-radius: 0.2rem;
    position: initial;
  }
`;
