import React from 'react'
import Head from './Head'
import Body from './Body'
import { Outlet } from 'react-router-dom'
function HomePage() {
  return (
       <>
        <Head/>
        <Body/>
         {/* <Outlet/> */}
        
       </>
  )
}

export default HomePage