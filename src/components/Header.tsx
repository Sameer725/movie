import React from 'react'

interface HeaderProps {
  title: string
  children?: React.ReactNode
}

export const Header = ({title, children}: HeaderProps) => {
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      {children}
    </header>
  )
}
