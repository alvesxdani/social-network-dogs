import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../../Assets/dogs.svg';
import { StyledHeader } from './style';
import UserContext from '../../Context/UserContext';

function Header() {

  const { data } = useContext(UserContext);
  return (
    <StyledHeader>
      <nav className="container">
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className='login-header' to="/conta">
          {data.nome}
        </Link>
        ) : (
          <Link className='login-header' to="/login">
          Login / Criar
        </Link>
        )}
      </nav>
    </StyledHeader>
  );
}

export default Header;
