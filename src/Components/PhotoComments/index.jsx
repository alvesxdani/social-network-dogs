import React, { useContext, useEffect, useRef, useState } from 'react';
import { StyledPhotoComments } from './style';
import UserContext from '../../Context/UserContext';
import PhotoCommentsForm from '../PhotoCommentsForm';

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const commentsSection = useRef(null)
  const { login } = useContext(UserContext);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments])

  return (
    <StyledPhotoComments>
      <ul className='comments' ref={commentsSection}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b> 
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>

      {login && 
        <div className="write-comments">
          <PhotoCommentsForm id={props.id} setComments={setComments}/>
        </div>
      }
    </StyledPhotoComments>
  );
};

export default PhotoComments;
