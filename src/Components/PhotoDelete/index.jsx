import React, { useEffect } from 'react'
import { StyledPhotoDelete } from './style'
import { PHOTO_DELETE } from '../../Api/api'
import useFetch from '../../Utils/useFetch'

function PhotoDelete({ id }) {
  const { loading, request } = useFetch()

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar?')
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id)
      const { response } = await request(url, options)
      if (response.ok) window.location.reload()
    }
  }
  return (
    <StyledPhotoDelete>
      {loading ? (
        <button className="delete" disabled>
          Deletar
        </button>
      ) : (
        <button className="delete" onClick={handleClick}>
          Deletar
        </button>
      )}
    </StyledPhotoDelete>
  )
}

export default PhotoDelete
