import React from 'react'
import { Helmet } from 'react-helmet'

function NoPage() {
  return (
    <>
    <Helmet>
                <title>No Page</title>
    </Helmet>
      <h1 style={{fontSize:"40px", fontWeight: 900}}>404 NOT FOUND</h1>
    </>
  )
}

export default NoPage
