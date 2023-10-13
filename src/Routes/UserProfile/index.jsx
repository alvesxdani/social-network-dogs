import React from 'react'
import { useParams } from 'react-router-dom'
import Feed from '../Feed'
import Title from '../../Components/Title'

function UserProfile() {
  const {user} = useParams();
  return (
    <section className='container main-section'>
      <Title type='h1'>{user}</Title>
      <Feed user={user} />
    </section>
  )
}

export default UserProfile