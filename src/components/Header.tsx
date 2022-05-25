import React, {useLayoutEffect, useState} from 'react'

interface HeaderProps {
  title: string
  children?: React.ReactNode
}

export const Header = ({title, children}: HeaderProps) => {
  const [style, setStyle] = useState('header')

  useLayoutEffect(() => {
    const eventHandler = () => {
      if (window.scrollY >= 10) {
        setStyle('header header--sticky')
      } else {
        setStyle('header')
      }
    }

    window.addEventListener('scroll', eventHandler)

    return () => window.removeEventListener('scroll', eventHandler)
  }, [setStyle])

  return (
    <header className={style}>
      <h1 className="header__title">{title}</h1>
      {children}
    </header>
  )
}
