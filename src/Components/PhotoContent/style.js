import styled from "styled-components"
import VisualizaImg from '../../Assets/visualizacao-black.svg'

export const StyledPhotoContent = styled.div`
margin: auto;
height: 36rem;
border-radius: .2rem;
background: white;
display: grid;
grid-template-columns: 36rem 20rem;
grid-template-rows: auto 1fr auto;
overflow: hidden;
opacity: 0;
transform: scale(0.8);
animation: scaleUp 0.3s forwards;

  @keyframes scaleUp {
    to {
      opacity: initial;
      transform: initial;
    }
  }


  .details {
    padding: 2rem 2rem 0 2rem;
  }

  .img {
    grid-row: 1/4;
  }

  .comments {
    padding: 0 2rem;
  }

  .author {
    opacity: .5;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .author a:hover {
    text-decoration: underline;
  }

  .attributes {
    display: flex;
    font-size: 1.125rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 2rem;

    li {
      margin-right: 2rem;
    }

    li::before {
      content: '';
      display: inline-block;
      height: 20px;
      margin-right: .5rem;
      position: relative;
      top: 3px;
      width: 2px;
      background: #eee;
      margin-top: 5px;
    }
  }

  .visualizacoes::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 10px;
    margin-right: .5rem;
    background: url(${VisualizaImg});
  }

  @media (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);

    .img {
      grid-row: 1;
    }
  }

  ${(props) => props.className === 'single' ? `
  grid-template-columns: 1fr;
  height: auto;

  .img {
    border-radius: .4rem;
  }
  ` : null}
`