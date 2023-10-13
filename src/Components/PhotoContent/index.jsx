import React, { useContext } from 'react'
import { StyledPhotoContent } from './style'
import { Link } from 'react-router-dom'
import Title from '../Title'
import PhotoComments from '../PhotoComments'
import UserContext from '../../Context/UserContext'
import PhotoDelete from '../PhotoDelete'
import Image from '../Image'

function PhotoContent({ data, single }) {
  const { photo, comments } = data
  const user = useContext(UserContext)

  return (
    <StyledPhotoContent className={single ? 'single' : ''}>
      <div className="img">
        <Image src={photo.src} alt={photo.title}/>
      </div>

      <div className="details">
        {user.data && user.data.username === photo.author ? (
          <PhotoDelete id={photo.id} />
        ) : (
          <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
        )}
        <p className="author">
          <span className="visualizacoes">{photo.acessos}</span>
        </p>
        <Title type="h1">
          <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
        </Title>
        <ul className="attributes">
          <li>{photo.peso} kg</li>
          <li>
            {photo.idade <= 1 ? `${photo.idade} ano` : `${photo.idade} anos`}
          </li>
        </ul>
      </div>

      <PhotoComments id={photo.id} comments={comments} />
    </StyledPhotoContent>
  )
}

export default PhotoContent
