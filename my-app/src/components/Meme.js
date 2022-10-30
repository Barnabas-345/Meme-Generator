import React from 'react'

const Meme = () => {
  return (
    <div>
      <img src="data:image/jpeg;base64,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" width="65%" height="350px"></img>
    </div>
  )
}

export default Meme
