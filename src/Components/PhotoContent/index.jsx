import React from 'react';
import { StyledPhotoContent } from './style';
import { Link } from 'react-router-dom';
import Title from '../Title';
import PhotoComments from '../PhotoComments'

function PhotoContent({ data }) {
  const { photo, comments } = data;

  return (
    <StyledPhotoContent>
      <div className="img">
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className="details">
        <div>
          <p className='author'>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
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
      </div>

      <PhotoComments id={photo.id} comments={comments}/>
    </StyledPhotoContent>
  );
}

export default PhotoContent;
