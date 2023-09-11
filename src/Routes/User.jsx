import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from './Feed';
import UserStats from './UserStats';
import UserPhotoPost from './UserPhotoPost';
import UserHeader from '../Components/UserHeader';

function User() {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
}

export default User;
