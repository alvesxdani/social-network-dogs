import styled from "styled-components"

export const StyledPhotoDelete = styled.div`
  .delete {
    background: #ddd;
    line-height: 1;
    padding: .3rem .6rem;
    border: 1px solid transparent;
    font-size: .875rem;
    font-family: var(--type-first);
    cursor: pointer;
    border-radius: .4rem;
    transition: .1s;
  }

  .delete:focus,
  .delete:hover {
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
  }
`