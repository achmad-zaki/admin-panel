import Link from "next/link"
import { useState } from "react"
import { RxDashboard, RxPerson, RxSketchLogo } from "react-icons/rx"
import Breadcrumb from "./Breadcrumb"

const Sidebar = ({ children }) => {
    return (
        <div className='flex min-h-screen'>
            <div className="fixed w-20 md:w-56 h-screen p-3 bg-[#F5F6F9] border-r-[1px] flex flex-col justify-between">
                <div className='flex flex-col items-center'>
                    <h1 className="text-3xl font-medium md:hidden">Car</h1>
                    <h1 className="text-3xl font-medium hidden md:block">Carbos</h1>
                    <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
                    <div className="mt-5 w-full">
                        <Link href='/' className="w-full">
                            <div className={`bg-purple-800 text-white p-3 rounded-lg flex justify-center md:justify-start items-center gap-x-3`}>
                                <RxSketchLogo size={20} />
                                <span className="hidden md:block">Dashboard</span>
                            </div>
                        </Link>
                        <Link href='/' className="w-full">
                            <div className={`bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex justify-center md:justify-start items-center gap-x-3`}>
                                <RxDashboard size={20} />
                                <span className="hidden md:block">Permission</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <main className='ml-20 md:ml-56 w-full pt-24 pb-5 px-5'>
                <Breadcrumb />
                {children}
            </main>
        </div>
    )
}

export default Sidebar