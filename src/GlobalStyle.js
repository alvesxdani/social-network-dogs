import { createGlobalStyle } from 'styled-components';
import LoginImg from './Assets/login.jpg'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    padding-top: 4rem;
    margin: 0;
    color: #333;
    --type-first: Helvetica, Arial, sans-serif;
    --type-second: 'Spectral', georgia;
    font-family: var(--type-first);
  }

  h1, h2, h3 {
    margin: 0;
  }

  ul,li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button, input {
    display: block;
    font-size: 1rem;
    font-family: var(--type-first);
    color: #333;
  }

  .container {
    max-width: 50rem;
    padding: 0 1rem;
    margin: 0 auto;
  }

  .main-container {
    margin-top: 2rem;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  .animeLeft {
    opacity: 0;
    transform: translateX(-30px);
    animation: animeLeft .3s forwards;
  }

  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }

  //Login page
  .form {
    margin-bottom: 2rem;
  }

  .lost {
    display: inline-block;
    color: #666;
    padding: 0.5rem 0;
    line-height: 1;
  }

  .lost::after {
    content: '';
    height: 2px;
    width: 100%;
    background: currentColor;
    display: block;
  }
  
  .cadastro {
    margin-top: 4rem;
      p {
      margin-top: 2rem;
      margin-bottom: 2rem;
      }
    }

    .login {
      display: grid;
      grid-template-columns: 1fr 1fr;
      min-height: 100vh;
      gap: 2rem;

      @media (max-width: 40rem) {
        grid-template-columns: 1fr;
      }
    }

    .login::before {
      content: '';
      display: block;
      background: url(${LoginImg}) no-repeat center center;
      background-size: cover;

      @media (max-width: 40rem) {
        display: none;
      }
    }

    .forms {
      max-width: 30rem;
      padding: 1rem;
      @media (max-width: 40rem) {
        max-width: 100%;
      }
    }

    // Mobile button
    .mobile-button {
    background: #eee;
    border-radius: .2rem;
    height: 40px;
    width: 40px;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: .1s;
    cursor: pointer;
  }
  
  .mobile-button::after {
    content: '';
    display: block;
    width: 1.2rem;
    height: 2px;
    background-color: currentColor;
    border-radius: 2px;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: .2s;
  }

  .mobile-button:focus,
  .mobile-button:hover,
  .mobile-btn-active {
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;
  }

  .mobile-btn-active::after {
    transform: rotate(-90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0 8px currentColor, 0 -8px currentColor;
  }
`;
