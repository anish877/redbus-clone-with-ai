import React, { useState } from 'react'
import HeroImage from "../assets/hero-img.png"
import { Link } from 'react-router'

const Hero = ({originValue,setOriginValue,destinationValue,setDestinationValue}) => {
    const {dateValue,setDateValue} = useState()
    const handleSwap = ()=>{
        const temporigin = originValue
        const tempdestination = destinationValue
        setDestinationValue(temporigin)
        setOriginValue(tempdestination)
    }
  return (
      <section className="h-[32rem] bg-main-color bg-[url('./assets/hero-img.png')] bg-center  bg-no-repeat bg-cover flex justify-center">
        <div className="flex flex-col items-center w-full max-w-[1400px]">
            <h1 className="text-2xl mx-4 md:text-[2rem] text-white font-bold mt-16 mb-4 text-center">India's No. 1 Online Bus Ticket Booking Site</h1>
            <div className="w-[90%] sm:w-[80%] lg:h-24 mt-4 bg-white cursor-pointer relative bottom-7 sm:bottom-0 flex flex-col lg:flex-row rounded-3xl overflow-hidden hover:drop-shadow-lg">
                <div className="h-full flex flex-col sm:flex-row items-center justify-center lg:w-1/2">
                    <div className="h-full border-b sm:border-r border-gray-300 w-full md:w-[50%] sm:w-auto">
                        <div className="px-7 py-8 flex items-center h-full gap-3">
                            <i className="fa-solid fa-bus-simple text-gray-500 text-2xl"></i>
                            <input className="outline-none w-full" type="text" name="" id="" placeholder="From" value={originValue} onChange={(e)=>setOriginValue(e.target.value)}/>
                        </div>
                    </div>
                    <div className="w-10 h-10 bg-white rounded-full  grid place-content-center absolute border border-gray-300 cursor-pointer" onClick={()=>{handleSwap()}}>
                        <i className="fa-solid fa-arrows-turn-to-dots text-gray-500 text-xl"></i>
                    </div>
                    <div className="h-full border-b sm:border-r border-gray-300 w-full md:w-[50%] sm:w-auto">
                        <div className="px-7 py-8 flex items-center h-full gap-3">
                            <i className="fa-solid fa-person-walking-luggage text-gray-500 text-2xl"></i>
                            <input className="outline-none w-full" type="text" name="" id="" placeholder="To" value={destinationValue} onChange={(e)=>setDestinationValue(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className="flex bg-white flex-col sm:flex-row lg:w-1/2">
                    <div className="h-full border-b sm:border-r border-gray-300 sm:w-1/2 w-full">
                        <div className="px-7 py-8 flex items-center h-full gap-3 group relative pr-12">
                            <i className="fa-solid fa-calendar-days text-gray-500 text-2xl"></i>
                            <input className="outline-none opacity-0 scale-[3] h-14 w-[30px] absolute left-14 z-10" type="date" name="" id="" placeholder="To" value={dateValue} onChange={(e)=>setDateValue(e.target.value)}/>
                            <p className="text-gray-400">Date</p>
                        </div>
                    </div>
                    <button className=" px-7 py-8 flex items-center justify-center bg-main-color whitespace-nowrap text-white font-bold w-full sm:w-1/2 text-center">
                    <Link to={"/bus-tickets"}>
                        SEARCH BUSES
                    </Link>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
