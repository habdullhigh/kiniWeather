import { useState } from 'react'
import './App.css'
import Rightsidebar from './components/rightsidebar'
/*import Tomorrow from './components/tomorrow'
import Searchbar from './components/seachbar'*/
import Sidebar from './components/sidebar'

function App() {
  

  return (
    <>
    <Sidebar/>
    <div className='mainside text-white pt-6 pl-6'>
      <h1 className='Heading '>Your City</h1>
      <p>Chance of Rain: 0*C</p>
      <h2 className='tempheading pt-6'>0*C</h2>
    </div>
    <Rightsidebar/>
    
    </>
  )
}

export default App
