import React, { useEffect, useState } from 'react';
import BusTicketsSideBar from '../components/BusTicketsSideBar';
import BusTicketsTopBar from '../components/BusTicketsTopBar';
import BusTicketDetailsCard from '../components/BusTicketDetailsCard';
import axios from "axios"
import LoadingScreen from '../components/LoadingScreen';

const BusTickets = ({origin, destination}) => {
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [filters, setFilters] = useState({
        departureTime: [],
        arrivalTime: [],
        busTypes: [],
        singleSeats: false,
        boardingPoint: '',
        droppingPoint: '',
        operator: '',
        amenities: [],
        liveTracking: false,
        primoBus: false
    });
    const [loading, setLoading] = useState(false);
    const [buses, setBuses] = useState([]); // Store original bus data
    const [sortedBuses, setSortedBuses] = useState([]); // Store sorted/filtered results

    const getBusArray = async (origin, destination) => {
        setLoading(true);
        try {
            const response = await axios.get(`https://rebus-clone-backend.onrender.com/getRoutes`, {
                params: {
                    "origin": origin,
                    "destination": destination
                }
            });
            setBuses(response.data.routes);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    // Effect to handle initial data fetch
    useEffect(() => {
        getBusArray(origin, destination);
    }, [origin, destination]);

    // Effect to handle sorting and filtering
    useEffect(() => {
        if (buses.length) {
            const filteredBuses = filterBuses(buses);
            const sorted = sortBuses(filteredBuses, sortKey, sortOrder);
            setSortedBuses(sorted);
        }
    }, [buses, sortKey, sortOrder, filters]); // Add all dependencies that should trigger a resort

    const convertTimeToMinutes = (timeStr) => {
        const [hours, minutes] = timeStr.split(':').map(Number);
        return hours * 60 + minutes;
    };

    const convertDurationToMinutes = (durationStr) => {
        const [hours, minutes] = durationStr.match(/(\d+)h\s*(\d+)m/).slice(1).map(Number);
        return hours * 60 + minutes;
    };

    const sortBuses = (buses, key, order) => {
        if (!key) return buses;

        return [...buses].sort((a, b) => {
            let valueA, valueB;

            switch (key) {
                case 'departure':
                    valueA = convertTimeToMinutes(a.departureTime);
                    valueB = convertTimeToMinutes(b.departureTime);
                    break;
                case 'duration':
                    valueA = convertDurationToMinutes(a.durationTime);
                    valueB = convertDurationToMinutes(b.durationTime);
                    break;
                case 'arrival':
                    valueA = convertTimeToMinutes(a.arrivalTime);
                    valueB = convertTimeToMinutes(b.arrivalTime);
                    break;
                case 'rating':
                    valueA = parseFloat(a.rating);
                    valueB = parseFloat(b.rating);
                    break;
                case 'fare':
                    valueA = parseInt(a.fare);
                    valueB = parseInt(b.fare);
                    break;
                case 'seats':
                    valueA = parseInt(a.seatsAvailable);
                    valueB = parseInt(b.seatsAvailable);
                    break;
                default:
                    valueA = a[key];
                    valueB = b[key];
            }

            if (order === 'asc') {
                return valueA > valueB ? 1 : -1;
            } else {
                return valueA < valueB ? 1 : -1;
            }
        });
    };

    const filterBuses = (buses) => {
        return buses.filter(bus => {
            const departureMinutes = convertTimeToMinutes(bus.departureTime);
            if (filters.departureTime.length > 0) {
                const matchesDeparture = filters.departureTime.some(timeRange => {
                    switch(timeRange) {
                        case 'before6am':
                            return departureMinutes < 360;
                        case '6amTo12pm':
                            return departureMinutes >= 360 && departureMinutes < 720;
                        case '12pmTo6pm':
                            return departureMinutes >= 720 && departureMinutes < 1080;
                        case 'after6pm':
                            return departureMinutes >= 1080;
                        default:
                            return true;
                    }
                });
                if (!matchesDeparture) return false;
            }
            
            if (filters.arrivalTime.length > 0) {
                const arrivalMinutes = convertTimeToMinutes(bus.arrivalTime);
                const matchesArrival = filters.arrivalTime.some(timeRange => {
                    switch(timeRange) {
                        case 'before6am':
                            return arrivalMinutes < 360;
                        case '6amTo12pm':
                            return arrivalMinutes >= 360 && arrivalMinutes < 720;
                        case '12pmTo6pm':
                            return arrivalMinutes >= 720 && arrivalMinutes < 1080;
                        case 'after6pm':
                            return arrivalMinutes >= 1080;
                        default:
                            return true;
                    }
                });
                if (!matchesArrival) return false;
            }

            if (filters.busTypes.length > 0 && !filters.busTypes.includes(bus.busType)) {
                return false;
            }
            if (filters.singleSeats && !bus.singleSeats) {
                return false;
            }
            if (filters.boardingPoint && !bus.pickUpPoint.toLowerCase().includes(filters.boardingPoint.toLowerCase())) {
                return false;
            }
            if (filters.droppingPoint && !bus.destination.toLowerCase().includes(filters.droppingPoint.toLowerCase())) {
                return false;
            }
            if (filters.operator && !bus.companyName.toLowerCase().includes(filters.operator.toLowerCase())) {
                return false;
            }

            return true;
        });
    };

    const handleFilterChange = (filterType, value) => {
        setFilters(prevFilters => {
            const newFilters = { ...prevFilters };
            
            switch(filterType) {
                case 'departureTime':
                case 'arrivalTime':
                case 'busTypes':
                case 'amenities':
                    if (newFilters[filterType].includes(value)) {
                        newFilters[filterType] = newFilters[filterType].filter(item => item !== value);
                    } else {
                        newFilters[filterType] = [...newFilters[filterType], value];
                    }
                    break;
                    
                case 'singleSeats':
                case 'liveTracking':
                case 'primoBus':
                    newFilters[filterType] = !newFilters[filterType];
                    break;
                    
                case 'boardingPoint':
                case 'droppingPoint':
                case 'operator':
                    newFilters[filterType] = value;
                    break;
                    
                default:
                    break;
            }
            
            return newFilters;
        });
    };

    const handleSort = (key) => {
        if (sortKey === key) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortKey(key);
            setSortOrder('asc');
        }
    };

    const getSortIcon = (key) => {
        if (sortKey !== key) return;
        return sortOrder === 'asc' ? '↑' : '↓';
    };

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <div className="mb-40">
            <div>
                <BusTicketsTopBar origin={origin} destination={destination}/>
            </div>
            <div className="grid grid-cols-11 w-screen">
                <div className="col-span-2">
                    <BusTicketsSideBar 
                        filters={filters}
                        onFilterChange={handleFilterChange}
                    />
                </div>
                <div className="col-span-9">
                    <div className="grid-cols-10 grid pl-7 pt-7 pr-1 test-xs font-extralight text-gray-500 items-center">
                        <div className="col-span-3 flex justify-between pl-2 pr-4 text-xs items-center">
                            <p>
                                <span className="font-bold text-black text-sm">
                                    {sortedBuses.length} Buses
                                </span>{" "}
                                found
                            </p>
                            <p className="font-bold text-black text-xs">SORT BY:</p>
                        </div>
                        <div 
                            className="col-span-1 text-sm cursor-pointer hover:text-black"
                            onClick={() => handleSort('departure')}
                        >
                            <p>Departure {getSortIcon('departure')}</p>
                        </div>
                        <div 
                            className="col-span-1 text-sm cursor-pointer hover:text-black"
                            onClick={() => handleSort('duration')}
                        >
                            <p>Duration {getSortIcon('duration')}</p>
                        </div>
                        <div 
                            className="col-span-1 text-sm cursor-pointer hover:text-black"
                            onClick={() => handleSort('arrival')}
                        >
                            <p>Arrival {getSortIcon('arrival')}</p>
                        </div>
                        <div 
                            className="col-span-1 text-sm cursor-pointer hover:text-black"
                            onClick={() => handleSort('rating')}
                        >
                            <p>Ratings {getSortIcon('rating')}</p>
                        </div>
                        <div 
                            className="col-span-1 text-sm cursor-pointer hover:text-black"
                            onClick={() => handleSort('fare')}
                        >
                            <p>Fare {getSortIcon('fare')}</p>
                        </div>
                        <div 
                            className="col-span-2 text-sm cursor-pointer hover:text-black"
                            onClick={() => handleSort('seats')}
                        >
                            <p>Seats Available {getSortIcon('seats')}</p>
                        </div>
                    </div>
                    {sortedBuses.map((item, index) => (
                        <div className="pl-7 pt-7 pr-1" key={index}>
                            <BusTicketDetailsCard
                                companyName={item.companyName}
                                busName={item.busName}
                                departureTime={item.departureTime}
                                durationTime={item.durationTime}
                                destination={item.destination}
                                arrivalTime={item.arrivalTime}
                                pickUpPoint={item.pickUpPoint}
                                rating={item.rating}
                                fare={item.fare}
                                seatsAvailable={item.seatsAvailable}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BusTickets;