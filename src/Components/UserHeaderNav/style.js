import { styled } from "styled-components"

export const StyledHeaderUserNav = styled.nav`
  ${(props) => props.$mobile === false ? `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a,
  button {
    background: #eee;
    border-radius: .2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: .1s;
    cursor: pointer;
  }

  a:hover,
  a:focus,
  button:hover,
  button:focus  {
    background: white;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
    outline: none;
  }

  a.active {
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
  }

  a.active svg > * {
    fill: #fb1;
  }` : 
  `
  display: block;
  position: absolute;
  top: 70px;
  right: 0px;
  padding: 0 1rem;
  background: white;
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
  border-radius: .2rem;
  transform: translateX(-10px);
  opacity: 0;
  visibility: hidden;

    a,
    button {
      display: flex;
      align-items: center;
      background: none;
      width: 100%;
      border: none;
      border-bottom: 1px solid #eee;
      padding: .5rem 0;
      cursor: pointer;

    }

    a:hover svg > *,
    button:hover svg > * {
      fill: #fb1;
    }

    button {
      border-bottom: none;
    }

    svg {
      margin-right: .5rem;
    }
  `}

  ${(props) => props.$active ? `
  transition: .30s;
  transform: initial;
  opacity: 1;
  z-index: 100;
  visibility: visible;` : ''}
`