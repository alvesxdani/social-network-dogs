import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../../Assets/dogs.svg';
import { StyledHeader } from './style';

function Header() {
  return (
    <StyledHeader>
      <nav className="container">
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link className='login' to="/login">Login / Criar</Link>
      </nav>
    </StyledHeader>
  );
}

export default Header;
