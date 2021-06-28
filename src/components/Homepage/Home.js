import React from 'react'
import HeaderSection from '../HeaderSection'
import { headerObjOne } from './Data'

function Home() {
    return (
        <div>
            <HeaderSection {...headerObjOne}/>
        </div>
    )
}

export default Home
