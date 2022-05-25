import {useMovie} from 'api'
import {Header} from 'components/Header'
import React from 'react'
import {useParams} from 'react-router'
import {Loading} from './Loading'

export const Movie = () => {
  const {movieId} = useParams()
  const {movie, isLoading} = useMovie(movieId)

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Header title="Movie" />
      <main>
        <section>
          {movie?.name} {movie?.productionYear}
        </section>
      </main>
    </>
  )
}
