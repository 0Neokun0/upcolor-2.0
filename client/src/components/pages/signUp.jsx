import axios from "axios"
import { useEffect, useState } from "react"
import { SignLayout } from "components/templates"
import { SignUpBox } from "components/organisms"

const SignUp = () => {
    const [checkExist, setCheckExist] = useState(false)
    const [course, setCourse] = useState("")
    const [courseList, setCourseList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        setCheckExist(false)

        const data = new FormData(e.currentTarget);

        axios.post("/account/signup", {
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            course: data.get('course'),
        })
            .then((res) => {
                if (res.data) {
                    window.location.href = "home"
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
                />
            }
        />
    )
}

export default SignUp
