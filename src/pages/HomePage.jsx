import React from 'react'
import Hero from '../components/Hero'
import Offers from '../components/Offers'
import Others from '../components/Others'
import Patners from '../components/Patners'
import Faq from '../components/Faq'
import Global from '../components/Global'

const HomePage = ({originValue,setOriginValue,destinationValue,setDestinationValue}) => {
  return (
    <div>
        <Hero originValue={originValue} setOriginValue={setOriginValue} destinationValue={destinationValue} setDestinationValue={setDestinationValue}/>
        <Offers />
        <Others />
        <Patners />
        <Faq />
        <Global />
    </div>
  )
}

export default HomePage
