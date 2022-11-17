import axios from "axios"
import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ContainerLg } from "components/templates"
import { ClassNewsFeedHeader, ClassNewsFeedForm } from "components/organisms"


const ClassNewsFeed = () => {
    const [profile, setProfile] = useState([])
    const classId = useParams()["classId"]

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const [target, setTarget] = useState([])

    // const [openNewsReplyModal, setOpenNewsReplyModal] = useState(false)
    // const [newss, setNewss] = useState([])
    // const [newsReplys, setNewsReplys] = useState([])

    const [enterClassNewsRoom, setEnterClassNewsRoom] = useState([])


    useEffect(() => {
        axios.post("/teacher/getProfile")
            .then((res) => {
                setProfile(res.data[0])
            })
    }, [])


    useEffect(() => {
        axios.post("/classNews/enterClassRoom", {
            classId: classId,
        })
            .then((res) => {
                console.log(res.data[0])

                setEnterClassNewsRoom(res.data[0])
            })
    }, [classId])

    const handleSubmitNews = (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)

        axios.post("/classNews/addNews", {
            classNewsText: data.get("classNewsText"),
        })
    }

    useEffect(() => {
        axios.post("/account/getProfile")
            .then((res) => {
                console.log(res.data)
                setProfile(res.data)
            })
    }, [])


    return (
        <ContainerLg>
            <ClassNewsFeedHeader
                profile={profile}
                enterClassNewsRoom={enterClassNewsRoom}
            />
            <Grid
                container
                justifyContent="center"
            >
                <ClassNewsFeedForm
                    profile={profile}
                    open={open}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                    handleSubmitNews={handleSubmitNews}
                />
            </Grid>

        </ContainerLg>
    )
}
export default ClassNewsFeed