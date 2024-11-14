import React from 'react'

const Header = ({app}) => {
  return (
    <div className='w-full py-4 text-center text-black bg-blue-500'> 
      header || {app.name}
    </div>
  )
}

export default Header
