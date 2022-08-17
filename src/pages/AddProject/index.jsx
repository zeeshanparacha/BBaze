import SideBar from "../../components/ReuseableComponents/Sidebar"
import Header from "../../components/ReuseableComponents/Header"
import AddProjectBody from "../../components/AddProject"

const AddProject = () => {
    return(
        <div className="dash">
            <SideBar />
            <div className="dash_body">
                <Header/>
                <AddProjectBody/>
            </div>
        </div>
    )
}

export default AddProject