import axios from "axios"
import { ClassRoomLayout } from "components/templates"
import { useEffect, useState } from "react"


const ClassRoomHome = () => {

    const classRoomTitle = "Classroom"
    const classRoomTitleImage = "https://wallpaperaccess.com/full/859076.jpg"

    const [openCreate, setOpenCreate] = useState(false);
    const [openJoin, setOpenJoin] = useState(false);

    const [classRoomList, setClassRoomList] = useState(false);



    useEffect(() => {
        axios.post("/classRoom/viewClassRoom")
            .then((res) => {

                console.log(res.data)

                setClassRoomList(res.data)

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
