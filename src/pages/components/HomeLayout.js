import React from 'react'
import Header from './Header'
import './HomeLayout.css'

const HomeLayout = props => {
  return(
    <section className="HomeLayout">
      <Header />
      {props.children}
    </section>
  )
}

export default HomeLayout