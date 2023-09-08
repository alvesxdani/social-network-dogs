import { styled } from "styled-components";
import usuario from '../../Assets/usuario.svg'

export const StyledHeader = styled.header`
  box-shadow: 0px 1px 1px rgba(0,0,0,0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: white;
  top: 0;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
  }

  .logo {
    padding: .5rem 0;
  }

  .login-header {
    color: #333;
  }

  .login-header::after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url(${usuario}) no-repeat center center;
    margin-left: .5rem;
    position: relative;
    top: -1px;
  }
`