import { useEffect, useState } from "react"
import instance from "../../../instance"

import ProjectBody from "./ProjectBody"

import Icon1 from '../../../assets/images/project-icon1.svg'
import Icon2 from '../../../assets/images/project-icon2.svg'
import Icon3 from '../../../assets/images/project-icon3.svg'
import Icon4 from '../../../assets/images/project-icon4.svg'
import Icon5 from '../../../assets/images/project-icon5.svg'
import Plus1 from '../../../assets/images/plus1.svg'
import Plus2 from '../../../assets/images/plus2.svg'
import Plus3 from '../../../assets/images/plus3.svg'
import Plus4 from '../../../assets/images/plus4.svg'
import Plus5 from '../../../assets/images/plus5.svg'
import Search1 from '../../../assets/images/search1.svg'
import Search2 from '../../../assets/images/search2.svg'
import Search3 from '../../../assets/images/search3.svg'
import Search4 from '../../../assets/images/search4.svg'
import Search5 from '../../../assets/images/search5.svg'

const Projects = () => {

    const [category1, setCategory1] = useState([])
    const [category2, setCategory2] = useState([])
    const [category3, setCategory3] = useState([])
    const [category4, setCategory4] = useState([])
    const [category5, setCategory5] = useState([])

    useEffect(() => {
        instance.post('projects/get-projects-by-category', {
            category: "Espace vert"
        })
            .then(res => {
                setCategory1(res.data.data)
            })
            .catch(err => {
                if (err.response.data.error === 'Your token is expired, please login again.') {
                    localStorage.clear()
                    window.location.reload()
                }
            })

        instance.post('projects/get-projects-by-category', {
            category: "Fond local"
        })
            .then(res => {
                setCategory2(res.data.data)
            })

        instance.post('projects/get-projects-by-category', {
            category: "Partage social"
        })
            .then(res => {
                setCategory3(res.data.data)
            })

        instance.post('projects/get-projects-by-category', {
            category: "Wikend"
        })
            .then(res => {
                setCategory4(res.data.data)
            })

        instance.post('projects/get-projects-by-category', {
            category: "KinFest"
        })
            .then(res => {
                setCategory5(res.data.data)
            })
    }, [])

    return (
        <div className="project">
            <ProjectBody category='Espace vert'
                icon={Icon1}
                plusIcon={Plus1}
                searchIcon={Search1}
                data={category1}
            />
            <ProjectBody
                category='Fond local'
                icon={Icon2}
                plusIcon={Plus2}
                searchIcon={Search2}
                data={category2}
            />
            <ProjectBody
                category='Partage social'
                icon={Icon3}
                plusIcon={Plus3}
                searchIcon={Search3}
                data={category3}
            />
            <ProjectBody
                category='Wikend'
                icon={Icon4}
                plusIcon={Plus4}
                searchIcon={Search4}
                data={category4}
            />
            <ProjectBody
                category='KinFest'
                icon={Icon5}
                plusIcon={Plus5}
                searchIcon={Search5}
                data={category5}
            />
        </div>
    )
}

export default Projects