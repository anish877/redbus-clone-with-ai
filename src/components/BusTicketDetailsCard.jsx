import React, { useState } from 'react';
import { Star, Truck, Sun, Moon, Sunrise, Sunset, GlassWater, PlugZap, Toilet, Bed, Cctv, Milk, CirclePlus, MapPin, Cookie, Lamp, Ticket, ChevronRight, ChevronLeft, MoveRight } from 'lucide-react';

const BusTicketDetailsCard = ({
  companyName,
  busName,
  departureTime,
  durationTime,
  destination,
  arrivalTime,
  pickUpPoint,
  rating,
  fare,
  seatsAvailable
}) => {
  const [showButtons, setShowButtons] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const handleMouseLeave = () => {
    if (!activeSection) {
      setShowButtons(false);
    }
  };

  const handleSectionClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div 
      className='border border-gray-200 rounded-sm'
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className='grid grid-cols-1 md:grid-cols-10 w-full justify-center gap-4 md:gap-0'>
        <div className='col-span-1 md:col-span-3 flex flex-col px-2 py-4 text-sm gap-y-6'>
          <p className='font-bold'>{companyName}</p>
          <p className='font-light text-gray-500 text-xs'>{busName}</p>
          <div className='flex flex-wrap gap-1 items-center'>
            <Cctv className='h-5 text-gray-500'/>
            <Milk className='h-5 text-gray-500'/>
            <PlugZap className='h-5 text-gray-500'/>
            <div className='flex pl-1 pr-1 items-center gap-1'>
              <CirclePlus className='h-5 text-gray-500'/>
              <p className='text-xs font-light'>2</p>
            </div>
            <div className='flex items-center gap-.5 bg-[#f8f4f4] p-1.5 ml-2 rounded-sm'>
              <MapPin className='h-4 fill-black'/>
              <p className='text-xs font-light'>Live Tracking</p>
            </div>
          </div>
        </div>

        <div className='col-span-1 md:col-span-1 flex flex-col text-sm gap-y-5 py-3 px-2'>
          <p className='text-xl font-bold p-0 m-0'>{departureTime}</p>
          <p className='font-light text-gray-500 text-xs'>{destination}</p>
        </div>

        <div className='col-span-1 md:col-span-1 flex flex-col px-2 py-4 text-sm gap-y-6 text-gray-500 font-light'>
          <p>{durationTime}</p>
        </div>

        <div className='col-span-1 md:col-span-1 flex flex-col text-sm gap-y-5 py-3 px-2'>
          <p className='text-xl font-light p-0 m-0'>{arrivalTime}</p>
          <p className='font-light text-gray-500 text-xs'>{pickUpPoint}</p>
        </div>

        <div className='col-span-1 md:col-span-1 flex flex-col py-4 text-sm gap-y-6 px-2'>
          <div className={`flex items-center w-fit ${rating < 4 ? "bg-yellow-500" : rating < 3 ? "bg-red-500" : "bg-green-500"} p-1 text-white rounded-sm px-0 pr-1.5`}>
            <Star className='h-3 fill-white'/>
            <p className='text-xs'>{rating}</p>
          </div>
        </div>

        <div className='col-span-1 md:col-span-1 flex flex-col py-3 items-start md:items-center font-extralight gap-0 text-left px-2'>
          <p>Starts from<br/>
          INR <span className='font-bold text-lg'>{fare}</span></p>
        </div>

        <div className='col-span-1 md:col-span-2 flex justify-start md:justify-center py-8 text-gray-500 font-light text-sm px-2'>
          <p>{seatsAvailable} Seats available</p>
        </div>
      </div>

      <div className='w-full flex justify-end pt-1'>
        <div>
          <div className='flex flex-wrap'>
            <div className='overflow-hidden transition-[width] duration-300 ease-in-out' style={{ width: showButtons ? 'auto' : '0' }}>
              <div className='whitespace-nowrap'>
                <button 
                  className={`py-1 px-3 font-extralight text-sm pl-5 border-r border-red-600 hover:text-red-600 ${activeSection === 'amenities' ? "font-extrabold underline text-red-600" : ""}`}
                  onClick={() => handleSectionClick('amenities')}
                >
                  Amenities
                </button>
                <button 
                  className={`py-1 px-3 font-extralight text-sm pl-5 border-r border-red-600 hover:text-red-600 ${activeSection === 'boarding' ? "font-extrabold underline text-red-600" : ""}`}
                  onClick={() => handleSectionClick('boarding')}
                >
                  Boarding & Dropping Points
                </button>
                <button 
                  className={`py-1 px-3 font-extralight text-sm pl-5 hover:text-red-600 ${activeSection === 'reviews' ? "font-extrabold underline text-red-600" : ""}`}
                  onClick={() => handleSectionClick('reviews')}
                >
                  Reviews
                </button>
              </div>
            </div>
            <button className='py-1.5 px-3 bg-red-600 text-white text-sm whitespace-nowrap'>VIEW SEATS</button>
          </div>
        </div>
      </div>

      {activeSection === 'amenities' && (
        <div className='bg-[#f8f4f4] p-4 md:p-16'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-sm gap-y-3 justify-center items-center'>
            <div className='flex items-center gap-1 font-light text-gray-500'>
              <Ticket className='h-5'/>
              <p>M-ticket Supported</p>
            </div>
            <div className='flex items-center gap-1 font-light text-gray-500'>
              <Cookie className='h-5'/>
              <p>Snacks</p>
            </div>
            <div className='flex items-center gap-1 font-light text-gray-500'>
              <Cctv className='h-5'/>
              <p>CCTV</p>
            </div>
            <div className='flex items-center gap-1 font-light text-gray-500'>
              <Milk className='h-5'/>
              <p>Water Bottle</p>
            </div>
            <div className='flex items-center gap-1 font-light text-gray-500'>
              <PlugZap className='h-5'/>
              <p>Charging Point</p>
            </div>
            <div className='flex items-center gap-1 font-light text-gray-500'>
              <Lamp className='h-5'/>
              <p>Reading Light</p>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'boarding' && (
        <div className='bg-[#f8f4f4] p-4 md:p-12 flex flex-col md:flex-row justify-evenly pl-5 gap-4 md:gap-0'>
          <div className="flex flex-col justify-center items-center gap-5">
            <h1 className='font-extrabold text-gray-400 text-lg'>BOARDING POINT</h1>
            <div className='flex text-xs gap-3'>
              <p className='font-bold'>{departureTime}</p>
              <p>{destination}</p>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-5'>
            <h1 className='font-extrabold text-gray-400 text-lg'>DROPPING POINT</h1>
            <div className='flex text-xs font-light gap-3'>
              <p className='font-bold'>{arrivalTime}</p>
              <p>{pickUpPoint}</p>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'reviews' && (
        <div className='bg-[#f8f4f4] p-4 md:p-10'>
          <div className='flex justify-center items-center font-extrabold text-sm text-gray-700'>
            <p>The rating displayed is the aggregate rating for this bus operator.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusTicketDetailsCard