import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RootLayout from './app/site/layout'; // Adjust the path as necessary
import Router from './routes';
import { HashRouter } from 'react-router-dom'



function App() {

  return (
    <>
    <HashRouter>
    <Router />
    </HashRouter>
    </>
  )

}

export default App
