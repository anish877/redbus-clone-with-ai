import React from 'react'
import OffersFirst from "../assets/OffersFirst.png"
import OffersSecond from "../assets/OffersSecond.png"
import OffersThird from "../assets/OffersThird.png"
import OffersFourth from "../assets/OffersFourth.png"
import OffersFifth from "../assets/OffersFifth.png"
import OffersSixth from "../assets/OffersFifth.png"
import OffersSeventh from "../assets/OffersSeventh.png"
import OffersEight from "../assets/OffersEight.png"
import OffersCard from '../components/OffersCard'
const OffersPage = () => {
    const offersArray = [{
        title: "Save up to Rs 250 on your first bus booking",
        code: "FIRSTRIDE",
        image: OffersFirst
    }, {
        title: "Flat Rs 100 off on AC bus tickets",
        code: "ACBUS",
        image: OffersSecond
    }, {
        title: "Get 15% discount on weekend trips",
        code: "WEEKEND",
        image: OffersThird
    }, {
        title: "Special offer: Rs 150 off on night buses",
        code: "NIGHTBUS",
        image: OffersThird
    }, {
        title: "Student discount: 20% off on bus tickets",
        code: "STUDENT20",
        image: OffersThird
    }, {
        title: "Save Rs 200 on interstate travel",
        code: "INTERSTATE",
        image: OffersFourth
    }, {
        title: "Group booking offer: 25% off for 4+ tickets",
        code: "GROUP25",
        image: OffersFifth
    }, {
        title: "Senior citizen special: Rs 300 off",
        code: "SENIOR",
        image: OffersSixth
    }, {
        title: "Early bird offer: 10% off on advance booking",
        code: "EARLY10",
        image: OffersSeventh
    }, {
        title: "Monsoon special: Flat Rs 175 off",
        code: "MONSOON",
        image: OffersEight
    }, {
        title: "Military personnel: Extra 20% discount",
        code: "MILITARY",
        image: OffersSeventh
    }, {
        title: "Holiday special: Rs 225 off on festive travel",
        code: "HOLIDAY",
        image: OffersSeventh
    }, {
        title: "Ladies special: 15% off on all routes",
        code: "LADIES15",
        image: OffersSecond
    }, {
        title: "Loyalty reward: Rs 350 off for repeat customers",
        code: "LOYAL350",
        image: OffersSeventh
    }, {
        title: "Last minute booking: Instant Rs 125 off",
        code: "INSTANT",
        image: OffersSeventh
    }]
  return (
    <div className='flex flex-col justify-center items-center w-full h-full mb-72'>
      <h1 className='text-2xl text-gray-700 font-bold mt-10 mb-10'>Offers</h1>
      <div className='grid grid-cols-3 justify-center items-center gap-x-3 gap-y-8'>
        {offersArray.map(item=>{
            return  <OffersCard title={item.title} image={item.image} code={item.code} />
        })}
      </div>
    </div>
  )
}

export default OffersPage
