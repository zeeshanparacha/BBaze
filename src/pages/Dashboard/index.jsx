import SideBar from "../../components/ReuseableComponents/Sidebar"
import Header from "../../components/ReuseableComponents/Header"
import Projects from "../../components/Dashbaord/Projects"

const Dashboard = () => {

    // const close = () => {
    //     localStorage.clear()
    //     return false
    // }

    // window.onbeforeunload = close;

    return (
        <div className="dash">
            <SideBar index={1} />
            <div className="dash_body">
                <Header />
                <Projects />
            </div>
        </div>
    )
}

export default Dashboard