import React from 'react'
import {QueryClient, QueryClientProvider as ClientProvider} from 'react-query'

function useConstant<T>(initializer: () => T) {
  return React.useState(initializer)[0]
}

interface QueryClientProviderProps {
  children: React.ReactNode
}

export const QueryClientProvider = ({children}: QueryClientProviderProps) => {
  const queryClient = useConstant(() => {
    const client = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry(failureCount) {
            if (failureCount < 2) return true
            return false
          },
        },
      },
    })

    return client
  })

  return <ClientProvider client={queryClient}>{children}</ClientProvider>
}
