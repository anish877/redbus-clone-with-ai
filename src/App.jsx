import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router'
import OffersPage from './pages/OffersPage'
import BusTickets from './pages/BusTickets'

const App = () => {
  const [originValue,setOriginValue] = useState("")
  const [destinationValue,setDestinationValue] = useState("")
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage originValue={originValue} setOriginValue={setOriginValue} destinationValue={destinationValue} setDestinationValue={setDestinationValue}/>} />
        <Route path='/offers' element={<OffersPage />} />
        <Route path='/bus-tickets' element={<BusTickets origin={originValue} destination={destinationValue}/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
