import React, { useState } from 'react';
import { Bed, Star, GlassWater, Moon, PlugZap, Sun, Sunrise, Sunset, Toilet, Truck, ChevronDown, ChevronUp } from 'lucide-react';

const BusTicketsSideBar = ({ filters, onFilterChange }) => {
    const [expandedSections, setExpandedSections] = useState({
        departureTime: true,
        busTypes: true,
        seatAvailability: true,
        arrivalTime: true,
        boardingPoint: true,
        droppingPoint: true,
        operator: true,
        amenities: true
    });

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const SectionHeader = ({ title, section }) => (
        <div 
            className="flex justify-between items-center pt-4 pb-2.5 ml-4 cursor-pointer"
            onClick={() => toggleSection(section)}
        >
            <p className="font-bold text-xs">{title}</p>
            {expandedSections[section] ? 
                <ChevronUp className="h-4 w-4 text-gray-500 mr-4" /> : 
                <ChevronDown className="h-4 w-4 text-gray-500 mr-4" />
            }
        </div>
    );

    return (
        <div className="w-full md:w-64 lg:w-72 bg-white">
            <div className="sticky top-0 mb-40 px-2 sm:px-0 max-h-screen overflow-y-auto">
                <p className="pt-4 pb-4 ml-2 sm:ml-4 font-bold text-xs border-b border-gray-200">FILTERS</p>
                
                <div className="space-y-4">
                    <div 
                        className="flex gap-1.5 items-center text-xs pb-2 pt-2 ml-2 sm:ml-4 border-b border-gray-200 cursor-pointer"
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
                    
                    <div className="border-b border-gray-200">
                        <SectionHeader title="DEPARTURE TIME" section="departureTime" />
                        {expandedSections.departureTime && (
                            <div className="px-2 pb-4">
                                <div className="space-y-2">
                                    {[
                                        { id: 'before6am', icon: Sunrise, label: 'Before 6 am', count: 24 },
                                        { id: '6amTo12pm', icon: Sun, label: '6 am to 12 pm', count: 16 },
                                        { id: '12pmTo6pm', icon: Sunset, label: '12 pm to 6 pm', count: 7 },
                                        { id: 'after6pm', icon: Moon, label: 'After 6 pm', count: 11 }
                                    ].map(time => (
                                        <label key={time.id} className="flex items-center space-x-1 p-2 rounded hover:bg-gray-100 cursor-pointer">
                                            <input 
                                                type="checkbox"
                                                checked={filters.departureTime.includes(time.id)}
                                                onChange={() => onFilterChange('departureTime', time.id)}
                                                className="h-4 w-4 rounded border-gray-200 text-blue-600 focus:ring-blue-500"
                                            />
                                            <time.icon className="h-4 text-gray-400" />
                                            <span className="text-xs text-gray-700 font-light">{time.label}</span>
                                            <span className="text-xs text-gray-500">({time.count})</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="border-b border-gray-200">
                        <SectionHeader title="BUS TYPES" section="busTypes" />
                        {expandedSections.busTypes && (
                            <div className="px-2 pb-4">
                                {[
                                    { id: 'SEATER', label: 'SEATER', count: 54 },
                                    { id: 'SLEEPER', label: 'SLEEPER', count: 23 },
                                    { id: 'AC', label: 'AC', count: 58 }
                                ].map(type => (
                                    <label key={type.id} className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 cursor-pointer">
                                        <input 
                                            type="checkbox"
                                            checked={filters.busTypes.includes(type.id)}
                                            onChange={() => onFilterChange('busTypes', type.id)}
                                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-xs font-light text-gray-700">{type.label} ({type.count})</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Similar pattern for other sections... */}
                    
                    <div className="border-b border-gray-200">
                        <SectionHeader title="AMENITIES" section="amenities" />
                        {expandedSections.amenities && (
                            <div className="flex flex-wrap gap-2 pl-4 pb-4">
                                {[
                                    { id: 'water', icon: GlassWater, label: 'Water Bottle', count: 54 },
                                    { id: 'charging', icon: PlugZap, label: 'Charging Point', count: 52 },
                                    { id: 'toilet', icon: Toilet, label: 'Toilet', count: 9 },
                                    { id: 'bedsheet', icon: Bed, label: 'Bed Sheet', count: 5 }
                                ].map(amenity => (
                                    <div 
                                        key={amenity.id}
                                        className={`flex gap-.5 items-center border px-1.5 py-1 font-extralight rounded-sm cursor-pointer ${
                                            filters.amenities.includes(amenity.id) 
                                            ? 'border-blue-600 text-blue-600' 
                                            : 'border-gray-300'
                                        }`}
                                        onClick={() => onFilterChange('amenities', amenity.id)}
                                    >
                                        <amenity.icon className={`h-4 ${filters.amenities.includes(amenity.id) ? 'text-blue-600' : 'text-gray-500'}`}/>
                                        <p className="text-xs">{amenity.label} ({amenity.count})</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusTicketsSideBar;