import axios from "axios"
import { useState } from "react"
import { ContainerLg } from "components/templates"
import { ClassNewsCardList, ClassNewsHeader } from "components/organisms"
import { useEffect } from "react"

const ClassNews = () => {
    const [profile, setProfile] = useState([])
    const [openJoin, setOpenJoin] = useState(false)
    const [openCreate, setOpenCreate] = useState(false)
    const [classNewsRooms, setClassNewsRooms] = useState([])

    const createClassNews = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        axios.post("/classNews/createClassNewsRoom", {
            name: data.get("classNewsRoomName"),
            password: data.get("classNewsRoomPassword"),
        })

        setOpenCreate(false)
    }

    useEffect(() => {
        axios.post("/classNews/getJoinedClass")
            .then((res) => {
                if (res) {
                    setClassNewsRooms(res.data)
                }
            })

        axios.post("/account/getProfile")
            .then((res) => {
                console.log(res.data)
                setProfile(res.data)
            })
    }, [])

    return (
        <ContainerLg>
            <ClassNewsHeader
                profile={profile}

                openJoin={openJoin}
                openCreate={openCreate}
                setOpenJoin={setOpenJoin}
                setOpenCreate={setOpenCreate}

                createClassNews={createClassNews}
            />

            <ClassNewsCardList
                classNewsRooms={classNewsRooms}
            />
        </ContainerLg>
    )
}

export default ClassNews