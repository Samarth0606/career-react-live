import React from 'react'
import LeftSidebar from '../../elements/leftside/LeftSidebar'
import RightSidebar from '../../elements/rightside/RightSidebar'

const Home = () => {
  return (
    <div className='grid grid-cols-1 md:grids-cols-4'>
      <div className='px-6'>
        <LeftSidebar/> 
      </div>
      <div className='col-span-2 border-x-2 px-6 border-t-slate-800'>
        Main
      </div>
      <div className='px-6'>
        <RightSidebar/> 
      </div>
    </div>
  )
}

export default Home