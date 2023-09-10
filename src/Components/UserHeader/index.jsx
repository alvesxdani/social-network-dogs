import React, { useEffect, useState } from 'react';
import Title from '../Title';
import UserHeaderNav from '../UserHeaderNav';
import { StyledUserHeader } from './style';
import { useLocation } from 'react-router-dom';

function UserHeader() {
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/conta/postar':
        setTitle('Poste sua foto');
        break;
      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;
      default:
        setTitle('Minha conta')
    }
  }, [location]);

  return (
    <StyledUserHeader>
      <Title type="h1">{title}</Title>
      <UserHeaderNav />
    </StyledUserHeader>
  );
}

export default UserHeader;
