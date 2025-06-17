import React from 'react'

const AcceptTask = ({data}) => {

  return (
    <div>
        {/* Task Card */}
  <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-lg shadow-md">
    <div className="flex justify-between items-center">
      <h3 className="bg-red-600 text-sm px-3 py-1 rounded text-white">{data.category}</h3>
      <h4 className="text-sm text-gray-100">{data.date}</h4>
    </div>
    <h2 className="mt-5 text-2xl font-semibold text-white">
      {data.title}
    </h2>
    <p className="text-sm mt-2 text-gray-100">
      {data.description}
    </p>
     <div className='flex justify-between mt-4'>
    <button className='bg-green-500 py-1 px-2 text-sm'>Mark As Complete</button>
    <button className='bg-red-500 py-1 px-2 text-sm'>Mark As Failed</button>
  </div>
  </div>
 
    </div>
  )
}

export default AcceptTask