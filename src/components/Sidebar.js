import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Link } from 'react-router-dom';
function Sidebar() {
  const togleMenu=useSelector(Store=>Store.app.isMenuOpen);
  console.log("is menu is heere",togleMenu)

  if(!togleMenu) return null;

  return (
    <div className='w-60 mt-16 h-[100vh]'>
       <div className='p-5 shadow-lg'  >
       <ul>
            <Link to="/">
            <li>Home</li>
            </Link>
            <li>Shorts</li>
            <li>Subscription</li>
        </ul>
        <h1 className='font-bold mt-2'>You</h1>
        <ul>
            <li>Your Channel</li>
            <li>History</li>
            <li>Your Videos</li>
            <li>Watch Later</li>
        </ul>
        <h1 className='font-bold mt-2'>Subscription</h1>
        <ul>
            <li>AajTak</li>
            <li>Zee Tv</li>
            <li>BB ki Vines</li>
            <li>Zee News</li>
        </ul>
       </div>
    </div>
  )
}

export default Sidebar