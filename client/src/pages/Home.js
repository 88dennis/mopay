import React, {useState} from 'react'
import NavBar from '../components/Navbar/NavBar';
import Sidebar from '../components/Sidebar/Sidebar';
import HeroSection from '../components/HeroSection/HeroSection';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Sidebar isOpen = {isOpen} toggle= {toggle} />
            <NavBar isOpen = {isOpen} toggle={toggle}/>
            <HeroSection />

        </div>
    )
}

export default Home
