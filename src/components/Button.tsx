import React from 'react'

interface ButtonProps {
  onClick: () => void
  title: string
}

export const Button = ({onClick, title}: ButtonProps) => {
  return (
    <button className="button" onClick={onClick}>
      {title}
    </button>
  )
}
