import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-slate-800 h-16 px-16 items-center flex">
      <div className="flex items-center space-x-2">
        <img src="/logo.jpg" alt='logo' className="h-7 w-7 rounded-full" />
        <h1 className="text-3xl font-bold text-green-500">EM Service</h1>
      </div>
      <div className="space-x-4 ml-auto">
        <a className="hover:text-blue-400" href="/">Home</a>
        <a className="hover:text-blue-400" href="/">Profile</a>
        <a className="hover:text-blue-400" href="/">LogOut</a>
      </div>
    </div>
  )
}

export default Navbar
