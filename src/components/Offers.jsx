import React from 'react'
import Offer1 from "../assets/offer1.png"
import Offer2 from "../assets/offer2.png"
import Offer3 from "../assets/offer3.png"
import Offer4 from "../assets/offer4.png"
import { Link } from 'react-router'

const Offers = () => {
  return (
    <section className="flex relative md:bottom-[150px] mb-20 mt-10 md:my-0 justify-center">
        <div className="flex flex-col items-center w-full max-w-[1400px] py-6 pb-0">
            <div className="w-full md:w-[80%] md:p-8 flex flex-col gap-6 bg-white md:rounded-3xl md:drop-shadow-xl">
                <div className="flex justify-between px-4 md:px-0">
                    <h2 className="text-xl md:text-3xl text-gray-600">TRENDING OFFERS</h2>
                    <Link to={"/offers"}>
                    <button className="text-blue-600 py-1 font-semibold text-base  px-4 rounded-full border border-gray-500 hover:shadow-lg">View All</button>
                    </Link>
                    
                </div>
                <div className="flex text-white gap-6 overflow-auto pl-4 md:pl-0">
                    <div className="h-36 w-64 rounded-xl bg-gradient-to-r from-blue-800 to-blue-500 flex p-3 cursor-pointer flex-shrink-0">
                        <div className="h-full grid place-content-center px-2">
                            <img className="rounded-full w-24" src={Offer1} alt=""/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-xs px-1 py-[1px] bg-[#ffffff4c] rounded-full w-10 grid place-content-center">BUS</p>
                            <h3 className="font-bold text-base leading-5">Save up to Rs 250 on bus tickets</h3>
                            <p className="text-xs">Valid till 30 Nov</p>
                            <div className="flex gap-3 items-center">
                                <p className="grid place-content-center bg-[#ffffff4c] h-6 font-semibold px-2 rounded-sm border border-dashed border-white text-xs">FIRST</p>
                                <i className="fa-regular fa-copy text-xl"></i>
                            </div>
                        </div>
                    </div>
                    <div className="h-36 w-64 rounded-xl bg-gradient-to-r from-red-800 to-red-500 flex p-3 cursor-pointer flex-shrink-0">
                        <div className="h-full grid place-content-center px-2">
                            <img className="rounded-full w-24" src={Offer2} alt=""/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-xs px-1 py-[1px] bg-[#ffffff4c] rounded-full w-10 grid place-content-center">BUS</p>
                            <h3 className="font-bold text-base leading-5">Save up to Rs 300 on AP, TS routes</h3>
                            <p className="text-xs">Valid till 30 Nov</p>
                            <div className="flex gap-3 items-center">
                                <p className="grid place-content-center bg-[#ffffff4c] h-6 font-semibold px-2 rounded-sm border border-dashed border-white text-xs">SUPERHIT</p>
                                <i className="fa-regular fa-copy text-xl"></i>
                            </div>
                        </div>
                    </div>
                    <div className="h-36 w-64 rounded-xl bg-gradient-to-r from-green-800 to-green-500 flex p-3 cursor-pointer flex-shrink-0">
                        <div className="h-full grid place-content-center px-2">
                            <img className="rounded-full w-24" src={Offer3} alt=""/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-xs px-1 py-[1px] bg-[#ffffff4c] rounded-full w-10 grid place-content-center">BUS</p>
                            <h3 className="font-bold text-base leading-5">Save up to Rs 300 on RJ,MH, Goa, MP,</h3>
                            <p className="text-xs">Valid till 30 Nov</p>
                            <div className="flex gap-3 items-center">
                                <p className="grid place-content-center bg-[#ffffff4c] h-6 font-semibold px-2 rounded-sm border border-dashed border-white text-xs">BUS300</p>
                                <i className="fa-regular fa-copy text-xl"></i>
                            </div>
                        </div>
                    </div>
                    <div className="h-36 w-64 rounded-xl bg-gradient-to-r from-sky-800 to-sky-500 flex p-3 cursor-pointer flex-shrink-0">
                        <div className="h-full grid place-content-center px-2">
                            <img className="rounded-full w-24" src={Offer4} alt=""/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-xs px-1 py-[1px] bg-[#ffffff4c] rounded-full w-10 grid place-content-center">BUS</p>
                            <h3 className="font-bold text-base leading-5">Save up to Rs 200 in Kerala routes.</h3>
                            <p className="text-xs">Valid till 30 Nov</p>
                            <div className="flex gap-3 items-center">
                                <p className="grid place-content-center bg-[#ffffff4c] h-6 font-semibold px-2 rounded-sm border border-dashed border-white text-xs">RBTRIP</p>
                                <i className="fa-regular fa-copy text-xl"></i>
                            </div>
                        </div>
                    </div>
                    <div className="h-36 w-64 rounded-xl bg-gradient-to-r from-blue-800 to-blue-500 flex p-3 cursor-pointer flex-shrink-0">
                        <div className="h-full grid place-content-center px-2">
                            <img className="rounded-full w-24" src={Offer1} alt=""/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-xs px-1 py-[1px] bg-[#ffffff4c] rounded-full w-10 grid place-content-center">BUS</p>
                            <h3 className="font-bold text-base leading-5">Save up to Rs 250 on bus tickets</h3>
                            <p className="text-xs">Valid till 30 Nov</p>
                            <div className="flex gap-3 items-center">
                                <p className="grid place-content-center bg-[#ffffff4c] h-6 font-semibold px-2 rounded-sm border border-dashed border-white text-xs">FIRST</p>
                                <i className="fa-regular fa-copy text-xl"></i>
                            </div>
                        </div>
                    </div>
                    <div className="h-36 w-64 rounded-xl bg-gradient-to-r from-red-800 to-red-500 flex p-3 cursor-pointer flex-shrink-0">
                        <div className="h-full grid place-content-center px-2">
                            <img className="rounded-full w-24" src={Offer2} alt=""/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-xs px-1 py-[1px] bg-[#ffffff4c] rounded-full w-10 grid place-content-center">BUS</p>
                            <h3 className="font-bold text-base leading-5">Save up to Rs 300 on AP, TS routes</h3>
                            <p className="text-xs">Valid till 30 Nov</p>
                            <div className="flex gap-3 items-center">
                                <p className="grid place-content-center bg-[#ffffff4c] h-6 font-semibold px-2 rounded-sm border border-dashed border-white text-xs">SUPERHIT</p>
                                <i className="fa-regular fa-copy text-xl"></i>
                            </div>
                        </div>
                    </div>
                    <div className="h-36 w-64 rounded-xl bg-gradient-to-r from-green-800 to-green-500 flex p-3 cursor-pointer flex-shrink-0">
                        <div className="h-full grid place-content-center px-2">
                            <img className="rounded-full w-24" src={Offer3} alt=""/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-xs px-1 py-[1px] bg-[#ffffff4c] rounded-full w-10 grid place-content-center">BUS</p>
                            <h3 className="font-bold text-base leading-5">Save up to Rs 300 on RJ,MH, Goa, MP,</h3>
                            <p className="text-xs">Valid till 30 Nov</p>
                            <div className="flex gap-3 items-center">
                                <p className="grid place-content-center bg-[#ffffff4c] h-6 font-semibold px-2 rounded-sm border border-dashed border-white text-xs">BUS300</p>
                                <i className="fa-regular fa-copy text-xl"></i>
                            </div>
                        </div>
                    </div>
                    <div className="h-36 w-64 rounded-xl bg-gradient-to-r from-sky-800 to-sky-500 flex p-3 cursor-pointer flex-shrink-0">
                        <div className="h-full grid place-content-center px-2">
                            <img className="rounded-full w-24" src={Offer4} alt=""/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-xs px-1 py-[1px] bg-[#ffffff4c] rounded-full w-10 grid place-content-center">BUS</p>
                            <h3 className="font-bold text-base leading-5">Save up to Rs 200 in Kerala routes.</h3>
                            <p className="text-xs">Valid till 30 Nov</p>
                            <div className="flex gap-3 items-center">
                                <p className="grid place-content-center bg-[#ffffff4c] h-6 font-semibold px-2 rounded-sm border border-dashed border-white text-xs">RBTRIP</p>
                                <i className="fa-regular fa-copy text-xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </section>
  )
}

export default Offers
