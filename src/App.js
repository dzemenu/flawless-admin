import React from 'react'
import Client from './components/Client'
import { Route,Routes } from 'react-router'
import Addclient from './components/Addclient'
import Header from './components/Header'
import Sidemenu from './components/Sidemenu'


const App = () => {
  return (
    <div >
      <Header />
      <Sidemenu  />
      <Routes >
        <Route exact path="/" element={<Client />} />
        <Route exact path="/client" element={<Addclient />} />

      </Routes>
    </div>
  )
}

export default App
