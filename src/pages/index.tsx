import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {ErrorFallback} from './ErrorFallback'
import {Movie} from './Movie'
import {Movies} from './Movies'
import {APP_ROUTES} from './routes'

export const AppRoute = () => {
  return (
    <Routes>
      <Route path={APP_ROUTES.MOVIES} element={<Movies />} />
      <Route path={APP_ROUTES.MOVIE} element={<Movie />} />
      <Route path={APP_ROUTES.ERROR} element={<ErrorFallback />} />
    </Routes>
  )
}
