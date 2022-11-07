import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ContainerLg } from "components/templates"
import { ClassNewsFeedHeader } from "components/organisms"

const ClassNewsFeed = () => {
    const classId = useParams()["classId"]

    const [enterClassNewsRoom, setEnterClassNewsRoom] = useState([])

    useEffect(() => {
        axios.post("/classNews/enterClassRoom", {
            classId: classId,
        })
            .then((res) => {
                console.log(res.data[0])

                setEnterClassNewsRoom(res.data[0])
            })
    }, [classId])

    return (
        <ContainerLg>
            <ClassNewsFeedHeader
                enterClassNewsRoom={enterClassNewsRoom}
            />
        </ContainerLg>
    )
}

export default ClassNewsFeed