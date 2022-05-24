import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import {QueryClientProvider} from './QueryClientProvider'

interface AppProviderProps {
  children: React.ReactNode
}

export const AppProvider = ({children}: AppProviderProps) => {
  return (
    <QueryClientProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  )
}
