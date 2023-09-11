import React, { useState } from 'react';
import { StyledPhotoCommentsForm } from './style';
import { ReactComponent as Enviar} from '../../Assets/enviar.svg';
import useFetch from '../../Utils/useFetch'
import { COMMENT_POST } from '../../Api/api'
import ErrorMsg from '../ErrorMsg'

function PhotoCommentsForm({ id, setComments }) {
  const [comment, setComment] = useState();
  const {request, error} = useFetch()

  async function handleSubmit(event) {
    event.preventDefault();
    const {url, options} = COMMENT_POST(id, {comment})
    const {response, json} = await request(url, options)
    if(response.ok) {
      setComment('')
      setComments((comments) => [...comments, json])
    }
  }

  return (
    <StyledPhotoCommentsForm onSubmit={handleSubmit}>
      <textarea
        name="comment"
        id="comment"
        placeholder='Comente aqui'
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Enviar />
      </button>
      <ErrorMsg error={error} />
    </StyledPhotoCommentsForm>
  );
}

export default PhotoCommentsForm;
