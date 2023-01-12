import { useEffect, useState, useRef } from "react"
import axios from "axios"
import { server } from "components/config"
import { ProfileEditLayout } from "components/templates"
import { ProfileForm } from "components/organisms"
import { ProfileInput, ProfileSelect, ProfileSelectChip } from "components/molecules"
import { Avatar, Box, Button, TextField } from "@mui/material"

const TeacherProfileEdit = () => {
    const [teacher, setTeacher] = useState(false)
    const [coursesList, setCoursesList] = useState([])
    const [courseId, setCourseId] = useState("")
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

        axios.post("/teacher/updateTeacher", {
            name: data.get("name"),
            course: data.get("course"),
            introduction: data.get("introduction"),
            qualifications: qualificationIds.join(),
            programming_languages: programIds.join(),
            tools_and_framework: toolIds.join(),
            country_language: languageIds.join(),
        })
            .then(() => {
                window.location.replace("/teacher/profile/edit")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        axios.post("/teacher/editTeacher")
            .then((res) => {
                console.log(res.data)
                if (res.data["teacher"]["course_id"]) {
                    setCourseId(res.data["teacher"]["course_id"])
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
                setQualificationsList(res.data["qualifications"])
                setProgramsList(res.data["programs"])
                setToolsList(res.data["tools"])
                setLanguagesList(res.data["languages"])
                setImagePreview(server.host + "/images/icon/" + res.data["teacher"]["image"])
                setImageDb(server.host + "/images/icon/" + res.data["teacher"]["image"])
            })
    }, [])

    return (
        <ProfileEditLayout>
            <ProfileForm
                handleSubmit={handleSubmit}
            >
                <ProfileInput
                    title="先生情報"
                >
                    <TextField
                        label="先生名"
                        name="name"
                        fullWidth
                        defaultValue={teacher["name"]}
                    />

                    <TextField
                        label="メールアドレス"
                        name="mail"
                        defaultValue={teacher["mail"]}
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
                            ref={fileInput}
                            hidden
                            onChange={(e) => { onChangeFileInput(e) }}
                        />
                    </Button>

                    {
                        !!imagePreview
                        &&
                        <Avatar
                            src={imagePreview}
                            sx={{
                                border: "2px solid lightgray",
                                width: "150px",
                                height: "150px",
                                mx: "auto",
                                mb: 5,
                                mt: 5,
                            }}
                        />
                    }

                    <Button
                        variant="outlined"
                        color="error"
                        onClick={onClickReset}
                    >
                        削除
                    </Button>
                </ProfileInput>

                {/* <ProfileInput
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
                </ProfileInput> */}

                <ProfileInput
                    title="自己紹介・自己アピール"
                >
                    <TextField
                        label="自己紹介・自己アピール"
                        name="introduction"
                        rows={3}
                        fullWidth
                        multiline
                        defaultValue={teacher["introduction"]}
                    />
                </ProfileInput>

                {/* <ProfileInput
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
                </ProfileInput> */}
            </ProfileForm>
        </ProfileEditLayout>
    )
}

export default TeacherProfileEdit
