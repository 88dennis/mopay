import React, {useState} from 'react'
import NavBar from '../components/Navbar/NavBar';
import Sidebar from '../components/Sidebar/Sidebar';
import HeroSection from '../components/HeroSection/HeroSection';
import InfoSection from '../components/InfoSection/InfoSection';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';


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
            <Services  />
            <InfoSection {...homeObjThree} />
          
            <Footer  />

        </div>
    )
}

export default Home
