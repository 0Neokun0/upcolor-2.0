import { useEffect, useState } from "react"
import axios from "axios"
import { TeamWorkInfoLayout } from "components/templates"
import { ProfileForm } from "components/organisms"

const ProfileEdit = () => {
    const [icon, setIcon] = useState([])

    const [profile, setProfile] = useState([])
    const [courses, setCourses] = useState([])

    const [selectQualifications, setSelectQualifications] = useState([])
    const [selectPrograms, setSelectPrograms] = useState([])
    const [selectTools, setSelectTools] = useState([])
    const [selectLanguages, setSelectLanguages] = useState([])

    const years = [
        {
            value: 1,
            item: "1年",
        },
        {
            value: 2,
            item: "2年",
        },
        {
            value: 3,
            item: "3年",
        },
        {
            value: 4,
            item: "4年",
        },
    ]

    // データベースにしたほうがいいと思う
    const qualifications = [
        "MOS/WORD",
        "MOS/EXCEL",
        "ITパスポート",
        "基本情報技術者試験",
        "応用情報技術者試験",
        "セキュリティマネジメント",
    ]

    const programs = [
        "C言語",
        "C#",
        "C++",
        "PHP",
        "HTML5/CSS3",
        "JavaScript",
        "Java",
        "Python",
        "SQL",
        "Visual Basic(VB, VBA)",
        "Ruby",
    ]

    const tools = [
        "Adobe Photoshop",
        "Adobe Premiere Pro",
        "Adobe illustrator",
    ]

    const languages = [
        "日本語",
        "英語",
        "ヒンディー語",
    ]

    const handleIcon = (e) => {
        setIcon(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)

        axios.post("/account/updateProfile", {
            name: data.get("name"),
            mail: data.get("mail"),
            course: data.get("course"),
            year: data.get("year"),
            qualifications: selectQualifications,
            programming_languages: selectPrograms,
            tools_and_framework: selectTools,
            country_language: selectLanguages,
            introduction: data.get("introduction"),
            github: data.get("github"),
        })


        const image = new FormData()
        image.append("icon", icon)

        axios.post("/account/getImage", image, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })

        window.location.href = "/profile"
    }

    useEffect(() => {
        axios.post("/account/getProfile")
            .then((res) => {
                setProfile(res.data)
            })

        axios.post("/course/course")
            .then((res) => {
                setCourses(res.data)
            })
    }, [])

    return (
        profile.length
        &&
        <TeamWorkInfoLayout
            component={
                <ProfileForm
                    profile={profile}
                    courses={courses}
                    years={years}
                    programs={programs}
                    qualifications={qualifications}
                    tools={tools}
                    languages={languages}

                    selectQualifications={selectQualifications}
                    selectPrograms={selectPrograms}
                    selectTools={selectTools}
                    selectLanguages={selectLanguages}
                    setSelectQualifications={setSelectQualifications}
                    setSelectPrograms={setSelectPrograms}
                    setSelectTools={setSelectTools}
                    setSelectLanguages={setSelectLanguages}

                    handleIcon={handleIcon}
                    handleSubmit={handleSubmit}
                />
            }
        />
    );
}

export default ProfileEdit