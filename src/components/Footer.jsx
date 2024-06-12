import React from "react"
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineInstagram } from "react-icons/ai"
import {FaGithubSquare} from "react-icons/fa"


export default function Footer() {
    return (
        <footer className="bg-[#2699fb] w-full py-[60px]">
            <div className="md:max-w-[1240px] w-[80%] m-auto md:flex justify-between items-center py-[40px] gap-6">
            <div className="md:w-[40%]">
                <h1 className="text-4xl font-bold mb-3">XYZ</h1>
                <p className="text-white mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse nam tempore corrupti totam optio illo rem labore ea. Obcaecati ipsam ex odit nulla fugiat, sequi mollitia doloribus.</p>
                <AiOutlineInstagram className="text-white text-4xl inline hover:scale-110" />
                <AiFillFacebook className="text-white text-4xl inline ml-3 hover:scale-110" />
                <AiFillTwitterSquare className="text-white text-4xl inline ml-3 hover:scale-110"/>
                <FaGithubSquare className="text-white text-4xl inline ml-3 hover:scale-110"/>
            </div>
            <div className="flex justify-around mt-8 md:w-[40%]">
            <div className="px-4">
                <ul className="text-white text-[18px] cursor-pointer">
                    <li className="text-black mb-3">Solutions</li>
                    <li className="mb-3">Analysis</li>
                    <li className="mb-3">Marketing</li>
                    <li className="mb-3">Commerce</li>
                    <li className="mb-3">Insights</li>
                </ul>
            </div>
            <div className="px-4">
                <ul className="text-white text-[18px] cursor-pointer">
                    <li className="text-black mb-3">Support</li>
                    <li className="mb-3">Pricing</li>
                    <li className="mb-3">Documentation</li>
                    <li className="mb-3">Commerce</li>
                    <li className="mb-3">API Status</li>
                </ul>
            </div>
            <div className="px-4">
                <ul className="text-white text-[18px] cursor-pointer">
                    <li className="text-black mb-3">Company</li>
                    <li className="mb-3">About</li>
                    <li className="mb-3">Blog</li>
                    <li className="mb-3">Jobs</li>
                    <li className="mb-3">Press</li>
                    <li className="mb-3">Career</li>
                </ul>
            </div>
            </div>
            </div>
            <div className="text-center">copyright@2023</div>
        </footer>
    )
}