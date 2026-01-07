import React from 'react'
import Banner from './Banner'
import Navbar from '../Components/NavbarHome'
import HomeRow from '../Components/HomeArchitecture'
function Home () {
  return (
    <div>
      <Navbar />
      <Banner />
      <HomeRow/>
    </div>
  )
}

export default Home
