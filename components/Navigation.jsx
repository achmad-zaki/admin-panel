import { FaUsersGear } from "react-icons/fa6"
import { BiSolidHome } from "react-icons/bi"

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
]