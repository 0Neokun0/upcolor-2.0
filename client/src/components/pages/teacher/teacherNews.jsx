import axios from "axios"
import { ContainerMd } from "components/templates"
import { NewsForm, NewsList } from "components/organisms"
import { useState } from "react"
import { useEffect } from "react"
import { Divider } from "@mui/material"
import TeacherNewsHeader from "components/organisms/teacherNewsHeader"

const TeacherNews = () => {
    const [profile, setProfile] = useState([])
    const [courses, setCourses] = useState([])
    const [news, setNews] = useState([])
    const [formState, setFormState] = useState(false)

    const [target, setTarget] = useState([])

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
        window.location.reload()
    }

    useEffect(() => {
        axios.post("/account/getTeacherProfile")
            .then((res) => {
                setProfile(res.data)
                console.log(res.data)
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

    return (
        <ContainerMd>
            <TeacherNewsHeader
                profile={profile}
            />

            {
                profile
                ?
                <NewsForm
                    formState={formState}
                    setFormState={setFormState}

                    profile={profile}
                    courses={courses}

                    target={target}
                    handleTarget={handleTarget}

                    handleSubmit={handleSubmit}
                />
                :
                <></>
            }

            <Divider
                sx={{
                    my: 2,
                }}
            />

            <NewsList
                news={news}
            />
        </ContainerMd>
    )
}

export default TeacherNews