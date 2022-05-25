import React, {useState} from 'react'
import {useNavigate} from 'react-router'

import {APP_ROUTES} from './routes'
import {ErrorFallback} from './ErrorFallback'
import {Filter} from 'components/Filter'
import {FilterParams, useFilter, useMovies} from 'api'
import {Header} from 'components/Header'
import {Loading} from './Loading'
import {MovieCard} from 'components/MovieCard'

export const Movies = () => {
  const {data, isLoading: isFilterLoading} = useFilter()
  const [filter, setFilter] = useState<FilterParams>()

  const {data: movies, isLoading} = useMovies(filter)
  const navigate = useNavigate()

  const onClick = (id: number) => {
    navigate(APP_ROUTES.MOVIE.replace(':movieId', id.toString()))
  }

  const onSelectYear = (year: string) => {
    setFilter(state => ({...state, year}))
  }
  const onSelectGenre = (genre: string) => {
    setFilter(state => ({...state, genre}))
  }

  return (
    <>
      <Header title="Movies">
        {isFilterLoading ? null : (
          <div style={{display: 'flex'}}>
            <Filter
              data={data?.years ?? []}
              name="year"
              onSelect={onSelectYear}
              value={filter?.year}
            />
            <Filter
              data={data?.genres ?? []}
              name="genre"
              onSelect={onSelectGenre}
              value={filter?.genre}
            />
          </div>
        )}
      </Header>
      {isLoading ? (
        <Loading />
      ) : movies && movies?.length > 0 ? (
        <main>
          <section className="movies">
            {movies?.map(movie => (
              <MovieCard key={movie.id} movie={movie} onClick={onClick} />
            ))}
          </section>
        </main>
      ) : (
        <ErrorFallback message="No Movie Found" />
      )}
    </>
  )
}
