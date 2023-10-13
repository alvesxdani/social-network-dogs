import React, { useEffect, useState } from 'react'
import FeedModal from '../../Components/FeedModal'
import FeedPhotos from '../FeedPhotos'
import PropTypes from 'prop-types'

function Feed({ user }) {
  const [modalPhoto, setModalPhoto] = useState(null)
  const [pages, setPages] = useState([1])
  const [infinite, setInfinite] = useState(true)

  useEffect(() => {
    let wait = false

    function infiniteScroll() {
      if(infinite) {

        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight
  
        if(scroll > height * .75 && !wait ) {
          setPages((pages) => [...pages, pages.length + 1])
          wait = true
          setTimeout(() => {
            wait = false
          }, 500)
        }
      }
      
    }

    window.addEventListener('wheel', infiniteScroll)
    window.addEventListener('scroll', infiniteScroll)

    return () => {
      window.removeEventListener('wheel', infiniteScroll)
      window.removeEventListener('scroll', infiniteScroll)
    }
  }, [infinite])

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}

      {pages.map((page) => (
        <FeedPhotos
          user={user}
          page={page}
          setModalPhoto={setModalPhoto}
          key={page}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  )
}

Feed.defaultProps = {
  user: 0,
}

Feed.propTypes = {
  user: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
}

export default Feed
