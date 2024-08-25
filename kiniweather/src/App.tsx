import { useState } from 'react'
import './App.css'
import Rightsidebar from './components/rightsidebar'
import Tomorrow from './components/tomorrow'
import Searchbar from './components/searchbar'
import Sidebar from './components/sidebar'
import AirConditions from './components/airconditions'


function App() {
  
  const handlesearch = (query: string) => {
    console.log("Location", query)
  }

  return (
    <>
      
      <Sidebar/>

      <div className='mainside text-white pt-6'>

        <Searchbar onSearch={handlesearch}/>
        <h1 className='Heading '>Your City</h1>
        <p>Chance of Rain: 0*C</p>
        <h2 className='tempheading pt-6'>0*C</h2>
        <Tomorrow/>
        <AirConditions/>
      </div>

      <Rightsidebar/>
    
    </>
  )
}

export default App
