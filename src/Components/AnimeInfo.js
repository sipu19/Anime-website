import React from 'react'

export const AnimeInfo = (props) => {
    const {title,images:{jpg:{large_image_url}},rating}=props.animeInfo
  return (
    <>
        <div className="anime-content">
            <h3>{title}</h3><br />
            <img src={large_image_url} alt="" /><br /><br />
            <div className="info">
                <h3>Title {title}</h3>
                <h4>Rating:{rating}</h4>
            </div>
        </div>
    </>
  )
}
