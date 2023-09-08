import React from 'react'
import UserHeader from '../Components/UserHeader'
import { Route, Routes } from 'react-router-dom'
import { USER_POST } from '../Api/api'
import UserPhotoPost from './UserPhotoPost'
import Feed from './Feed'

function User() {
  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed />}/>
        <Route path='posta' element={<UserPhotoPost />} />
      </Routes>
    </section>
  )
}

export default User