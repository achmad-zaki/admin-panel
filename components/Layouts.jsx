import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layouts = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar>
          {children}
      </Sidebar>
    </>
  )
}

export default Layouts