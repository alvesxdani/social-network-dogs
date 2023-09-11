import React from 'react';
import { StyledFeedPhotosItem } from './style'

function FeedPhotosItem({ photo, setModalPhoto }) {
  function handleClick () {
    setModalPhoto(photo)
  }
  return (
    <StyledFeedPhotosItem onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span className='visualizacao'>{photo.acessos}</span>
    </StyledFeedPhotosItem>
  );
}

export default FeedPhotosItem;
