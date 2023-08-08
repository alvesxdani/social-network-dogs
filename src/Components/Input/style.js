import { styled } from "styled-components";

export const StyledInput = styled.div`
margin-bottom: 1rem;

  input {
    border: 1px solid #eee;
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: .8rem;
    border-radius: .4rem;
    background-color: #eee;
    transition: .2s;
  }

  input:focus,
  input:hover {
    outline: none;
    border-color: #fb1;
    background-color: #fff;
    box-shadow: 0 0 0 3px #fea;
  }

  label {
    display: block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: .5rem;
  }

  p {
    color: #f31;
    font-size: .875rem;
    margin-top: .25rem;
  }
`