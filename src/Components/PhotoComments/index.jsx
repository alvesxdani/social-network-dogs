import React, { useContext, useEffect, useState } from 'react';
import { StyledPhotoComments } from './style';
import UserContext from '../../Context/UserContext';
import PhotoCommentsForm from '../PhotoCommentsForm';

const PhotoComments = (props) => {
  const { login } = useContext(UserContext);
  const [comments, setComments] = useState(() => props.comments);

  return (
    <StyledPhotoComments>
      <ul className='comment'>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}</b>: 
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments}/>}
    </StyledPhotoComments>
  );
};

export default PhotoComments;
