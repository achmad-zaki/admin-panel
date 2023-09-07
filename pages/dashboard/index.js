import CardDashboard from "@/components/CardDashboard"
import Layouts from "@/components/Layouts"
import { ImUsers } from "react-icons/im"

const Dashboard = () => {
    return (
        <Layouts>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                <CardDashboard
                    name="Total Pengguna"
                    icon={ <ImUsers /> }
                    count="300"
                    variant="blue"
                />
                <CardDashboard
                    name="Total Pengguna"
                    icon={ <ImUsers /> }
                    count="300"
                    variant="green"
                />
                <CardDashboard
                    name="Total Pengguna"
                    icon={ <ImUsers /> }
                    count="300"
                    variant="red"
                />
            </div>
        </Layouts>
    )
}

export default Dashboard