import React, { useState } from 'react'
import { StyledImage } from './style'

function Image({alt, ...props}) {
  const [skeleton, setSkeleton] = useState(true)

  function handleLoad({target}) {
    setSkeleton(false)
    target.style.opacity = 1;
  }

  return (
    <StyledImage>
      {skeleton && <div className="skeleton"></div>}
      <img onLoad={handleLoad} {...props} className='img' alt={alt} />
    </StyledImage>
  )
}

export default Image