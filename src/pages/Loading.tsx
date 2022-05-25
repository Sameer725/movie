import {Loader} from 'components/Loader'
import React from 'react'

export const Loading = () => {
  return (
    <main className="container">
      <Loader text="Loading..." />
    </main>
  )
}
