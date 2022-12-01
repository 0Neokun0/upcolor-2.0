import axios from "axios"
import { useEffect, useState, useRef } from "react"
import { ProfileEditLayout } from "components/templates"
import { ProfileForm } from "components/organisms"
import { ProfileInput, ProfileSelectChip } from "components/molecules"
import { Avatar, Box, Button, TextField } from "@mui/material"
import { server } from "components/config"

const CompanyProfileEdit = () => {

    const [profile, setProfile] = useState(false)
    const [courseIds, setCourseIds] = useState([])
    const [coursesList, setCoursesList] = useState([])
    const [occupationIds, setOccupationIds] = useState([])
    const [occupationsList, setOccupationsList] = useState([])
    const [locationIds, setLocationIds] = useState([])
    const [locationsList, setLocationsList] = useState([])
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

        axios.post("/company/update", {
            introduction: data.get("introduction"),
            business: data.get("business"),
            ceoMessage: data.get("ceoMessage"),
            courseIds: courseIds.join(),
            occupationIds: occupationIds.join(),
            locationIds: locationIds.join(),
            officeAddress: data.get("officeAddress"),
            homePageUrl: data.get("homePageUrl"),
            jobSiteUrl: data.get("jobSiteUrl"),
        })
            .then(() => {
                window.location.replace("/company/home")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        axios.post("/company/editProfile")
            .then((res) => {
                setProfile(res.data["company"])
                if (res.data["company"]["company_course_id"]) {
                    setCourseIds(res.data["company"]["company_course_id"].split(",").map(Number))
                }
                if (res.data["company"]["company_occupation_id"]) {
                    setOccupationIds(res.data["company"]["company_occupation_id"].split(",").map(Number))
                }
                if (res.data["company"]["company_location_id"]) {
                    setLocationIds(res.data["company"]["company_location_id"].split(",").map(Number))
                }
                setCoursesList(res.data["courses"])
                setOccupationsList(res.data["occupations"])
                setLocationsList(res.data["locations"])
                setImagePreview(server.host + "/images/icon/" + res.data["profile"]["image"])
                setImageDb(server.host + "/images/icon/" + res.data["profile"]["image"])
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
                    title="会社情報"
                >
                    <TextField
                        label="会社名"
                        name="name"
                        fullWidth
                        defaultValue={profile["company_name"]}
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

                <ProfileInput
                    title="企業基本情報"
                >
                    <TextField
                        label="企業紹介"
                        name="introduction"
                        rows={3}
                        defaultValue={profile["company_introduction"]}
                        fullWidth
                        multiline
                    />

                    <TextField
                        label="企業プロフィール"
                        name="business"
                        rows={3}
                        defaultValue={profile["company_business"]}
                        fullWidth
                        multiline
                    />

                    <TextField
                        label="社長.代表.CEO.メッセージ"
                        name="ceoMessage"
                        rows={3}
                        defaultValue={profile["company_ceo_message"]}
                        fullWidth
                        multiline
                    />
                </ProfileInput>

                <ProfileInput
                    title="募集項目"
                >
                    <ProfileSelectChip
                        label="専攻"
                        select={courseIds}
                        setSelect={setCourseIds}
                        lists={coursesList}
                        sqlId="course_id"
                        sqlName="course_name"
                    />

                    <ProfileSelectChip
                        label="業種"
                        select={occupationIds}
                        setSelect={setOccupationIds}
                        lists={occupationsList}
                        sqlId="occupation_id"
                        sqlName="occupation_name"
                    />

                    <ProfileSelectChip
                        label="都道府県"
                        select={locationIds}
                        setSelect={setLocationIds}
                        lists={locationsList}
                        sqlId="prefecture_id"
                        sqlName="prefecture_name"
                    />
                </ProfileInput>

                <ProfileInput
                    title="本社住所"
                >
                    <TextField
                        label="住所"
                        name="officeAddress"
                        defaultValue={profile["company_address"]}
                        fullWidth
                    />
                </ProfileInput>

                <ProfileInput
                    title="URL"
                >
                    <TextField
                        label="会社ホームページURL"
                        name="homePageUrl"
                        defaultValue={profile["company_homepage_url"]}
                        fullWidth
                    />

                    <TextField
                        label="就活サイトURL"
                        name="jobSiteUrl"
                        defaultValue={profile["company_jobsite_url"]}
                        fullWidth
                    />
                </ProfileInput>
            </ProfileForm>
        </ProfileEditLayout>
    )
}

export default CompanyProfileEdit