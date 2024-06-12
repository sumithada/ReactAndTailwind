import React from "react";
import CountUp from "react-countup";
import { GiNotebook } from 'react-icons/gi'
import { BsFillPersonCheckFill } from 'react-icons/bs'
import { FaPeopleRoof } from 'react-icons/fa6'

function About() {
    return (
        <>
            <div className="flex justify-around py-20">
                <div className="flex flex-col justify-center items-center">
                    <GiNotebook className="text-[50px]" />
                    <CountUp
                        className="text-[60px] font-bold"
                        enableScrollSpy
                        scrollSpyDelay={5}
                        end={20}
                        duration={10} />
                    <div className="text-3xl">Courses offered</div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <FaPeopleRoof className="text-[50px]" />
                    <CountUp
                        className="text-[60px] font-bold"
                        enableScrollSpy
                        scrollSpyDelay={5}
                        end={1700}
                        duration={10} />
                    <div className="text-3xl">Students Enrolled</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                <BsFillPersonCheckFill className="text-[50px]" />

                    <CountUp
                        className="text-[60px] font-bold"
                        enableScrollSpy
                        scrollSpyDelay={5}
                        end={43}
                        duration={10} />
                    <div className="text-3xl">Expert Teachers</div>
                </div>
            </div>
        </>
    )
}

export default About;