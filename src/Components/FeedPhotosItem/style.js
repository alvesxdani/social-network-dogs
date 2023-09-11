import styled from "styled-components"
import VisualizaImg from '../../Assets/visualizacao.svg'

export const StyledFeedPhotosItem = styled.li`
display: grid;
border-radius: .2rem;
overflow: hidden;
cursor: pointer;

  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;
  }

  @media (max-width: 40rem) {
    &:nth-child(2) {
      grid-column: initial;
      grid-row: initial;
    }
  }

  img,
  .visualizacao {
    grid-area: 1/1;
  }

  .visualizacao {
    background: rgba(0,0,0,0.3);
    color: white;
    font-size: 1rem;
    text-align: center;
    display: none;
  }

  &:hover .visualizacao {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .visualizacao::before {
    content: '';
    width: 16px;
    height: 10px;
    display: inline-block;
    margin-right: .25rem;
    background: url(${VisualizaImg}) no-repeat;
  }
`