import { useEffect, useState, useRef } from "react"
import axios from "axios"
import { server } from "components/config"
import { ProfileEditLayout } from "components/templates"
import { ProfileForm } from "components/organisms"

const TeacherProfileEdit = () => {
    const [teacher, setTeacher] = useState(false)
    const [coursesList, setCoursesList] = useState([])
    const [courseId, setCourseId] = useState("")
    const [yearsList, setYearsList] = useState([])
    const [yearId, setYearId] = useState("")
    const [qualificationsList, setQualificationsList] = useState([])
    const [qualificationIds, setQualificationIds] = useState([])
    const [programsList, setProgramsList] = useState([])
    const [programIds, setProgramIds] = useState([])
    const [toolsList, setToolsList] = useState([])
    const [toolIds, setToolIds] = useState([])
    const [languagesList, setLanguagesList] = useState([])
    const [languageIds, setLanguageIds] = useState([])
    const [imagePreview, setImagePreview] = useState(undefined)
    const [imageDb, setImageDb] = useState(undefined)

    const fileInput = useRef(null)

    const onClickReset = () => {
        fileInput.current.value = ""
        setImagePreview(undefined)
    }

    const onChangeFileInput = (e) => {
        setImagePreview(undefined)

        if (e.target.files.length === 0) {
            return
        }

        if (!e.target.files[0].type.match("image.*")) {
            return
        }

        const reader = new FileReader()

        reader.onload = (event) => {
            setImagePreview(event.target.result)
        }

        reader.readAsDataURL(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        if (imagePreview !== imageDb) {
            axios.post("/account/updateUserIcon", {
                icon: data.get("icon"),
            },
                config
            )
        }

        axios.post("/account/updateTeacher", {
            name: data.get("name"),
            course: data.get("course"),
            year: data.get("year"),
            qualifications: qualificationIds.join(),
            programming_languages: programIds.join(),
            tools_and_framework: toolIds.join(),
            country_language: languageIds.join(),
        })
            .then(() => {
                window.location.replace("/teacher/profile")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        axios.post("/account/editTeacher")
            .then((res) => {
                if (res.data["teacher"]["course_id"]) {
                    setCourseId(res.data["teacher"]["course_id"])
                }
                if (res.data["teacher"]["year_id"]) {
                    setYearId(res.data["teacher"]["year_id"])
                }
                if (res.data["teacher"]["qualification_ids"]) {
                    setQualificationIds(res.data["teacher"]["qualification_ids"].split(",").map(Number))
                }
                if (res.data["teacher"]["program_ids"]) {
                    setProgramIds(res.data["teacher"]["program_ids"].split(",").map(Number))
                }
                if (res.data["teacher"]["tool_ids"]) {
                    setToolIds(res.data["teacher"]["tool_ids"].split(",").map(Number))
                }
                if (res.data["teacher"]["language_ids"]) {
                    setLanguageIds(res.data["teacher"]["language_ids"].split(",").map(Number))
                }
                setTeacher(res.data["teacher"])
                setCoursesList(res.data["courses"])
                setYearsList(res.data["years"])
                setQualificationsList(res.data["qualifications"])
                setProgramsList(res.data["programs"])
                setToolsList(res.data["tools"])
                setLanguagesList(res.data["languages"])
                setImagePreview(server.host + "/images/icon/" + res.data["teacher"]["image"])
                setImageDb(server.host + "/images/icon/" + res.data["teacher"]["image"])
            })
    }, [])
    return (
        // teacher
        // &&
        // <ProfileEditLayout>
        //     <ProfileForm
        //             handleSubmit={handleSubmit}
        //         >

        <>
            Hello
        </>
        //         </ProfileForm>
        // </ProfileEditLayout>

    )
}

export default TeacherProfileEdit
