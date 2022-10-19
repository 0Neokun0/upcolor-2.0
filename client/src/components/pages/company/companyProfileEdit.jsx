import axios from "axios"
import { useEffect, useState } from "react"
import { CompanyProfileEditLayout } from "components/templates"
import { CompanyProfileForm } from "components/organisms"
import { ProfileInput, ProfileSelectChip } from "components/molecules"
import { Box, TextField } from "@mui/material"

const CompanyProfileEdit = () => {

    const [profile, setProfile] = useState(false)
    const [courseIds, setCourseIds] = useState([])
    const [coursesList, setCoursesList] = useState(false)
    const [occupationIds, setOccupationIds] = useState([])
    const [occupationsList, setOccupationsList] = useState([])
    const [locationIds, setLocationIds] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        axios.post("/company/update", {
            courseIds: courseIds.join(),
            occupationIds: occupationIds,
            locationIds: locationIds,
            introduction: data.get("introduction"),
            business: data.get("business"),
            officeAddress: data.get("officeAddress"),
            companyUrl: data.get("companyUrl"),
            jobSiteUrl: data.get("jobSiteUrl"),
        })
    }

    useEffect(() => {
        axios.post("/company/getProfile")
            .then((res) => {
                setProfile(res.data[0])
                if (res.data[0]["company_course_preference_id"]) {
                    setCourseIds(res.data[0]["company_course_preference_id"].split(",").map(Number))
                }
            })

        axios.post("/company/courses")
            .then((res) => {
                setCoursesList(res.data)
            })

        axios.post("/company/occupations")
            .then((res) => {
                setOccupationsList(res.data)
            })
    }, [])

    console.log(courseIds)

    return (
        profile
        &&
        coursesList
        &&
        occupationsList
        &&
        <CompanyProfileEditLayout>
            <CompanyProfileForm
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

                    {/* <Box
                        component="input"
                        type="file"
                        accept="image/*"
                        name="icon"
                        onChange={(e) => props.handleIcon(e)}
                    /> */}
                </ProfileInput>

                <ProfileInput
                    title="企業基本情報"
                >
                    <TextField
                        label="企業紹介"
                        name="introduction"
                        rows={3}
                        fullWidth
                        multiline
                    />

                    <TextField
                        label="企業プロフィール"
                        name="industry"
                        rows={3}
                        fullWidth
                        multiline
                    />

                    <TextField
                        label="社長.代表.CEO.メッセージ"
                        name="introduction"
                        rows={3}
                        fullWidth
                        multiline
                    />
                </ProfileInput>

                <ProfileInput
                    title="募集専攻"
                >
                    {/* 配列の中身をすべて文字列から数値に変更する */}
                    <ProfileSelectChip
                        label="専攻"
                        select={courseIds}
                        setSelect={setCourseIds}
                        lists={coursesList}
                        id="course_id"
                        name="course_name"
                    />
                </ProfileInput>
            </CompanyProfileForm>
        </CompanyProfileEditLayout>
    )
}

export default CompanyProfileEdit