import { useEffect, useState } from "react"
import axios from "axios"
import { ProfileEditLayout } from "components/templates"
import { ProfileForm } from "components/organisms"
import { ProfileInput, ProfileSelect, ProfileSelectChip } from "components/molecules"
import { TextField } from "@mui/material"

const ProfileEdit = () => {
    // const [icon, setIcon] = useState([])

    const [profile, setProfile] = useState(false)
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

    // const handleIcon = (e) => {
    //     setIcon(e.target.files[0])
    // }

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)

        axios.post("/account/updateProfile", {
            name: data.get("name"),
            course: data.get("course"),
            year: data.get("year"),
            qualifications: qualificationIds.join(),
            programming_languages: programIds.join(),
            tools_and_framework: toolIds.join(),
            country_language: languageIds.join(),
            introduction: data.get("introduction"),
            github: data.get("github"),
        })


        // const image = new FormData()
        // image.append("icon", icon)

        // axios.post("/account/getImage", image, {
        //     headers: {
        //         "Content-Type": "multipart/form-data",
        //     },
        // })

        window.location.href = "/profile"
    }

    useEffect(() => {
        axios.post("/account/editProfile")
            .then((res) => {
                console.log(res.data)
                if (res.data["profile"]["course_id"]) {
                    setCourseId(res.data["profile"]["course_id"])
                }
                if (res.data["profile"]["student_year"]) {
                    setYearId(res.data["profile"]["student_year"])
                }
                if (res.data["profile"]["student_qualifications"]) {
                    setQualificationIds(res.data["profile"]["student_qualifications"].split(",").map(Number))
                }
                if (res.data["profile"]["student_programming_languages"]) {
                    setProgramIds(res.data["profile"]["student_programming_languages"].split(",").map(Number))
                }
                if (res.data["profile"]["student_tools_and_framework"]) {
                    setToolIds(res.data["profile"]["student_tools_and_framework"].split(",").map(Number))
                }
                if (res.data["profile"]["student_country_language"]) {
                    setLanguageIds(res.data["profile"]["student_country_language"].split(",").map(Number))
                }
                setProfile(res.data["profile"])
                setCoursesList(res.data["courses"])
                setYearsList(res.data["years"])
                setQualificationsList(res.data["qualifications"])
                setProgramsList(res.data["programs"])
                setToolsList(res.data["tools"])
                setLanguagesList(res.data["languages"])
            })
    }, [])

    return (
        profile
        &&
        <ProfileEditLayout>
            <ProfileForm
                handleSubmit={handleSubmit}
            >
                <ProfileInput
                    title="一般"
                >
                    <TextField
                        label="ユーザー名"
                        name="name"
                        defaultValue={profile["user_name"]}
                        fullWidth
                    />

                    <TextField
                        label="メールアドレス"
                        name="mail"
                        defaultValue={profile["user_mail"]}
                        fullWidth
                        disabled
                    />

                    {/* <Box
                        component="input"
                        type="file"
                        accept="image/*"
                        name="icon"
                        onChange={(e) => props.handleIcon(e)}
                    /> */}
                </ProfileInput>

                <ProfileInput
                    title="専攻情報"
                >
                    <ProfileSelect
                        label="専攻"
                        name="course"
                        value={courseId}
                        lists={coursesList}
                        set={setCourseId}
                        sqlId="course_id"
                        sqlName="course_name"
                    />

                    <ProfileSelect
                        label="学年"
                        name="year"
                        value={yearId}
                        lists={yearsList}
                        set={setYearId}
                        sqlId="year_id"
                        sqlName="year_name"
                    />
                </ProfileInput>

                <ProfileInput
                    title="自己紹介・自己アピール"
                >
                    <TextField
                        label="自己紹介・自己アピール"
                        name="introduction"
                        rows={3}
                        fullWidth
                        multiline
                        defaultValue={profile["user_introduction"]}
                    />
                </ProfileInput>

                <ProfileInput
                    title="スキル"
                >
                    <ProfileSelectChip
                        label="資格"
                        select={qualificationIds}
                        setSelect={setQualificationIds}
                        lists={qualificationsList}
                        sqlId="qualification_id"
                        sqlName="qualification_name"
                    />

                    <ProfileSelectChip
                        label="プログラミング言語"
                        select={programIds}
                        setSelect={setProgramIds}
                        lists={programsList}
                        sqlId="program_id"
                        sqlName="program_name"
                    />

                    <ProfileSelectChip
                        label="ツール・フレームワーク"
                        select={toolIds}
                        setSelect={setToolIds}
                        lists={toolsList}
                        sqlId="tool_id"
                        sqlName="tool_name"
                    />

                    <ProfileSelectChip
                        label="言語"
                        select={languageIds}
                        setSelect={setLanguageIds}
                        lists={languagesList}
                        sqlId="language_id"
                        sqlName="language_name"
                    />
                </ProfileInput>

                <ProfileInput
                    title="Github"
                >
                    <TextField
                        label="Github"
                        name="github"
                        fullWidth
                        defaultValue={profile["student_github"]}
                    />
                </ProfileInput>

            </ProfileForm>
        </ProfileEditLayout>
    )
}

export default ProfileEdit