import React from 'react'
import { Bed, ChevronLeft, ChevronRight, GlassWater, Moon, MoveRight, PlugZap, Sun, Sunrise, Sunset, Toilet, Truck } from 'lucide-react'

const BusTicketsTopBar = ({origin,destination}) => {
  return (
    <div>
        <div className='flex text-xs items-center px-4 py-3 bg-[#f8f4f4]'>
        <p className='font-bold'>Bus Tickets</p>
        <ChevronRight className='font-bold h-4'/>
        <p className='font-light'>{origin} To {destination} Bus</p>
      </div>
      <div className='font-bold px-4 py-2 text-inherit text-sm'>
        <p>{origin} To {destination} Bus</p>
      </div>
      <hr />
      <div className='flex gap-4 font-bold px-4 py-4 text-sm items-center'>
        <p>{origin}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
        <p>{destination}</p>
        <svg className='text-gray-400' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
        <p>1 Jan</p>
        <svg className='text-gray-400' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
        <button className='font-extralight bg-[#f8f4f4] border border-gray-600 py-1 px-7 rounded-sm'>Modify</button>
      </div>
      <hr />
    </div>
  )
}

export default BusTicketsTopBar
