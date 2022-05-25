import React from 'react'

interface LoaderProps {
  text: string
}

export const Loader = ({text}: LoaderProps) => {
  const loaderText = text.split('')

  return (
    <div className="loader">
      {loaderText.map((item, index) => (
        <span
          key={item + index}
          style={{'--i': index} as React.CSSProperties}
          className="loader__text"
        >
          {item}
        </span>
      ))}
    </div>
  )
}
