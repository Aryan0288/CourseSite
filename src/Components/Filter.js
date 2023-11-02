import React from 'react'

export default function Filter(props) {
  let filterData=props.filterData;
  return (

    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-6  py-4 justify-center items-center mx-auto
    '>
      {
        filterData.map((filter)=>(
          <button 
          className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 ${props.category ===filter.title ? "bg-opacity-60 border-white":"bg-opacity-40 border-transparent"} transition-all duration-300`}
          key={filter.id}>{filter.title}</button>
        ))
      }
    </div>
  )
}
