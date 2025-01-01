import React from 'react';
import { Bed, Star, GlassWater, Moon, PlugZap, Sun, Sunrise, Sunset, Toilet, Truck } from 'lucide-react';

const BusTicketsSideBar = ({ filters, onFilterChange }) => {
    return (
        <div className="mb-40">
            <p className="pt-4 pb-4 ml-4 font-bold text-xs border-b border-gray-200">FILTERS</p>
            
            <div 
                className="flex gap-1.5 items-center text-xs pb-2 pt-2 ml-4 border-b border-gray-200 cursor-pointer"
                onClick={() => onFilterChange('liveTracking')}
            >
                <Truck className={`h-3.5 ${filters.liveTracking ? 'fill-blue-600' : 'fill-black'}`}/>
                <p className={`font-light ${filters.liveTracking ? 'text-blue-600' : ''}`}>Live Tracking (44)</p>
            </div>
            
            <div 
                className="flex gap-1.5 items-center text-xs pb-2 pt-2 ml-4 border-b border-gray-200 cursor-pointer"
                onClick={() => onFilterChange('primoBus')}
            >
                <Star className={`h-3.5 ${filters.primoBus ? 'text-blue-600' : 'text-gray-400'}`}/>
                <p className={`font-light ${filters.primoBus ? 'text-blue-600' : ''}`}>Primo Bus (3)</p>
            </div>
            
            <p className="pt-4 pb-2.5 ml-4 font-bold text-xs">DEPARTURE TIME</p>
            <div className="px-2">
                <div className="space-y-2">
                    <label className="flex items-center space-x-1 p-2 rounded hover:bg-gray-100 cursor-pointer">
                        <input 
                            type="checkbox"
                            checked={filters.departureTime.includes('before6am')}
                            onChange={() => onFilterChange('departureTime', 'before6am')}
                            className="h-4 w-4 rounded border-gray-200 text-blue-600 focus:ring-blue-500"
                        />
                        <Sunrise className="h-4 text-gray-400" />
                        <span className="text-xs text-gray-700 font-light">Before 6 am</span>
                        <span className="text-xs text-gray-500">(24)</span>
                    </label>

                    <label className="flex items-center space-x-1 p-2 rounded hover:bg-gray-100 cursor-pointer">
                        <input 
                            type="checkbox"
                            checked={filters.departureTime.includes('6amTo12pm')}
                            onChange={() => onFilterChange('departureTime', '6amTo12pm')}
                            className="h-4 w-4 rounded border-gray-200 text-blue-600 focus:ring-blue-500"
                        />
                        <Sun className="h-4 text-gray-400" />
                        <span className="text-xs text-gray-700 font-light">6 am to 12 pm</span>
                        <span className="text-xs text-gray-500">(16)</span>
                    </label>

                    <label className="flex items-center space-x-1 p-2 rounded hover:bg-gray-100 cursor-pointer">
                        <input 
                            type="checkbox"
                            checked={filters.departureTime.includes('12pmTo6pm')}
                            onChange={() => onFilterChange('departureTime', '12pmTo6pm')}
                            className="h-4 w-4 rounded border-gray-200 text-blue-600 focus:ring-blue-500"
                        />
                        <Sunset className="h-4 text-gray-400" />
                        <span className="text-xs text-gray-700 font-light">12 pm to 6 pm</span>
                        <span className="text-xs text-gray-500">(7)</span>
                    </label>

                    <label className="flex items-center space-x-1 p-2 rounded hover:bg-gray-100 cursor-pointer">
                        <input 
                            type="checkbox"
                            checked={filters.departureTime.includes('after6pm')}
                            onChange={() => onFilterChange('departureTime', 'after6pm')}
                            className="h-4 w-4 rounded border-gray-200 text-blue-600 focus:ring-blue-500"
                        />
                        <Moon className="h-4 text-gray-400" />
                        <span className="text-xs text-gray-700 font-light">After 6 pm</span>
                        <span className="text-xs text-gray-500">(11)</span>
                    </label>
                </div>
            </div>
            
            <p className="pt-4 pb-2.5 ml-4 font-bold text-xs">BUS TYPES</p>
            <div className="px-2">
                <label className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 cursor-pointer">
                    <input 
                        type="checkbox"
                        checked={filters.busTypes.includes('SEATER')}
                        onChange={() => onFilterChange('busTypes', 'SEATER')}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-xs font-light text-gray-700">SEATER (54)</span>
                </label>

                <label className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 cursor-pointer">
                    <input 
                        type="checkbox"
                        checked={filters.busTypes.includes('SLEEPER')}
                        onChange={() => onFilterChange('busTypes', 'SLEEPER')}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-xs font-light text-gray-700">SLEEPER (23)</span>
                </label>

                <label className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 cursor-pointer">
                    <input 
                        type="checkbox"
                        checked={filters.busTypes.includes('AC')}
                        onChange={() => onFilterChange('busTypes', 'AC')}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-xs font-light text-gray-700">AC (58)</span>
                </label>
            </div>
            
            <p className="pt-4 pb-2.5 ml-4 font-bold text-xs">SEAT AVAILABILITY</p>
            <div className="px-2">
                <label className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 cursor-pointer">
                    <input 
                        type="checkbox"
                        checked={filters.singleSeats}
                        onChange={() => onFilterChange('singleSeats')}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-xs font-light text-gray-700">Single Seats (15)</span>
                </label>
            </div>
            
            <p className="pt-4 pb-2.5 ml-4 font-bold text-xs">ARRIVAL TIME</p>
            <div className="px-2">
                <div className="space-y-2">
                    <label className="flex items-center space-x-1 p-2 rounded hover:bg-gray-100 cursor-pointer">
                        <input 
                            type="checkbox"
                            checked={filters.arrivalTime.includes('before6am')}
                            onChange={() => onFilterChange('arrivalTime', 'before6am')}
                            className="h-4 w-4 rounded border-gray-200 text-blue-600 focus:ring-blue-500"
                        />
                        <Sunrise className="h-4 text-gray-400" />
                        <span className="text-xs text-gray-700 font-light">Before 6 am</span>
                        <span className="text-xs text-gray-500">(24)</span>
                    </label>

                    <label className="flex items-center space-x-1 p-2 rounded hover:bg-gray-100 cursor-pointer">
                        <input 
                            type="checkbox"
                            checked={filters.arrivalTime.includes('6amTo12pm')}
                            onChange={() => onFilterChange('arrivalTime', '6amTo12pm')}
                            className="h-4 w-4 rounded border-gray-200 text-blue-600 focus:ring-blue-500"
                        />
                        <Sun className="h-4 text-gray-400" />
                        <span className="text-xs text-gray-700 font-light">6 am to 12 pm</span>
                        <span className="text-xs text-gray-500">(16)</span>
                    </label>

                    <label className="flex items-center space-x-1 p-2 rounded hover:bg-gray-100 cursor-pointer">
                        <input 
                            type="checkbox"
                            checked={filters.arrivalTime.includes('12pmTo6pm')}
                            onChange={() => onFilterChange('arrivalTime', '12pmTo6pm')}
                            className="h-4 w-4 rounded border-gray-200 text-blue-600 focus:ring-blue-500"
                        />
                        <Sunset className="h-4 text-gray-400" />
                        <span className="text-xs text-gray-700 font-light">12 pm to 6 pm</span>
                        <span className="text-xs text-gray-500">(7)</span>
                    </label>

                    <label className="flex items-center space-x-1 p-2 rounded hover:bg-gray-100 cursor-pointer">
                        <input 
                            type="checkbox"
                            checked={filters.arrivalTime.includes('after6pm')}
                            onChange={() => onFilterChange('arrivalTime', 'after6pm')}
                            className="h-4 w-4 rounded border-gray-200 text-blue-600 focus:ring-blue-500"
                        />
                        <Moon className="h-4 text-gray-400" />
                        <span className="text-xs text-gray-700 font-light">After 6 pm</span>
                        <span className="text-xs text-gray-500">(11)</span>
                    </label>
                </div>
            </div>
            
            <p className="pt-4 pb-2.5 ml-4 font-bold text-xs">BOARDING POINT</p>
            <div className="pl-4 pr-2">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-3 flex items-center">
                        <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                    <input 
                        type="text" 
                        placeholder="BOARDING POINT"
                        value={filters.boardingPoint}
                        onChange={(e) => onFilterChange('boardingPoint', e.target.value)}
                        className="w-full rounded-md border border-gray-300 py-1 pl-10 pr-2 placeholder-gray-400 focus:border-gray-400 focus:outline-none text-xs"
                    />
                </div>
            </div>
            
            <p className="pt-4 pb-2.5 ml-4 font-bold text-xs">DROPPING POINT</p>
            <div className="pl-4 pr-2">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-3 flex items-center">
                        <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                    <input 
                        type="text" 
                        placeholder="DROPPING POINT"
                        value={filters.droppingPoint}
                        onChange={(e) => onFilterChange('droppingPoint', e.target.value)}
                        className="w-full rounded-md border border-gray-300 py-1 pl-10 pr-2 placeholder-gray-400 focus:border-gray-400 focus:outline-none text-xs"
                    />
                </div>
            </div>
            
            <p className="pt-4 pb-2.5 ml-4 font-bold text-xs">OPERATOR</p>
            <div className="pl-4 pr-2">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-3 flex items-center">
                        <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                    <input 
                        type="text" 
                        placeholder="OPERATOR"
                        value={filters.operator}
                        onChange={(e) => onFilterChange('operator', e.target.value)}
                        className="w-full rounded-md border border-gray-300 py-1 pl-10 pr-2 placeholder-gray-400 focus:border-gray-400 focus:outline-none text-xs"
                    />
                </div>
            </div>
            
            <p className="pt-4 pb-2.5 ml-4 font-bold text-xs">AMENITIES</p>
            <div className="flex flex-col pl-4 gap-2">
                <div 
                    className={`flex gap-.5 items-center border px-1.5 py-1 w-fit font-extralight rounded-sm cursor-pointer ${
                        filters.amenities.includes('water') 
                        ? 'border-blue-600 text-blue-600' 
                        : 'border-gray-300'
                    }`}
                    onClick={() => onFilterChange('amenities', 'water')}
                >
                    <GlassWater className={`h-4 ${filters.amenities.includes('water') ? 'text-blue-600' : 'text-gray-500'}`}/>
                    <p className="text-xs">Water Bottle (54)</p>
                </div>
                <div 
                    className={`flex gap-.5 items-center border px-1.5 py-1 w-fit font-extralight rounded-sm cursor-pointer ${
                        filters.amenities.includes('charging') 
                        ? 'border-blue-600 text-blue-600' 
                        : 'border-gray-300'
                    }`}
                    onClick={() => onFilterChange('amenities', 'charging')}
                >
                    <PlugZap className={`h-4 ${filters.amenities.includes('charging') ? 'text-blue-600' : 'text-gray-500'}`}/>
                    <p className="text-xs">Charging Point (52)</p>
                </div>
                <div 
                    className={`flex gap-.5 items-center border px-1.5 py-1 w-fit font-extralight rounded-sm cursor-pointer ${
                        filters.amenities.includes('toilet') 
                        ? 'border-blue-600 text-blue-600' 
                        : 'border-gray-300'
                    }`}
                    onClick={() => onFilterChange('amenities', 'toilet')}
                >
                    <Toilet className={`h-4 ${filters.amenities.includes('toilet') ? 'text-blue-600' : 'text-gray-500'}`}/>
                    <p className="text-xs">Toilet (9)</p>
                </div>
                <div 
                    className={`flex gap-.5 items-center border px-1.5 py-1 w-fit font-extralight rounded-sm cursor-pointer ${
                        filters.amenities.includes('bedsheet') 
                        ? 'border-blue-600 text-blue-600' 
                        : 'border-gray-300'
                    }`}
                    onClick={() => onFilterChange('amenities', 'bedsheet')}
                >
                    <Bed className={`h-4 ${filters.amenities.includes('bedsheet') ? 'text-blue-600' : 'text-gray-500'}`}/>
                    <p className="text-xs">Bed Sheet (5)</p>
                </div>
            </div>
        </div>
    );
};

export default BusTicketsSideBar;