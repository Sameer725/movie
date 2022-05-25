import {useMovie} from 'api'
import {Button} from 'components/Button'
import {Header} from 'components/Header'
import React, {useCallback} from 'react'
import {useNavigate, useParams} from 'react-router'
import {Loading} from './Loading'
import {APP_ROUTES} from './routes'

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
        <Button title="Home" onClick={onClick} />
      </Header>
      <main>
        <section>
          {movie?.name} {movie?.productionYear}
        </section>
      </main>
    </>
  )
}
