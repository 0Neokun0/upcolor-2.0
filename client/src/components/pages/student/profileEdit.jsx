import { useEffect, useState } from "react"
import axios from "axios"
import { ProfileEditLayout } from "components/templates"
import { ProfileForm } from "components/organisms"
import { ProfileInput, ProfileSelect, ProfileSelectChip } from "components/molecules"
import { Box, Button, TextField } from "@mui/material"

const ProfileEdit = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        
        if (data.get("icon")["name"]) {
            axios.post("/account/updateUserIcon", {
                icon: data.get("icon"),
            },
                config
            )
        }
        axios.post("/account/updateProfile", {
            name: data.get("name"),
            course: data.get("course"),
            year: data.get("year"),
            introduction: data.get("introduction"),
            qualifications: qualificationIds.join(),
            programming_languages: programIds.join(),
            tools_and_framework: toolIds.join(),
            country_language: languageIds.join(),
            github: data.get("github"),
        })
            .then(() => {
                window.location.href = "/profile"
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        axios.post("/account/editProfile")
            .then((res) => {
                if (res.data["profile"]["course_id"]) {
                    setCourseId(res.data["profile"]["course_id"])
                }
                if (res.data["profile"]["year_id"]) {
                    setYearId(res.data["profile"]["year_id"])
                }
                if (res.data["profile"]["qualification_ids"]) {
                    setQualificationIds(res.data["profile"]["qualification_ids"].split(",").map(Number))
                }
                if (res.data["profile"]["program_ids"]) {
                    setProgramIds(res.data["profile"]["program_ids"].split(",").map(Number))
                }
                if (res.data["profile"]["tool_ids"]) {
                    setToolIds(res.data["profile"]["tool_ids"].split(",").map(Number))
                }
                if (res.data["profile"]["language_ids"]) {
                    setLanguageIds(res.data["profile"]["language_ids"].split(",").map(Number))
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
                        defaultValue={profile["name"]}
                        fullWidth
                    />

                    <TextField
                        label="メールアドレス"
                        name="mail"
                        defaultValue={profile["mail"]}
                        fullWidth
                        disabled
                    />

                    <Button
                        variant="contained"
                        fullWidth
                        component="label"
                        sx={{
                            mt: 2,
                        }}
                    >
                        アイコンの選択
                        <Box
                            component="input"
                            type="file"
                            name="icon"
                            accept=".png, .jpg, .jpeg"
                            hidden
                        />
                    </Button>
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
                        defaultValue={profile["introduction"]}
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
                        defaultValue={profile["github"]}
                    />
                </ProfileInput>
            </ProfileForm>
        </ProfileEditLayout>
    )
}

export default ProfileEdit