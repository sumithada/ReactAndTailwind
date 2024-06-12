import React from "react"
import laptop from "../assets/laptop.jpg"
import { motion } from "framer-motion"

export default function Experts() {
    return (
        <div className="max-w-[1240px] mx-auto md:grid grid-cols-2 p-5">
            <motion.div
            
            initial={{opacity:0, scale: 0.5, x:-200}}
            whileInView={{opacity:1, scale:1, x:0}}
            transition={{duration:2}}
            className="col-span-1 w-[80%]">
                <img className="inline" src={laptop} alt="" />
            </motion.div>
            <div className="col-span-1 flex flex-col justify-center">
                <h1 className="uppercase text-[#00df9a] font-bold my-2">learn from experts</h1>
                <p className="my-2">Our experts are seasoned professionals, thought leaders, and innovators in their fields. They have been there, done that, and are eager to pass on their wisdom to you <br /> To get started on your journey to learning from experts, simply browse our catalog of courses and select the one that interests you the most. Each course will introduce you to the expert behind it and provide an overview of what you can expect to learn.</p>
                <button className="inline w-[30%] bg-black text-white rounded-md p-3">Get started</button>
            </div>
        </div>
    )
}