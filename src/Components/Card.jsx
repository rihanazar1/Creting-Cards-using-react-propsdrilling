import React from 'react'

const Card = ({value, index, handelClick}) => {
    const {image, name, proffesion, friend} = value
  return (
    <div className=' w-60 border bg-white border-gray-400 rounded-md overflow-hidden'>
        <div className='w-full h-40 bg-sky-500 '>
            <img className="w-full h-full object-cover" src={image} alt="" />
        </div>
        <div className='w-full h-28 m-3'>
        <h3 className='text-xl font-semibold'>{name}</h3>
        <h4 className='mt-2 text-sm'>{proffesion}</h4>
        <button onClick={()=>handelClick(index)} className={`text-white font-semibold mt-2 px-3 py-1 ${friend === true ? "bg-red-500" : "bg-sky-500"} rounded-md`} >{friend === true ? "Friends" : "Add Friend"}</button>
        </div>
    </div>
  )
}

export default Card