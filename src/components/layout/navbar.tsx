import React from 'react'
import logo from "../../assets/docuhelp-logo.png"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex justify-between items-center px-20 py-4'>
      <div className='flex items-center justify-between gap-10'>
        <img src={logo} width={150} height={150} />
        <ul className='flex gap-10 font-semibold'>
          <li>Support</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div>
        <button className='bg-secondary text-primary px-6 py-3 font-bold rounded-lg'>Get started</button>
        <button className='bg-primary text-secondary px-8 py-3 font-bold rounded-lg ml-8'>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
