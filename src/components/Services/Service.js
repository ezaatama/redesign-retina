import React from 'react'
import ServiceSection from '../ServicesSection'
import { serviceObjOne, serviceObjTwo, serviceObjThree, serviceObjFour } from './Data'

function Service() {
    return (
        <>
            <div>
                <ServiceSection {...serviceObjOne} />
                <ServiceSection {...serviceObjTwo} />
                <ServiceSection {...serviceObjThree} />
                <ServiceSection {...serviceObjFour} />
            </div>
        </>
    )
}

export default Service
