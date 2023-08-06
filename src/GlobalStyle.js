import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    padding-top: 4rem;
    margin: 0;
    color: #333;
    --type-first: Helvetica, Arial, sans-serif;
    --type-second: 'Spectral', Georgia;
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
  }
`