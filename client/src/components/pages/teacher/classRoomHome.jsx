import axios from "axios"
import { ClassRoomLayout } from "components/templates"
import { useEffect, useState } from "react"


const ClassRoomHome = () => {

    const classRoomTitle = "Classroom"
    const classRoomTitleImage = "https://wallpaperaccess.com/full/859076.jpg"

    const [openCreate, setOpenCreate] = useState(false);
    const [openJoin, setOpenJoin] = useState(false);

    const [classRoomList, setClassRoomList] = useState(false);

    const [profile, setProfile] = useState([])

    useEffect(() => {
        axios.post("/account/getProfile")
            .then((res) => {
                
                console.log(res.data)

                setProfile(res.data[0])
            })
    }, [])

    useEffect(() => {
        axios.post("/classRoom/viewClassRoom")
            .then((res) => {

                console.log(res.data)

                if (res.data) {
                    setClassRoomList(res.data)
                } else {
                    setClassRoomList([])
                }

            })
    }, [])

    const createClass = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        axios.post("/classRoom/createClassRoom", {
            classRoomName: data.get("classRoomName"),
            classRoomPassword: data.get("classRoomPassword"),
        })

        setOpenCreate(false)
    }

    return (
        classRoomList
        &&
        <>
            <ClassRoomLayout
                profile={profile}

                classRoomTitle={classRoomTitle}
                classRoomTitleImage={classRoomTitleImage}
                openCreate={openCreate}
                openJoin={openJoin}
                setOpenCreate={setOpenCreate}
                setOpenJoin={setOpenJoin}

                classRoomList={classRoomList}

                createClass={createClass}
            />
        </>

    )
}

export default ClassRoomHome
