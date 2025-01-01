import React, { useEffect, useState } from 'react';
import BusTicketsSideBar from '../components/BusTicketsSideBar';
import BusTicketsTopBar from '../components/BusTicketsTopBar';
import BusTicketDetailsCard from '../components/BusTicketDetailsCard';
import axios from "axios"
import LoadingScreen from '../components/LoadingScreen';

const BusTickets = ({origin,destination}) => {
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    console.log(origin,destination)
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
    const [loading,setLoading] = useState(false)
    const [sortedBuses,setSortedBuses] = useState([])

    const getBusArray = async (origin,destination)=>{
        setLoading(true)
        try {
            const response = await axios.get(`http://localhost:3000/getRoutes`,{
                params:{
                    "origin" : origin,
                    "destination" : destination
                }
            })
            const array = response.data.routes
            const filteredBuses = filterBuses(array);
            const sortedBuses = sortBuses(filteredBuses, sortKey, sortOrder);
            setSortedBuses(sortedBuses)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        getBusArray(origin,destination)
    },[])

    // let busArrays = [
    //     {
    //         companyName: "Laxmi Holidays",
    //         busName: "Volvo 9600 A/C Semi Sleeper (2+2)",
    //         departureTime: "03:30",
    //         durationTime: "00h 50m",
    //         destination: "Sonipat",
    //         arrivalTime: "04:20",
    //         pickUpPoint: "ISBT Kashmiri Gate",
    //         rating: "4.5",
    //         fare: "500",
    //         seatsAvailable: "4",
    //         busType: "SLEEPER",
    //         singleSeats: true
    //     },
    //     {
    //         companyName: "Hans Travels",
    //         busName: "Scania A/C Sleeper (2+1)",
    //         departureTime: "21:00",
    //         durationTime: "08h 30m",
    //         destination: "Jaipur",
    //         arrivalTime: "05:30",
    //         pickUpPoint: "Majnu Ka Tila",
    //         rating: "4.7",
    //         fare: "1200",
    //         seatsAvailable: "8",
    //         busType: "SLEEPER",
    //         singleSeats: false
    //     },
    //     {
    //         companyName: "Orange Tours",
    //         busName: "Non A/C Seater (3+2)",
    //         departureTime: "06:00",
    //         durationTime: "04h 00m",
    //         destination: "Chandigarh",
    //         arrivalTime: "10:00",
    //         pickUpPoint: "Anand Vihar",
    //         rating: "3.8",
    //         fare: "400",
    //         seatsAvailable: "15",
    //         busType: "SEATER",
    //         singleSeats: false
    //     },
    //     {
    //         companyName: "Sharma Transport",
    //         busName: "A/C Volvo Multi-Axle (2+2)",
    //         departureTime: "22:30",
    //         durationTime: "12h 00m",
    //         destination: "Manali",
    //         arrivalTime: "10:30",
    //         pickUpPoint: "R.K. Ashram",
    //         rating: "4.6",
    //         fare: "1800",
    //         seatsAvailable: "6",
    //         busType: "AC",
    //         singleSeats: true
    //     },
    //     {
    //         companyName: "Royal Cruiser",
    //         busName: "Mercedes A/C Sleeper (2+1)",
    //         departureTime: "23:00",
    //         durationTime: "06h 00m",
    //         destination: "Agra",
    //         arrivalTime: "05:00",
    //         pickUpPoint: "Sarai Kale Khan",
    //         rating: "4.4",
    //         fare: "900",
    //         seatsAvailable: "10",
    //         busType: "SLEEPER",
    //         singleSeats: false
    //     },
    //     {
    //         companyName: "Punjab Roadways",
    //         busName: "Non A/C Seater Express",
    //         departureTime: "07:30",
    //         durationTime: "05h 30m",
    //         destination: "Amritsar",
    //         arrivalTime: "13:00",
    //         pickUpPoint: "ISBT Kashmiri Gate",
    //         rating: "3.9",
    //         fare: "550",
    //         seatsAvailable: "20",
    //         busType: "SEATER",
    //         singleSeats: false
    //     },
    //     {
    //         companyName: "Rajasthan Tourism",
    //         busName: "Volvo A/C Multi-Axle (2+2)",
    //         departureTime: "20:00",
    //         durationTime: "10h 00m",
    //         destination: "Udaipur",
    //         arrivalTime: "06:00",
    //         pickUpPoint: "Dhaula Kuan",
    //         rating: "4.8",
    //         fare: "1500",
    //         seatsAvailable: "12",
    //         busType: "AC",
    //         singleSeats: true
    //     },
    //     {
    //         companyName: "Gujarat Travels",
    //         busName: "A/C Sleeper Premium",
    //         departureTime: "16:00",
    //         durationTime: "18h 00m",
    //         destination: "Ahmedabad",
    //         arrivalTime: "10:00",
    //         pickUpPoint: "Nehru Place",
    //         rating: "4.3",
    //         fare: "2200",
    //         seatsAvailable: "8",
    //         busType: "SLEEPER",
    //         singleSeats: false
    //     },
    //     {
    //         companyName: "Himalayan Express",
    //         busName: "Semi-Sleeper A/C (2+2)",
    //         departureTime: "19:30",
    //         durationTime: "09h 30m",
    //         destination: "Dehradun",
    //         arrivalTime: "05:00",
    //         pickUpPoint: "ISBT Anand Vihar",
    //         rating: "4.2",
    //         fare: "1100",
    //         seatsAvailable: "15",
    //         busType: "AC",
    //         singleSeats: true
    //     },
    //     {
    //         companyName: "Madhya Pradesh Tours",
    //         busName: "Non A/C Sleeper",
    //         departureTime: "18:00",
    //         durationTime: "14h 00m",
    //         destination: "Bhopal",
    //         arrivalTime: "08:00",
    //         pickUpPoint: "Sarai Kale Khan",
    //         rating: "3.7",
    //         fare: "800",
    //         seatsAvailable: "18",
    //         busType: "SLEEPER",
    //         singleSeats: false
    //     },
    //     {
    //         companyName: "Bihar Express",
    //         busName: "A/C Volvo Seater",
    //         departureTime: "15:30",
    //         durationTime: "15h 00m",
    //         destination: "Patna",
    //         arrivalTime: "06:30",
    //         pickUpPoint: "ISBT Kashmiri Gate",
    //         rating: "4.0",
    //         fare: "1600",
    //         seatsAvailable: "25",
    //         busType: "SEATER",
    //         singleSeats: true
    //     },
    //     {
    //         companyName: "Bengal Transport",
    //         busName: "A/C Sleeper Deluxe",
    //         departureTime: "14:00",
    //         durationTime: "20h 00m",
    //         destination: "Kolkata",
    //         arrivalTime: "10:00",
    //         pickUpPoint: "Anand Vihar",
    //         rating: "4.4",
    //         fare: "2500",
    //         seatsAvailable: "6",
    //         busType: "SLEEPER",
    //         singleSeats: false
    //     },
    //     {
    //         companyName: "South Express",
    //         busName: "Volvo Multi-Axle A/C",
    //         departureTime: "12:00",
    //         durationTime: "24h 00m",
    //         destination: "Bangalore",
    //         arrivalTime: "12:00",
    //         pickUpPoint: "Sarai Kale Khan",
    //         rating: "4.6",
    //         fare: "3000",
    //         seatsAvailable: "10",
    //         busType: "AC",
    //         singleSeats: true
    //     },
    //     {
    //         companyName: "Kerala Lines",
    //         busName: "A/C Sleeper Premium",
    //         departureTime: "10:00",
    //         durationTime: "36h 00m",
    //         destination: "Kochi",
    //         arrivalTime: "22:00",
    //         pickUpPoint: "ISBT Kashmiri Gate",
    //         rating: "4.5",
    //         fare: "3500",
    //         seatsAvailable: "8",
    //         busType: "SLEEPER",
    //         singleSeats: false
    //     },
    //     {
    //         companyName: "Chennai Express",
    //         busName: "A/C Seater Deluxe",
    //         departureTime: "09:00",
    //         durationTime: "30h 00m",
    //         destination: "Chennai",
    //         arrivalTime: "15:00",
    //         pickUpPoint: "Anand Vihar",
    //         rating: "4.3",
    //         fare: "2800",
    //         seatsAvailable: "20",
    //         busType: "SEATER",
    //         singleSeats: true
    //     },
    //     {
    //         companyName: "Hyderabad Links",
    //         busName: "A/C Multi-Axle Sleeper",
    //         departureTime: "11:30",
    //         durationTime: "26h 00m",
    //         destination: "Hyderabad",
    //         arrivalTime: "13:30",
    //         pickUpPoint: "Sarai Kale Khan",
    //         rating: "4.7",
    //         fare: "2600",
    //         seatsAvailable: "12",
    //         busType: "SLEEPER",
    //         singleSeats: false
    //     },
    //     {
    //         companyName: "Goa Travels",
    //         busName: "Luxury A/C Sleeper",
    //         departureTime: "13:30",
    //         durationTime: "28h 00m",
    //         destination: "Panaji",
    //         arrivalTime: "17:30",
    //         pickUpPoint: "ISBT Kashmiri Gate",
    //         rating: "4.8",
    //         fare: "3200",
    //         seatsAvailable: "5",
    //         busType: "AC",
    //         singleSeats: true
    //     },
    //     {
    //         companyName: "Mumbai Express",
    //         busName: "Premium A/C Sleeper",
    //         departureTime: "17:30",
    //         durationTime: "22h 00m",
    //         destination: "Mumbai",
    //         arrivalTime: "15:30",
    //         pickUpPoint: "Anand Vihar",
    //         rating: "4.6",
    //         fare: "2400",
    //         seatsAvailable: "7",
    //         busType: "SLEEPER",
    //         singleSeats: false
    //     },
    //     {
    //         companyName: "Pune Travels",
    //         busName: "Volvo A/C Seater",
    //         departureTime: "16:30",
    //         durationTime: "20h 00m",
    //         destination: "Pune",
    //         arrivalTime: "12:30",
    //         pickUpPoint: "Sarai Kale Khan",
    //         rating: "4.4",
    //         fare: "2000",
    //         seatsAvailable: "16",
    //         busType: "SEATER",
    //         singleSeats: true
    //     },
    //     {
    //         companyName: "Nagpur Connect",
    //         busName: "A/C Semi Sleeper",
    //         departureTime: "08:30",
    //         durationTime: "16h 00m",
    //         destination: "Nagpur",
    //         arrivalTime: "00:30",
    //         pickUpPoint: "ISBT Kashmiri Gate",
    //         rating: "4.1",
    //         fare: "1800",
    //         seatsAvailable: "14",
    //         busType: "AC",
    //         singleSeats: true
    //     }
    // ];

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

    const convertTimeToMinutes = (timeStr) => {
        const [hours, minutes] = timeStr.split(':').map(Number);
        return hours * 60 + minutes;
    };

    const convertDurationToMinutes = (durationStr) => {
        const [hours, minutes] = durationStr.match(/(\d+)h\s*(\d+)m/).slice(1).map(Number);
        return hours * 60 + minutes;
    };

    const handleSort = (key) => {
        if (sortKey === key) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortKey(key);
            setSortOrder('asc');
        }
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

    const getSortIcon = (key) => {
        if (sortKey !== key) return;
        return sortOrder === 'asc' ? '↑' : '↓';
    };
    if(loading===true){
        return <LoadingScreen/>
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


