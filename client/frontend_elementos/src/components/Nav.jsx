import React, { useState } from 'react';
import { TfiAlignRight, TfiClose } from 'react-icons/tfi';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto p-4 text-white">
      <h1 className="w-full text-2xl md:text-4xl font-bold text-[#ffffff]">IETE</h1>

      {/* Desktop navigation */}
      <ul className="hidden md:flex">
        <li className="p-4 text-green">Home</li>
        <li className="p-4">Home</li>
        <li className="p-4">Home</li>
        <li className="p-4">Home</li>
        <li className="p-4">Home</li>
      </ul>

      {/* Mobile navigation */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <TfiClose /> : <TfiAlignRight size={20} />}
      </div>

      {/* Sidebar */}
      <div className={`md:hidden fixed left-0 top-0 w-[50%] bg-black h-full border-r-2 border-r-gray-500 ease-in-out duration-500 ${!nav ? 'hidden' : ''}`}>
        <h1 className="w-full text-2xl md:text-4xl font-bold text-[#00df9a] m-7">REACT</h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-b-gray-500">Home</li>
          <li className="p-4 border-b border-b-gray-500">Home</li>
          <li className="p-4 border-b border-b-gray-500">Home</li>
          <li className="p-4 border-b border-b-gray-500">Home</li>
          <li className="p-4 border-b border-b-gray-500">Home</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
