import axios from "axios"
import ClassNewsHomeLayout from "components/templates/classNewsHomeLayout";

import { useEffect, useState } from "react"

const ClassNewsHome = () => {
    const classNewsTitle = "ClassNewsNews"
    const classNewsTitleImage = "https://wallpaperaccess.com/full/859076.jpg"

    const [openCreate, setOpenCreate] = useState(false);
    const [openJoin, setOpenJoin] = useState(false);

    const [classNewsRoomsList, setClassNewsRoomsList] = useState(false);

    useEffect(() => {
        axios.post("/classNewsRoom/viewClassNewsRoom")
            .then((res) => {

                console.log(res.data)

                if (res.data) {
                    setClassNewsRoomsList(res.data)
                } else {
                    setClassNewsRoomsList([])
                }

            })
    }, [])

    return (
        // classNewsRoomsList
        // &&
        <ClassNewsHomeLayout
            classNewsTitle={classNewsTitle}
            classNewsTitleImage={classNewsTitleImage}

            openCreate={openCreate}
            setOpenCreate={setOpenCreate}
            openJoin={openJoin}
            setOpenJoin={setOpenJoin}

            classNewsRoomsList={classNewsRoomsList}



        />


    )
}

export default ClassNewsHome
