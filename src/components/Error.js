import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div>
        <h1>Error page is not found</h1>
         <button>
        <Link to="/" >Back To Home Page</Link>
         </button>
       </div>
  )
}
