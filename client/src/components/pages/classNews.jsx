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
    const [userType, setUserType] = useState()

    const createClassNews = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        axios.post("/classNews/createClassNewsRoom", {
            name: data.get("classNewsRoomName"),
            password: data.get("classNewsRoomPassword"),
        })

        setOpenCreate(false)
        window.location.reload()
    }

    const joinClassNews = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        axios.post("/classNews/joinClassNews", {
            id: data.get("id"),
            password: data.get("password"),
        })
            .then((res) => {
                if (res.data === 1) {
                    window.location.reload()
                } else if (res.data === 2) {
                    alert("既に参加しています")
                } else if (res.data === 3) {
                    alert("ルームが見つかりません")
                } else {
                    alert("エラー")
                }
            })
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
                setProfile(res.data)
            })

        axios.post("/account/getUserType")
            .then((res) => {
                setUserType(res.data)
            })
    }, [])

    return (
        <ContainerLg>
            <ClassNewsHeader
                profile={profile}
                userType={userType}

                openJoin={openJoin}
                openCreate={openCreate}
                setOpenJoin={setOpenJoin}
                setOpenCreate={setOpenCreate}

                createClassNews={createClassNews}
                joinClassNews={joinClassNews}
            />

            <ClassNewsCardList
                classNewsRooms={classNewsRooms}
            />
        </ContainerLg >
    )
}

export default ClassNews