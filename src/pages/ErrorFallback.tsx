import React from 'react'

interface ErrorFallBackProps {
  message?: string
}

export const ErrorFallback = ({
  message = 'Page Not Found',
}: ErrorFallBackProps) => {
  return (
    <main className="container">
      <h1>{message}</h1>
    </main>
  )
}
