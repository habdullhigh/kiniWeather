// import { useState } from 'react'
import './App.css'
import RightSidebar from './components/RightSidebar'
import Tomorrow from './components/tomorrow'
import Searchbar from './components/seachbar'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
    <Searchbar/>
    <div>
    <h1>Your City</h1>
    <p>Chance of Rain</p>
    <h2>0*C</h2>
    </div>
    <Tomorrow/>
    <RightSidebar/>
    <Sidebar/>
    
    </>
  )
}

export default App
