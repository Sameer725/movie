import {useMovie} from 'api'
import React from 'react'
import {useParams} from 'react-router'

export const Movie = () => {
  const {movieId} = useParams()
  const {movie, isLoading} = useMovie(movieId)

  console.log(movie, isLoading)
  return <div>Movie</div>
}
