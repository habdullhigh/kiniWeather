import { useState } from 'react'
import './App.css'
import Rightsidebar from './components/rightsidebar'
import Rightsidebar2 from './components/rightsidebar2'
import Tomorrow from './components/tomorrow'
import Searchbar from './components/searchbar'
import Sidebar from './components/sidebar'
import BurgerIcon from './components/burgericon'
import AirConditions from './components/airconditions'


function App() {
  
  const handlesearch = (query: string) => {
    console.log("Location", query)
  }

  return (
    <>
      <BurgerIcon/>
      <Sidebar/>

      <div className='mainside text-white pt-6'>

        <Searchbar onSearch={handlesearch}/>
        <h1 className='Heading '>Your City</h1>
        <p className='text-[#AEB5CD]'>Chance of Rain: 0*C</p>
        <h2 className='tempheading pt-6'>0*C</h2>
        <Tomorrow/>
        <AirConditions/>
        <Rightsidebar2/>
      </div>

      <Rightsidebar/>
    
    </>
  )
}

export default App
