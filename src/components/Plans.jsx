import React from "react"
import single from "../assets/single.png"
import double from "../assets/double.png"
import triple from "../assets/triple.png"
import { motion } from "framer-motion"

export default function Plans() {
    return (
        <div className="py-[100px] px-8">
            <div className="max-w-[1240px] mx-auto flex justify-between gap-6 flex-wrap">
                <motion.div
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:2}}
                className="md:w-[31%] w-[85%] mx-auto border-box p-2 flex flex-col gap-4 items-center my-[38px] shadow-2xl h-[500px] hover:scale-105 duration-[400ms] rounded-md">
                    <img className="w-[35%] p-2" src={single} alt="" />
                    <h2 className="md:text-2xl text-2xl font-bold text-center">Web development</h2>
                    <span className="md:text-4xl font-bold">&#36;149</span>
                    <div className="w-[90%] p-1 text-center text-[16px] border-b border-gray-200">Lorem, ipsum dolor.</div>
                    <div className="w-[90%] p-1 text-center text-[16px] border-b border-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <div className="w-[90%] p-1 text-center text-[16px] border-b border-gray-200">Lorem ipsum dolor sit amet.</div>
                    <button className="bg-green-400 rounded-md p-2 w-[50%] hover:scale-110 duration-300">Start trial</button>
                </motion.div>

                <motion.div
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1}}
                className="md:w-[31%] w-[85%] mx-auto border-box p-2 flex flex-col gap-4 items-center my-[38px] shadow-2xl h-[500px] hover:scale-105 duration-[400ms] bg-gray-100 rounded-md">
                    <img className="w-[35%] p-2" src={double} alt="" />
                    <h2 className="md:text-2xl text-2xl font-bold text-center">Digital Marketing</h2>
                    <span className="md:text-4xl font-bold">&#36;149</span>
                    <div className="w-[90%] p-1 text-center text-[16px] border-b border-gray-200">Lorem, ipsum dolor.</div>
                    <div className="w-[90%] p-1 text-center text-[16px] border-b border-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <div className="w-[90%] p-1 text-center text-[16px] border-b border-gray-200">Lorem ipsum dolor sit amet.</div>
                    <button className="bg-black text-green-400 rounded-md p-2 w-[50%] hover:scale-110 duration-300">Start trial</button>
                </motion.div>

                <motion.div
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:2}}
                className="md:w-[31%] w-[85%] mx-auto border-box p-2 flex flex-col gap-4 items-center my-[38px] shadow-2xl h-[500px] hover:scale-105 duration-[400ms] rounded-md">
                    <img className="w-[35%] p-2" src={triple} alt="" />
                    <h2 className="md:text-2xl text-2xl font-bold text-center">App development</h2>
                    <span className="md:text-4xl font-bold">&#36;149</span>
                    <div className="w-[90%] p-1 text-center text-[16px] border-b border-gray-200">Lorem, ipsum dolor.</div>
                    <div className="w-[90%] p-1 text-center text-[16px] border-b border-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <div className="w-[90%] p-1 text-center text-[16px] border-b border-gray-200">Lorem ipsum dolor sit amet.</div>
                    <button className="bg-green-400 rounded-md p-2 w-[50%] hover:scale-110 duration-300">Start trial</button>
                </motion.div>
            </div>
        </div>
    )
}
