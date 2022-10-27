import axios from "axios"
import { ClassRoomFeedLayout } from 'components/templates'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"


const ClassRoomFeed = () => {

    const classRoomTitle = "Classroom"
    const classRoomTitleImage = "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?cs=srgb&dl=pexels-pixabay-256395.jpg&fm=jpg"

    const classId = useParams()["classId"]

    const [enterClassRoom, setEnterClassRoom] = useState([]);

    useEffect(() => {
        axios.post("/classRoom/enterClassRoom", {
            classId: classId,
        })
            .then((res) => {
                console.log(res.data)

                setEnterClassRoom(res.data)
            })
    }, [classId])


    return (
        enterClassRoom
        &&
        <>
            <ClassRoomFeedLayout
                classRoomTitle={classRoomTitle}
                classRoomTitleImage={classRoomTitleImage}

                enterClassRoom={enterClassRoom}



            />
        </>
    )
}

export default ClassRoomFeed
