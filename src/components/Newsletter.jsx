import React from "react"
import CountUp from "react-countup"
export default function Newsletter() {
    return (
        <div className="w-full bg-[#2699fb] p-4">
            <div className="max-w-[1240px] md:flex mx-auto justify-between py-[40px]">
                <div className="m-2">
                    <h1 className="text-white text-[40px] font-bold">Want to learn latest I.T skills?</h1>
                    <span className="text-white">Sign up to our newsletter and stay up tp date.</span>
                </div>
                <div className="m-2">
                    <input className="sm:w-full p-3 mx-2 rounded-md text-slate-800" type="text" placeholder="Email"/>
                    <button className="bg-black text-white rounded-md p-3 m-2 active:scale-95">Notify me</button>
                    <p className="text-white mx-2">
                       We care bout the protection of your data. Read our <br /> <a href="#" className="text-black">Privacy Policy</a>. 
                    </p>
                </div>
            </div>
        </div>
    )
}