import React, {useCallback} from 'react'
import {useNavigate, useParams} from 'react-router'

import {APP_ROUTES} from './routes'
import {Button} from 'components/Button'
import {Header} from 'components/Header'
import {IMAGES} from 'assets/images'
import {Loading} from './Loading'
import {useMovie} from 'api'

export const Movie = () => {
  const {movieId} = useParams()
  const navigate = useNavigate()
  const {movie, isLoading} = useMovie(movieId)

  const onClick = useCallback(() => {
    navigate(APP_ROUTES.MOVIES)
  }, [navigate])

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Header title="Movie">
        <Button onClick={onClick} title="Home" />
      </Header>
      <main className="movie">
        <section className="movie__image">
          <img
            src={IMAGES[movie?.image as keyof typeof IMAGES]}
            alt={movie?.name}
          />
        </section>

        <section className="movie__detail">
          <p className="movie__name">{movie?.name}</p>
          <p className="movie__genre">{movie?.genre}</p>
          <p className="movie__year">{movie?.productionYear}</p>
          <p
            className="movie__synopsis"
            dangerouslySetInnerHTML={{__html: movie?.synopsis ?? ''}}
          />
        </section>
      </main>
    </>
  )
}
