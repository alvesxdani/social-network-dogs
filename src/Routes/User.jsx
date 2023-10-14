import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from './Feed';
import UserStats from './UserStats';
import UserPhotoPost from './UserPhotoPost';
import UserHeader from '../Components/UserHeader';
import UserContext from '../Context/UserContext'
import NotFound from './NotFound'
import Head from '../Components/Head'

function User() {

  const {data} = useContext(UserContext)
  return (
    <section className="container">
      <Head title="Minha conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}

export default User;
