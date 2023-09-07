import { FaUsersGear } from "react-icons/fa6"
import { BiSolidHome } from "react-icons/bi"
import { FaTelegramPlane } from "react-icons/fa"

export const Navigation = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: <BiSolidHome size={20} />
    },
    {
        name: "Data Pengguna",
        path: "/data-pengguna",
        icon: <FaUsersGear size={20} />
    },
    {
        name: "Postingan",
        path: "/postingan",
        icon: <FaTelegramPlane size={20} />
    },
]