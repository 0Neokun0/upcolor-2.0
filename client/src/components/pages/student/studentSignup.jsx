import axios from "axios"
import { useEffect, useState } from "react"
import { SignLayout } from "components/templates"
import { SignUpBox } from "components/organisms"

const SignUp = () => {
    const [checkExist, setCheckExist] = useState(false)
    const [courseList, setCourseList] = useState([])
    const [course, setCourse] = useState("")
    const [year, setYear] = useState("")

    const [originPass, setOriginPass] = useState("")
    const [checkPass, setCheckPass] = useState("")

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setCheckExist(false)

        const data = new FormData(e.currentTarget);

        axios.post("/account/signup", {
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            course: course,
            year: year,
            userType: 1,
        })
            .then((res) => {
                if (res.data) {
                    window.location.href = "/home"
                } else {
                    setCheckExist(true)
                }
            })
    }

    useEffect(() => {
        axios.post("/course/course")
            .then((res) => {
                setCourseList(res.data)
            })
    }, [])

    return (
        <SignLayout>
            <SignUpBox
                handleSubmit={handleSubmit}
                checkExist={checkExist}
                course={course}
                courseList={courseList}
                years={years}
                year={year}
                setCourse={setCourse}
                setYear={setYear}

                originPass={originPass}
                checkPass={checkPass}
                setOriginPass={setOriginPass}
                setCheckPass={setCheckPass}
            />
        </SignLayout>
    )
}

export default SignUp
