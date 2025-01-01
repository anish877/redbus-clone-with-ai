import React from 'react'
import Partner1 from "../assets/partner1.png"
import Partner2 from "../assets/partner2.svg"
import Partner3 from "../assets/partner3.png"
import Partner4 from "../assets/partner4.png"
import Partner5 from "../assets/partner5.svg"
import Partner6 from "../assets/partner6.png"
import Partner7 from "../assets/partner7.svg"
import Partner8 from "../assets/partner8.svg"
import QrCode from "../assets/qrCode.svg"
import PlayStore from "../assets/playStore.svg"
import AppleStore from "../assets/appStore.svg"
import PrimoTopBanner from "../assets/primoTopBanner.svg"
import PrimoSubImg1 from "../assets/primoSubImg1.svg"
import PrimoSubImg2 from "../assets/primoSubImg2.svg"
import PrimoSubImg3 from "../assets/primoSubImg3.svg"

const Patners = () => {
  return (
    <>
        <section className="flex justify-center  my-20 md:my-40 ">
        <div className="flex flex-col w-full mx-6 md:mx-0 md:w-[80%] max-w-[1300px]  bg-main-color rounded-[2.5rem] bg-[url('./assets/appInstallbg.svg')] bg-center  bg-no-repeat bg-cover p-4 py-8 md:p-8">
            <h2 className="text-xl md:text-3xl text-white mb-7">ENJOY THE APP!</h2>

            <div className="flex flex-col md:flex-row text-gray-700 items-center gap-6 lg:gap-14">
                <div className="flex flex-col px-8 py-10 bg-white rounded-xl gap-6 w-full md:w-auto drop-shadow-2xl">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4">
                        <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
                        <p className="text-lg leading-none">Quick access</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
                        <p className="text-lg leading-none">Superior live tracking</p>
                    </div>
                </div>
                <div className="flex justify-between gap-8 items-center">
                    <div className="flex flex-col gap-1">
                        <p className="font-bold flex items-center gap-1 text-xl">4.5<i className="fa-solid fa-star text-sm"></i></p>
                        <p className="text-sm">50M+ downloads</p>
                        <p className="text-sm font-bold">Play Store</p>
                    </div>
                    <div className="w-[2px] h-[80%] rounded-full bg-gray-300"></div>
                    <div className="flex flex-col gap-1">
                        <p className="font-bold flex items-center gap-1 text-xl">4.6<i className="fa-solid fa-star text-sm"></i></p>
                        <p className="text-sm">50M+ downloads</p>
                        <p className="text-sm font-bold">App Store</p>
                    </div>
                </div>

                </div>

                <div className="flex gap-6 lg:gap-14 w-full md:w-auto justify-around">
                <div className="w-[110px]">
                    <p className="text-white font-bold leading-5 mb-3">Scan to download</p>
                    <img src={QrCode} alt=""/>
                </div>
                <div className="w-[150px] flex flex-col gap-4">
                    <p className="text-white font-bold leading-5 ">Download the App on</p>
                    <a href=""><img src={PlayStore} alt=""/></a>
                    <a href=""><img src={AppleStore} alt=""/></a>
                </div>
            </div>
            </div>
        </div>
    </section>
    <section className="flex justify-center  my-20 md:my-40">
        <div className="flex flex-col w-full mx-6 md:mx-0 md:w-[90%] max-w-[1300px]">
            <div className="w-full flex justify-center">
                <img src={PrimoTopBanner} alt=""/>
            </div>
            <div className="flex text-white xl:justify-between justify-center flex-wrap gap-3 mt-6 md:mt-12">
                <div className="h-40 bg-gradient-to-r from-blue-800 to-purple-700 p-5 flex rounded-3xl gap-5 max-w-[370px] items-center justify-center">
                    <div className="py-2 w-[40%] h-full flex justify-center">
                        <img className="h-full" src={PrimoSubImg1} alt=""/>
                    </div>
                    <div className="flex flex-col gap-1 w-[60%]">
                        <h3 className="font-bold text-xl">1 of 5 buses qualify</h3>
                        <p className="text-sm">Primo’s strict safety qualification ensures a safer travel for you</p>
                    </div>
                </div>
                <div className="h-40 bg-gradient-to-r from-blue-800 to-purple-700 p-5 flex rounded-3xl gap-5 max-w-[370px] items-center justify-center">
                    <div className="py-2 w-[40%] h-full flex justify-center">
                        <img className="h-full" src={PrimoSubImg2} alt=""/>
                    </div>
                    <div className="flex flex-col gap-1 w-[60%]">
                        <h3 className="font-bold text-xl">Preferred by 90%</h3>
                        <p className="text-sm">90% of travellers re-book Primo buses for its punctuality and comfort</p>
                    </div>
                </div>
                <div className="h-40 bg-gradient-to-r from-blue-800 to-purple-700 p-5 flex rounded-3xl gap-5 max-w-[370px] items-center justify-center">
                    <div className="py-2 w-[40%] h-full flex justify-center">
                        <img className="h-full" src={PrimoSubImg3} alt=""/>
                    </div>
                    <div className="flex flex-col gap-1 w-[60%]">
                        <h3 className="font-bold text-xl">9 Lac+ monthly travellers</h3>
                        <p className="text-sm">In 2022, 9 Lac+ people traveled with Primo every month</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="flex justify-center  my-20 md:my-40">
        <div className="flex flex-col w-full px-6 md:px-0 md:w-[80%] max-w-[1300px]">
            <h1 className="text-gray-700 text-2xl md:text-[2.5rem] mb-6 md:mb-14">PARTNERED WITH</h1>
            <div>
            <div className="flex items-center justify-between">
                <h2 className="text-xl md:text-3xl text-gray-600">25 RTCs</h2>
                <button className="text-black font-medium py-2 text-sm md:text-base  px-6 rounded-2xl border border-gray-500 hover:shadow-lg hover:shadow-gray-400/50">View All</button>
            </div>
            <div className="flex items-center justify-between mt-8 overflow-auto">
                <div className="p-1 flex flex-col items-center w-[8.5rem] cursor-pointer group lg:flex-shrink-0">
                    <div className="h-24 w-24 rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src={Partner1} alt=""/>
                    </div>
                    <a className="mt-3 w-full py-[0.4rem] rounded-full group-hover:bg-gray-200 font-medium grid place-content-center" href="">APSRTC</a>
                </div>
                <div className="p-1 flex flex-col items-center w-[8.5rem] cursor-pointer group lg:flex-shrink-0">
                    <div className="h-24 w-24 rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src={Partner2} alt=""/>
                    </div>
                    <a className="mt-3 w-full py-[0.4rem] rounded-full group-hover:bg-gray-200 font-medium grid place-content-center" href="">GSRTC</a>
                </div>
                <div className="p-1 flex flex-col items-center w-[8.5rem] cursor-pointer group lg:flex-shrink-0">
                    <div className="h-24 w-24 rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src={Partner3} alt=""/>
                    </div>
                    <a className="mt-3 w-full py-[0.4rem] rounded-full group-hover:bg-gray-200 font-medium grid place-content-center" href="">TSRTC</a>
                </div>
                <div className="p-1 flex flex-col items-center w-[8.5rem] cursor-pointer group lg:flex-shrink-0">
                    <div className="h-24 w-24 rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src={Partner4} alt=""/>
                    </div>
                    <a className="mt-3 w-full py-[0.4rem] rounded-full group-hover:bg-gray-200 font-medium grid place-content-center" href="">MSRTC</a>
                </div>
                <div className="p-1 flex flex-col items-center w-[8.5rem] cursor-pointer group lg:flex-shrink-0">
                    <div className="h-24 w-24 rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src={Partner5} alt=""/>
                    </div>
                    <a className="mt-3 w-full py-[0.4rem] rounded-full group-hover:bg-gray-200 font-medium grid place-content-center" href="">Kerala RTC</a>
                </div>
                <div className="p-1 flex flex-col items-center w-[8.5rem] cursor-pointer group lg:flex-shrink-0">
                    <div className="h-24 w-24 rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src={Partner6} alt=""/>
                    </div>
                    <a className="mt-3 w-full py-[0.4rem] rounded-full group-hover:bg-gray-200 font-medium grid place-content-center" href="">SBSTC</a>
                </div>
                <div className="p-1 flex flex-col items-center w-[8.5rem] cursor-pointer group lg:flex-shrink-0">
                    <div className="h-24 w-24 rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src={Partner7} alt=""/>
                    </div>
                    <a className="mt-3 w-full py-[0.4rem] rounded-full group-hover:bg-gray-200 font-medium grid place-content-center" href="">RSRTC</a>
                </div>
                <div className="p-1 flex flex-col items-center w-[8.5rem] cursor-pointer group lg:flex-shrink-0">
                    <div className="h-24 w-24 rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src={Partner8} alt=""/>
                    </div>
                    <a className="mt-3 w-full py-[0.4rem] rounded-full group-hover:bg-gray-200 font-medium grid place-content-center" href="">UPSRTC</a>
                </div>
            </div>
        </div>
            <div className="mt-6 md:mt-14">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl md:text-3xl text-gray-600">3500+ Private Bus Operators</h2>
                    <button className="text-black font-medium py-2 text-sm md:text-base  px-6 rounded-2xl border border-gray-500 hover:shadow-lg hover:shadow-gray-400/50">View All</button>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 md:flex text-center md:text-left justify-between gap-6 text-sm md:text-base mt-8">
                    <div className="flex flex-col gap-2 md:gap-4 items-center md:items-start [&>*]:px-1 md:[&>*]:px-2 [&>*]:py-1 md:[&>*]:py-3 [&>*]:rounded-full">
                        <a className="hover:bg-gray-100" href="">SRS Travels</a>
                        <a className="hover:bg-gray-100" href="">Parveen Travels</a>
                        <a className="hover:bg-gray-100" href="">SRM Travels</a>
                        <a className="hover:bg-gray-100" href="">Eagle Travels</a>
                        <a className="hover:bg-gray-100" href="">Mahasagar Travels</a>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-4 items-center md:items-start [&>*]:px-1 md:[&>*]:px-2 [&>*]:py-1 md:[&>*]:py-3 [&>*]:rounded-full">
                        <a className="hover:bg-gray-100" href="">SRS Travels</a>
                        <a className="hover:bg-gray-100" href="">Parveen Travels</a>
                        <a className="hover:bg-gray-100" href="">SRM Travels</a>
                        <a className="hover:bg-gray-100" href="">Eagle Travels</a>
                        <a className="hover:bg-gray-100" href="">Mahasagar Travels</a>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-4 items-center md:items-start [&>*]:px-1 md:[&>*]:px-2 [&>*]:py-1 md:[&>*]:py-3 [&>*]:rounded-full">
                        <a className="hover:bg-gray-100" href="">SRS Travels</a>
                        <a className="hover:bg-gray-100" href="">Parveen Travels</a>
                        <a className="hover:bg-gray-100" href="">SRM Travels</a>
                        <a className="hover:bg-gray-100" href="">Eagle Travels</a>
                        <a className="hover:bg-gray-100" href="">Mahasagar Travels</a>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-4 items-center md:items-start [&>*]:px-1 md:[&>*]:px-2 [&>*]:py-1 md:[&>*]:py-3 [&>*]:rounded-full">
                        <a className="hover:bg-gray-100" href="">SRS Travels</a>
                        <a className="hover:bg-gray-100" href="">Parveen Travels</a>
                        <a className="hover:bg-gray-100" href="">SRM Travels</a>
                        <a className="hover:bg-gray-100" href="">Eagle Travels</a>
                        <a className="hover:bg-gray-100" href="">Mahasagar Travels</a>
                    </div>
               
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Patners
