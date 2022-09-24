import React from 'react'

export const AnimeList = ({ animelist,setAnimeInfo,animeComponent,handleList}) => {
  const AddToList=animeComponent;
  return (
    <>
      {
        animelist ? (
          animelist.map((anime, index) => {
            return (
              <div className="card" key={index} onClick={()=>setAnimeInfo(anime)}>
                <img src={anime.images.jpg.large_image_url} alt="animeImage" />
                <div className="anime-info">
                  <h4>{anime.title}</h4>
                  <div className="overlay" onClick={()=>handleList(anime)}>
                      {/* <h4>{anime.title_japanese}</h4> */}
                      <AddToList/>
                  </div>

                </div>
              </div>
            )
          })
        ) : "There is no anime in this name"
      }

    </>
  )
}
