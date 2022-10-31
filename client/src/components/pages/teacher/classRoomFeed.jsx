import axios from "axios"
import { ClassRoomFeedLayout } from 'components/templates'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"


const ClassRoomFeed = () => {

    const classRoomTitle = "Classroom"
    const classRoomTitleImage = "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?cs=srgb&dl=pexels-pixabay-256395.jpg&fm=jpg"

    const classId = useParams()["classId"]

    const [profile, setProfile] = useState([])
    const [news, setNews] = useState([])

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openNewsReplyModal, setOpenNewsReplyModal] = useState(false)
    const [newss, setNewss] = useState([])
    const [newsReplys, setNewsReplys] = useState([])


    useEffect(() => {
        axios.post("/account/getProfile")
            .then((res) => {

                console.log(res.data)

                setProfile(res.data[0])
            })
    }, [])

    const handleSubmitNews = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        axios.post("/news/addNews", {
            text: data.get("text"),
        })
            .then(() => {
                window.location.reload()
            })
    }

    const [enterClassRoom, setEnterClassRoom] = useState([]);

    useEffect(() => {
        axios.post("/classRoom/enterClassRoom", {
            classId: classId,
        })
            .then((res) => {
                console.log(res.data[0])

                setEnterClassRoom(res.data[0])
            })
    }, [classId])


    return (
        enterClassRoom
        &&
        <>
            <ClassRoomFeedLayout
                profile={profile}

                handleSubmitNews={handleSubmitNews}
                news={news}

                classRoomTitle={classRoomTitle}
                classRoomTitleImage={classRoomTitleImage}

                enterClassRoom={enterClassRoom}

                open={open}
                handleOpen={handleOpen}
                handleClose={handleClose}



            />
        </>
    )
}

export default ClassRoomFeed
