import {useQuery} from 'react-query'
import {client} from 'utils'
import {Movie} from './types'

export const useMovie = (movieId?: string) => {
  const {data: movie, ...rest} = useQuery<Movie | undefined>({
    queryKey: ['movie', {movieId}],
    queryFn: () =>
      client().then((data: Movie[]) => {
        const movies: Movie[] = data.map((movie, index) => ({
          ...movie,
          id: index,
          image: movie.name.replace(/\W+/g, ''),
        }))
        const movie = movies.find(movie => parseInt(movieId ?? '') === movie.id)

        return movie
      }),
  })

  return {...rest, movie}
}
