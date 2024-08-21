import React from 'react'
import Homepage from './components/Homepage'
import Page2 from './components/Page2'
import Page from './components/Page'
import Frequently from './components/Frequently'

const page = () => {
  return (
    <div>
      <Homepage />
      <Page2 />
      <Page />
      <Frequently />
    </div>
  )
}

export default page
