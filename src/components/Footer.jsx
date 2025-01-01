import React from 'react'
import RedBusLogo  from '../assets/redbus-logo.svg'

const Footer = () => {
  return (
    <footer className="flex flex-col bg-gray-100 py-16 items-center">
        <div className="flex flex-col-reverse md:text-base text-sm md:flex-col w-full px-6 md:px-0 md:w-[80%] max-w-[1300px]">
            <div className="flex justify-between flex-col md:flex-row gap-6">
                <ul className="flex flex-col gap-2">
                    <li className="text-xl font-bold">Top RTCs</li>
                    <li><a href="">APSRTC</a></li>
                    <li><a href="">GSRTC</a></li>
                    <li><a href="">MSRTC</a></li>
                    <li><a href="">TNSTC</a></li>
                    <li><a href="">View All</a></li>
                </ul>



                <ul className="flex flex-col gap-2">
                    <li className="text-xl font-bold">Others</li>
                    <li><a href="">TSRTC</a></li>
                    <li><a href="">SBSTC</a></li>
                    <li><a href="">RSRTC</a></li>
                    <li><a href="">Kerala RTC</a></li>
                    <li><a href="">View All</a></li>
                </ul>


                <ul className="flex flex-col gap-2">
                    <li className="text-xl font-bold">Top bus routes</li>
                    <li><a href="">Hyderabad to Bangalore Bus</a></li>
                    <li><a href="">Bangalore to Chennai Bus</a></li>
                    <li><a href="">Pune to Bangalore Bus</a></li>
                    <li><a href="">Mumbai to Bangalore Bus</a></li>
                    <li><a href="">View All</a></li>
                </ul>


                <ul className="flex flex-col gap-2">
                    <li className="text-xl font-bold">Top cities</li>
                    <li><a href="">Hyderabad Bus Tickets</a></li>
                    <li><a href="">Bangalore Bus Tickets</a></li>
                    <li><a href="">Chennai Bus Tickets</a></li>
                    <li><a href="">Pune Bus Tickets</a></li>
                    <li><a href="">View All</a></li>
                </ul>


                <ul className="flex flex-col gap-2">
                    <li className="text-xl font-bold">redRail</li>
                    <li><a href="">Book Train Tickets</a></li>
                    <li><a href="">PNR Status</a></li>
                    <li><a href="">Live Train Status</a></li>
                    <li><a href="">Train Seat Availability</a></li>
                    <li><a href="">Trains between Stations</a></li>
                </ul>


            </div>

            <hr className="my-8"/>
            <div className="flex justify-between flex-col md:flex-row gap-6">

                <div className="flex flex-col gap-2 md:w-[25%]">
                    <div>
                        <img className="w-28" src={RedBusLogo} alt=""/>
                    </div>
                    <p>redBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. redBus offers bus ticket booking through its website, iOS and Android mobile apps for all major routes.</p>
                </div>


                <ul className="flex flex-col gap-2">
                    <li className="text-xl font-bold">About redBus</li>
                    <li><a href="">About us</a></li>
                    <li><a href="">Investor Relations</a></li>
                    <li><a href="">Contact us</a></li>
                    <li><a href="">Mobile version</a></li>
                    <li><a href="">redBus on mobile</a></li>
                    <li><a href="">Sitemap</a></li>
                    <li><a href="">Offers</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Values</a></li>
                </ul>



                <ul className="flex flex-col gap-2">
                    <li className="text-xl font-bold">Info</li>
                    <li><a href="">T&C</a></li>
                    <li><a href="">Privacy policy</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Bus operator registration</a></li>
                    <li><a href="">Agent registration</a></li>
                    <li><a href="">Insurance partner</a></li>
                    <li><a href="">User agreement</a></li>
                </ul>


                <ul className="flex flex-col gap-2">
                    <li className="text-xl font-bold">Global Sites</li>
                    <li><a href="">India</a></li>
                    <li><a href="">Singapore</a></li>
                    <li><a href="">Malaysia</a></li>
                    <li><a href="">Indonesia</a></li>
                    <li><a href="">Peru</a></li>
                    <li><a href="">Colombia</a></li>
                </ul>


                <ul className="flex flex-col gap-2">
                    <li className="text-xl font-bold">Our Partners</li>
                    <li><a href="">Goibibo Bus</a></li>
                    <li><a href="">Goibibo Hotels</a></li>
                    <li><a href="">Makemytrip Bus</a></li>
                    <li><a href="">Makemytrip Hotels</a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
