import {FilterParams, useFilter, useMovies} from 'api'
import {Filter} from 'components/Filter'
import {Header} from 'components/Header'
import {MovieCard} from 'components/MovieCard'
import React, {useState} from 'react'
import {useNavigate} from 'react-router'
import {ErrorFallback} from './ErrorFallback'
import {Loading} from './Loading'
import {APP_ROUTES} from './routes'

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
              name="year"
              data={data?.years ?? []}
              onSelect={onSelectYear}
              value={filter?.year}
            />
            <Filter
              name="genre"
              data={data?.genres ?? []}
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
              <MovieCard onClick={onClick} key={movie.id} movie={movie} />
            ))}
          </section>
        </main>
      ) : (
        <ErrorFallback message="No Movie Found" />
      )}
    </>
  )
}
