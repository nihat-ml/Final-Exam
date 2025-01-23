import { useState } from 'react'

import './App.css'
import { createBrowserRouter } from 'react-router'
import { ROUTES } from './routers/router'
import { RouterProvider } from 'react-router-dom'

function App() {
  const route = createBrowserRouter(ROUTES)

  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
