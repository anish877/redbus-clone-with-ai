import React from 'react'
import { Bed, ChevronLeft, ChevronRight, GlassWater, Moon, MoveRight, PlugZap, Sun, Sunrise, Sunset, Toilet, Truck } from 'lucide-react'

const BusTicketsTopBar = ({ origin, destination }) => {
  return (
    <div>
      <div className='flex flex-wrap text-xs items-center px-2 sm:px-4 py-3 bg-[#f8f4f4]'>
        <p className='font-bold'>Bus Tickets</p>
        <ChevronRight className='font-bold h-4'/>
        <p className='font-light'>{origin} To {destination} Bus</p>
      </div>
      <div className='font-bold px-2 sm:px-4 py-2 text-inherit text-sm'>
        <p>{origin} To {destination} Bus</p>
      </div>
      <hr />
      <div className='flex flex-wrap gap-2 sm:gap-4 font-bold px-2 sm:px-4 py-4 text-sm items-center'>
        <p>{origin}</p>
        <MoveRight className="h-6 w-6" />
        <p>{destination}</p>
        <ChevronLeft className='text-gray-400 h-6 w-6' />
        <p>1 Jan</p>
        <ChevronRight className='text-gray-400 h-6 w-6' />
        <button className='font-extralight bg-[#f8f4f4] border border-gray-600 py-1 px-4 sm:px-7 rounded-sm'>Modify</button>
      </div>
      <hr />
    </div>
  );
};

export default BusTicketsTopBar
