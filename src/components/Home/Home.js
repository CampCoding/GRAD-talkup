import React from 'react'
import Baner from './baner/Baner'
import Buildings from './buildings/Buildings'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Baner/>
      <Buildings/>
      <Footer/>
    </div>
  )
}

export default Home
