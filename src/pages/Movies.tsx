import {useMovies} from 'api'
import {Header} from 'components/Header'
import {MovieCard} from 'components/MovieCard'
import React from 'react'
import {useNavigate} from 'react-router'
import {Loading} from './Loading'
import {APP_ROUTES} from './routes'

export const Movies = () => {
  const {movies, isLoading} = useMovies()
  const navigate = useNavigate()

  const onClick = (id: number) => {
    navigate(APP_ROUTES.MOVIE.replace(':movieId', id.toString()))
  }

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Header title="Movies" />
      <main>
        <section className="movies">
          {movies?.map(movie => (
            <MovieCard onClick={onClick} key={movie.id} movie={movie} />
          ))}
        </section>
      </main>
    </>
  )
}
