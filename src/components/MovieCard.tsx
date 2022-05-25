import React, {useCallback} from 'react'

import {IMAGES} from 'assets/images'
import {Movie} from 'api/types'

interface MovieCardProps {
  movie: Movie
  onClick: (id: number) => void
}

export const MovieCard = ({movie, onClick}: MovieCardProps) => {
  const onItemClick = useCallback(() => {
    onClick(movie.id)
  }, [onClick, movie])

  return (
    <div
      className="card"
      onClick={onItemClick}
      style={{
        backgroundImage: `url(${IMAGES[movie.image as keyof typeof IMAGES]})`,
      }}
    >
      <div className="card__info">
        <span className="card__year">{movie.productionYear}</span>
        <span className="card__name">{movie.name}</span>
        <span className="card__genre">{movie.genre}</span>
      </div>

      <div className="card__synopsis">
        <span>{movie.synopsisShort}</span>
      </div>
    </div>
  )
}
