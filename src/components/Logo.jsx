import React from 'react'

const Logo = ({ color }) => {
  return (
    <>
        <a href="/" className="logo">
            <img src={`../public/logo-${color}.svg`} alt="" className='w-10 lg:w-16'/>
        </a>
    </>
  )
}

export default Logo
