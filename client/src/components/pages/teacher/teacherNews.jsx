import axios from "axios"
import { TeacherNewsLayout } from "components/templates"
import { NewsForm } from "components/organisms"
import { useState } from "react"
import { useEffect } from "react"

const TeacherNews = () => {
    const [profile, setProfile] = useState([])
    const [courses, setCourses] = useState([])
    const [formState, setFormState] = useState(false)

    const [target, setTarget] = useState([])

    const toggleForm = () => {
        setFormState(!formState)
    }

    const handleTarget = (e) => {
        const {
            target: { value },
        } = e

        setTarget(typeof value === 'string' ? value.split(',') : value,)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = new FormData()

        axios.post("/teacher/addPost", {
            news: data.get("news"),
            target: target,
        })
    }

    useEffect(() => {
        axios.post("/account/getProfile")
            .then((res) => {
                setProfile(res.data[0])
            })

        axios.post("/course/course")
            .then((res) => {
                setCourses(res.data)
            })
    }, [])

    return (
        <TeacherNewsLayout>
            <NewsForm
                formState={formState}
                toggleForm={toggleForm}

                profile={profile}
                courses={courses}

                target={target}
                handleTarget={handleTarget}

                handleSubmit={handleSubmit}
            />
        </TeacherNewsLayout>
    )
}

export default TeacherNews