import {useQuery, useQueryClient} from 'react-query'
import {client} from 'utils'
import {Movie} from './types'

interface FilterParams {
  genre?: string
  productionYear?: number
}

export const useMovies = (filterParam: FilterParams = {}) => {
  const queryClient = useQueryClient()
  const {data: movies, ...rest} = useQuery<Movie[]>({
    queryKey: 'movies',
    queryFn: () =>
      client().then((data: Movie[]) => {
        const movies: Movie[] = data.map((movie, index) => ({
          ...movie,
          id: index,
          image: movie.name.replace(/\W+/g, ''),
        }))
        if (filterParam.genre) {
          return movies.filter(movie => movie.genre === filterParam.genre)
        }

        if (filterParam.productionYear) {
          return movies.filter(
            movie => movie.productionYear === filterParam.productionYear,
          )
        }

        return movies
      }),
    onSuccess: movies => {
      for (const movie of movies) {
        queryClient.setQueryData(['movie', {movieId: movie.id}], movie)
      }
    },
  })

  return {...rest, movies}
}
