import {Loader} from 'components/Loader'
import React from 'react'

export const Loading = () => {
  return (
    <main className="loading">
      <Loader text="Loading..." />
    </main>
  )
}
