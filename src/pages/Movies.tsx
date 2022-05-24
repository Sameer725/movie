import {useMovies} from 'api'
import React from 'react'

export const Movies = () => {
  const {movies, isLoading} = useMovies({productionYear: 2010})

  console.log(movies, isLoading)

  return <div>Movies</div>
}
