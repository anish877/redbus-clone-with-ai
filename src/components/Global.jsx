import React from 'react'
import Colombia from "../assets/Colombia.svg"
import India from "../assets/India.svg"
import Indonesia from "../assets/Indonesia.svg"
import Malasiya from "../assets/Malaysia.svg"
import Peru from "../assets/Peru.svg"
import Singappore from "../assets/Singapore.svg"

const Global = () => {
  return (
    <>
        <section className="flex justify-center my-20 mb-2 md:my-40 md:mb-32">
        <div className="flex flex-col w-full px-6 md:px-0 md:w-[80%] max-w-[1300px]">
            <h1 className="text-gray-700 text-2xl font-medium md:text-[2.5rem] mb-6 md:mb-12">GLOBAL PRESENCE</h1>
            <div className="flex gap-3 items-center justify-between mt-4 md:mt-8 overflow-auto">

                
                <div className="flex flex-col items-center w-40 cursor-pointer group lg:flex-shrink-0">
                    <div className="h-32 w-32 rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src={Colombia} alt=""/>
                    </div>
                    <a className="mt-3 w-full rounded-full group-hover:bg-gray-200 py-2 px-4 font-semibold text-2xl grid place-content-center" href="">Colombia</a>
                </div>

                <div className="flex flex-col items-center w-40 cursor-pointer group lg:flex-shrink-0">
                    <div className="h-32 w-32 rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src={India} alt=""/>
                    </div>
                    <a className="mt-3 w-full rounded-full group-hover:bg-gray-200 py-2 px-4 font-semibold text-2xl grid place-content-center" href="">India</a>
                </div>




                <div className="flex flex-col items-center w-40 cursor-pointer group lg:flex-shrink-0">
                    <div className="h-32 w-32 rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src={Indonesia} alt=""/>
                    </div>
                    <a className="mt-3 w-full rounded-full group-hover:bg-gray-200 py-2 px-4 font-semibold text-2xl grid place-content-center" href="">Indonesia</a>
                </div>



                <div className="flex flex-col items-center w-40 cursor-pointer group lg:flex-shrink-0">
                    <div className="h-32 w-32 rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src={Malasiya} alt=""/>
                    </div>
                    <a className="mt-3 w-full rounded-full group-hover:bg-gray-200 py-2 px-4 font-semibold text-2xl grid place-content-center" href="">Malaysia</a>
                </div>




                <div className="flex flex-col items-center w-40 cursor-pointer group lg:flex-shrink-0">
                    <div className="h-32 w-32 rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src={Peru} alt=""/>
                    </div>
                    <a className="mt-3 w-full rounded-full group-hover:bg-gray-200 py-2 px-4 font-semibold text-2xl grid place-content-center" href="">Peru</a>
                </div>



                <div className="flex flex-col items-center w-40 cursor-pointer group lg:flex-shrink-0">
                    <div className="h-32 w-32 rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src={Singappore} alt=""/>
                    </div>
                    <a className="mt-3 w-full rounded-full group-hover:bg-gray-200 py-2 px-4 font-semibold text-2xl grid place-content-center" href="">Singapore</a>
                </div>



            </div>

        </div>
        </section>
        <section className="flex justify-center relative right-2 md:static mb-14">
            <div className="flex flex-col w-full px-6 md:px-0 md:w-[80%] max-w-[1300px]">
                <div className="flex justify-end">
                    <a href="" className="text-2xl font-thin border text-gray-600 border-gray-400 rounded-xl py-3 px-2"><i className="fa-solid fa-arrow-up fa-bounce"></i></a>
                </div>
            </div>
        </section>
    </>
  )
}

export default Global
