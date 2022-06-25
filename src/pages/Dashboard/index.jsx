import SideBar from "../../components/ReuseableComponents/Sidebar"
import Header from "../../components/ReuseableComponents/Header"
import Projects from "../../components/Dashbaord/Projects"

const Dashboard = () => {
    return(
        <div className="dash">
            <SideBar />
            <div className="dash_body">
                <Header/>
                <Projects/>
            </div>
        </div>
    )
}

export default Dashboard