import axios from "axios"
import { useEffect, useState } from "react"
import { SignLayout } from "components/templates"
import { SignUpBox } from "components/organisms"

const SignUp = () => {
    const [checkExist, setCheckExist] = useState(false)
    const [course, setCourse] = useState("")
    const [courseList, setCourseList] = useState([])

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
            course: data.get('course'),
            year: data.get("year"),
            userType: 1,
        })
            .then((res) => {
                if (res.data) {
                    window.location.href = "/home"
                } else {
                    setCheckExist(true)
                }
            })
    };

    const handleChange = (e) => {
        setCourse(e.target.value)
    }

    useEffect(() => {
        axios.post("/course/course")
            .then((res) => {
                setCourseList(res.data)
            })
    }, []);

    return (
        <SignLayout
            component={
                <SignUpBox
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    checkExist={checkExist}
                    course={course}
                    courseList={courseList}
                    years={years}
                />
            }
        />
    )
}

export default SignUp
