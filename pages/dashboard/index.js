import CardDashboard from "@/components/CardDashboard"
import Layouts from "@/components/Layouts"
import { Dummy } from "@/dummy"
import { ImUsers } from "react-icons/im"

export default function Dashboard() {
    const countUser = Dummy.length
    return (
        <Layouts>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                <CardDashboard
                    name="Total Pengguna"
                    icon={<ImUsers />}
                    count={countUser}
                    variant="blue"
                />
                <CardDashboard
                    name="Total Postingan"
                    icon={<ImUsers />}
                    count={0}
                    variant="green"
                />
            </div>
        </Layouts>
    )
}