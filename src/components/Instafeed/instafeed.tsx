// @ts-nocheck
import React, { useState, useEffect } from "react"
import Instagram from "../../utils/instagram.js"

export const Instafeed = () => {
  const [insta, setInsta] = useState({})
  useEffect(() => {
    Instagram.getFeed("INSERT_INSTA_HERE")
      .then(media => setInsta({ loading: false, media: media }))
      .catch(() => setInsta({ loading: false, media: [] }))
  }, [])

  return (
    <>
      {insta?.media?.map(({ src, alt }, index) => (
        <div key={`instafeed-pic-${index}`}>
          <img loading="lazy" src={src} />
          <p>{alt}</p>
        </div>
      ))}
    </>
  )
}

export default Instafeed
