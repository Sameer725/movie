const apiURL = process.env.REACT_APP_API_URL

export const client = async (
  params: Record<string, string> = {},
  method: RequestInit['method'] = 'GET',
) => {
  let url = `${apiURL}`

  if (Object.keys(params).length > 0) {
    url += '?' + new URLSearchParams(params).toString()
  }

  return window.fetch(url, {method}).then(async response => {
    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}
