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
`;
