import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ContainerLg } from "components/templates"
import { ClassNewsFeedAnnouncementCard, ClassNewsFeedHeader } from "components/organisms"
import { Grid } from "@mui/material"

const ClassNewsFeed = () => {
    const [profile, setProfile] = useState([])
    const classId = useParams()["classId"]

    const [open, setOpen] = useState();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openNewsReplyModal, setOpenNewsReplyModal] = useState(false)
    const [newss, setNewss] = useState([])
    const [newsReplys, setNewsReplys] = useState([])

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
                <ClassNewsFeedAnnouncementCard
                profile={profile}
                open={open}
                handleOpen={handleOpen}
                handleClose={handleClose}


                />
            </Grid>
        </ContainerLg>
    )
}

export default ClassNewsFeed