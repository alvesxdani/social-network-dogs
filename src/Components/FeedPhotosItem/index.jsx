import React from 'react';
import { StyledFeedPhotosItem } from './style'
import Image from '../Image'

function FeedPhotosItem({ photo, setModalPhoto }) {
  function handleClick () {
    setModalPhoto(photo)
  }
  return (
    <StyledFeedPhotosItem onClick={handleClick}>
     <Image src={photo.src} alt={photo.title}/>
      <span className='visualizacao'>{photo.acessos}</span>
    </StyledFeedPhotosItem>
  );
}

export default FeedPhotosItem;
