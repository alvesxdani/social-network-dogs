import React from 'react'
import UserHeader from '../Components/UserHeader'
import { Route, Routes } from 'react-router-dom'
import { USER_POST } from '../Api/api'
import UserPhotoPost from './UserPhotoPost'
import Feed from './Feed'
import UserStats from './UserStats'

function User() {
  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed />}/>
        <Route path='postar' element={<UserPhotoPost />} />
        <Route path='estatisticas' element={<UserStats/>} />
      </Routes>
    </section>
  )
}

export default User