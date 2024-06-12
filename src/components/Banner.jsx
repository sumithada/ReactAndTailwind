import React from "react"
import Typed from 'react-typed';
import bgimg from '../assets/pexels-burst-374720.jpg';

export default function Banner() {
    const myImg = {
        background: `linear-gradient(rgba(50,100,240,0.8),rgba(60,100,200,0.6)),url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
    return (
        <div className="bg-[#2699fb] pt-[32%] md:pt-[8%] w-full h-screen">
            <div className="max-w-[1240px] py-[80px] mx-auto text-center font-bold">
                <div
                    className="md:text-4xl text-2xl">
                    Learn with us
                </div>
                <h1 className="text-white text-5xl md:text-[78px] md:pt-[24px]">Grow with us.</h1>
                <div className="md:text-[50px] text-[20px] text-white p-3">
                    Learn <Typed
                        strings={['Web Development', 'Digital Marketing', 'Ethical Hacking']}
                        typeSpeed={100}
                        loop={true}
                        backSpeed={80}
                    />
                </div>
                <button className="bg-black text-white rounded-md p-3">Get started</button>

            </div>
        </div>
    )
}