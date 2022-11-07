import axios from "axios"
import { useState } from "react"
import { ContainerLg } from "components/templates"
import { ClassNewsCardList, ClassNewsHeader } from "components/organisms"
import { useEffect } from "react"

const ClassNews = () => {
    const [openJoin, setOpenJoin] = useState(false)
    const [openCreate, setOpenCreate] = useState(false)
    const [classNewsRooms, setClassNewsRooms] = useState([])

    const createClassNews = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        axios.post("/classNews/createClassNewsRoom", {
            classNewsRoomName: data.get("classNewsRoomName"),
            classNewsRoomPassword: data.get("classNewsRoomPassword"),
        })

        setOpenCreate(false)
    }

    useEffect(() => {
        axios.post("/classNews/viewClassNewsRoom")
            .then((res) => {
                if (res.data) {
                    console.log(res.data)

                    setClassNewsRooms(res.data)
                } else {
                    setClassNewsRooms([])
                }
            })
    }, [])

    return (
        <ContainerLg>
            <ClassNewsHeader
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