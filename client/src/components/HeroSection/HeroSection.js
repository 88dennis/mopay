import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
import {Button} from '../ButtonElement';
const HeroSection = () => {

    const [hover, setHover]= useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Money Tracking Made Easy
                </HeroH1>
                <HeroP>
                    Signup for a new account today
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
