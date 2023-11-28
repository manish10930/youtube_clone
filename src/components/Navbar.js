import React, { useState } from 'react';
import Logo from "./img/logo.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from "./img/cart.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Set the width of the logo to 228px using Tailwind CSS class */}
        <div className="text-black font-bold text-xl">
          <img src={Logo} alt="" className="w-[228px] h-[100px]" />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-black focus:outline-none focus:tex-black"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path className='text-[#00B4D8]' d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4 items-center">
          <a href="#" className="text-[#00B4D8] p-1">Download app</a>
          <a href="#" className="text-black"> <button className='bg-[#00B4D8] p-1 px-4 rounded-[20px] text-slate-100 ' >Login</button></a>
          <a href="#" className="text-black"><button className='bg-[#00B4D8] p-1 px-4 rounded-[20px] text-slate-100'>Signup</button></a>
          <img className='w-[56px] h-[41px]' src={Cart} alt="" /> <a href="#" className="text-black"><button className='text-[#00B4D8] pt-1'>  Cart</button></a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="flex flex-col space-y-4 mt-4">
            <a href="#" className="text-black">Home</a>
            <a href="#" className="text-black">About</a>
            <a href="#" className="text-black">Services</a>
            <a href="#" className="text-black">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
