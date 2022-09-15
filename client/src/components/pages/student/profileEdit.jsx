import { useEffect, useState } from "react"
import axios from "axios"
import { TeamWorkInfoLayout } from "components/templates"
import { ProfileForm } from "components/organisms"

const ProfileEdit = () => {
    const [profile, setProfile] = useState([])
    const [courses, setCourses] = useState([])

    const [course, setCourse] = useState("")
    const [year, setYear] = useState("")

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

    const handleCourse = (e) => {
        setCourse(e.target.value)
    }
    const handleYear = (e) => {
        setYear(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)

        axios.post("/account/updateProfile", {
            name: data.get("name"),
            mail: data.get("mail"),
            course: course,
            year: year,
            qualifications: data.get("qualifications"),
            programming_languages: data.get("programming_languages"),
            tools_and_framework: data.get("student_tools_and_framework"),
            country_language: data.get("country_language"),
            introduction: data.get("introduction"),
            github: data.get("github"),
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
                    course={course}
                    courses={courses}
                    year={year}
                    years={years}
                    handleCourse={handleCourse}
                    handleYear={handleYear}

                    programs={programs}

                    handleSubmit={handleSubmit}
                />
            }
        />
    );
}

export default ProfileEdit