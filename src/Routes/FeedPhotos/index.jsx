import React, { useEffect } from 'react';
import useFetch from '../../Utils/useFetch';
import { PHOTOS_GET } from '../../Api/api';
import ErrorMsg from '../../Components/ErrorMsg';
import Loading from '../../Components/Loading';
import FeedPhotosItem from '../../Components/FeedPhotosItem';
import { StyledFeedPhotos } from './style';

function FeedPhotos({ page, user, setModalPhoto, setInfinite }) {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const total = 3
      const { url, options } = PHOTOS_GET({
        page,
        total,
        user,
      });
      const { response, json } = await request(url, options);
      if(response && response.ok && json.length < total) {
        setInfinite(false)
      }
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <ErrorMsg error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <StyledFeedPhotos className="animeLeft">
        {data.map((photo) => (
          <FeedPhotosItem
            photo={photo}
            key={photo.id}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </StyledFeedPhotos>
    );
  else {
    return null;
  }
}

export default FeedPhotos;
