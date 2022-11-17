import axios from "axios"
import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ContainerLg } from "components/templates"
import { ClassNewsFeedHeader, NewsForm, NewsList } from "components/organisms"


const ClassNewsFeed = () => {
    const [profile, setProfile] = useState([])
    const classId = useParams()["classId"]
    const [courses, setCourses] = useState([])
    const [news, setNews] = useState([])
    const [formState, setFormState] = useState(false)

    const [target, setTarget] = useState([])

    const [openNewsReplyModal, setOpenNewsReplyModal] = useState(false)
    const [newss, setNewss] = useState([])
    const [newsReplys, setNewsReplys] = useState([])

    const [enterClassNewsRoom, setEnterClassNewsRoom] = useState([])

    const handleTarget = (e) => {
        const {
            target: { value },
        } = e

        setTarget(typeof value === 'string' ? value.split(',') : value,)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)

        axios.post("/teacher/addNews", {
            title: data.get("title"),
            text: data.get("text"),
            target: target,
        })
    }

    useEffect(() => {
        axios.post("/teacher/getProfile")
            .then((res) => {
                setProfile(res.data[0])
            })

        axios.post("/course/course")
            .then((res) => {
                setCourses(res.data)
            })

        axios.post("/teacher/getMyNews")
            .then((res) => {
                setNews(res.data)
                console.log(res.data)
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
                <NewsForm
                    formState={formState}
                    setFormState={setFormState}
                    profile={profile}
                    courses={courses}
                    target={target}
                    handleTarget={handleTarget}
                    handleSubmit={handleSubmit}
                />
                <Grid
                    container
                    justifyContent="center"
                >
                    <NewsList
                        profile={profile}
                        news={news}
                    />
                </Grid>
            </Grid>
        </ContainerLg>
    )
}

export default ClassNewsFeed