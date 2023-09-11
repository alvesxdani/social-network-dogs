import React, { useEffect } from 'react';
import { StyledFeedModal } from './style';
import useFetch from '../../Utils/useFetch';
import { PHOTO_GET } from '../../Api/api';
import ErrorMsg from '../ErrorMsg'
import Loading from '../Loading'
import PhotoContent from '../PhotoContent'

function FeedModal({ photo, setModalPhoto }) {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if(event.target === event.currentTarget) setModalPhoto(null)
  }

  return (
    <StyledFeedModal onClick={handleOutsideClick}>
      <ErrorMsg error={error} />
      {loading && <Loading />}
      {data && <PhotoContent data={data}/>}
    </StyledFeedModal>
  );
}

export default FeedModal;
