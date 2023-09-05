import { useState } from "react"
import { FaBarsStaggered } from "react-icons/fa6"
import { GrFormClose } from "react-icons/gr"
import { GoHomeFill } from "react-icons/go"
import Image from "next/image"
import LogoSideBar from "@/public/assets/Oto-Pratik.png"
import Link from "next/link"

import { RxDashboard, RxPerson, RxSketchLogo } from "react-icons/rx"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { FiSettings } from "react-icons/fi"

const Header = () => {
    const [openDropDown, setOpenDropDown] = useState(false)

    return (
        <div className="fixed top-0 bg-white border-b p-3.5 flex items-center justify-end w-full">
            <div onClick={() => setOpenDropDown(!openDropDown)} className="relative inline-block text-right">
                <button className="inline-flex justify-center items-center p-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-200 active:bg-gray-200">
                    Admin
                </button>
                <ul className={`absolute ${openDropDown ? "block" : "hidden"} right-0 mt-2 py-2 bg-white border border-gray-300 rounded-md shadow-lg`}>
                    <li>
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Item 1</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header