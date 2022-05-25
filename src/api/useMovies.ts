import {useQuery, useQueryClient} from 'react-query'
import {client} from 'utils'
import {Movie} from './types'

export interface FilterParams {
  genre?: string
  year?: string
}

export const useFilter = () => {
  return useQuery<{
    genres: string[]
    years: number[]
  }>({
    queryKey: ['filters'],
    queryFn: () =>
      client().then((data: Movie[]) => {
        const genreSet = new Set<string>()
        const yearSet = new Set<number>()

        data.forEach((movie, index) => {
          genreSet.add(movie.genre)
          yearSet.add(movie.productionYear)
        })

        return {
          genres: Array.from(genreSet),
          years: Array.from(yearSet),
        }
      }),
  })
}

export const useMovies = (filterParam: FilterParams = {}) => {
  const queryClient = useQueryClient()

  return useQuery<Movie[]>({
    queryKey: ['movies', {genre: filterParam.genre, year: filterParam.year}],
    queryFn: () =>
      client().then((data: Movie[]) => {
        let movies: Movie[] = data.map((movie, index) => ({
          ...movie,
          id: index,
          image: movie.name.replace(/\W+/g, ''),
        }))
        if (filterParam.genre) {
          movies = movies.filter(movie => movie.genre === filterParam.genre)
        }

        if (filterParam.year) {
          movies = movies.filter(
            movie => movie.productionYear.toString() === filterParam.year,
          )
        }

        return movies
      }),
    onSuccess: movies => {
      for (const movie of movies) {
        queryClient.setQueryData(
          ['movie', {movieId: movie.id.toString()}],
          movie,
        )
      }
    },
  })
}
