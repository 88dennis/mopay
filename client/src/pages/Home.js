import React, {useState} from 'react'
import NavBar from '../components/Navbar/NavBar';
import Sidebar from '../components/Sidebar/Sidebar';
import HeroSection from '../components/HeroSection/HeroSection';
import InfoSection from '../components/InfoSection/InfoSection';
import Services from '../components/Services/Services';

import {homeObjOne} from '../components/InfoSection/Data';
import {homeObjTwo} from '../components/InfoSection/Data';
import {homeObjThree} from '../components/InfoSection/Data';






const Home = () => {
console.log(homeObjOne)
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Sidebar isOpen = {isOpen} toggle= {toggle} />
            <NavBar isOpen = {isOpen} toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Services  />
        </div>
    )
}

export default Home
