import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { SignLayout } from "components/templates"
import { SignUpBox, FormDialog } from "components/organisms"

const TeacherSignup = () => {
    const token = useParams()["token"]
    const [dialog, setDialog] = useState(true)
    const [checkExist, setCheckExist] = useState(false)


    const handlePassword = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        axios.post("/check/teacher", {
            token: token,
            password: data.get("tokenPassword"),
        })
        .then((res) => {
            if (res.data) {
                setDialog(false)
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        axios.post("/account/signup", {
            name: data.get("name"),
            email: data.get("email"),
            password: data.get("password"),
            userType: 2,
        })
        .then((res) => {
            if (res.data) {
                window.location.href = "/home"
            } else {
                setCheckExist(true)
            }
        })
    }

    return (
        <SignLayout>
            {
                !dialog
                &&
                <SignUpBox
                    handleSubmit={handleSubmit}
                    checkExist={checkExist}
                />
            }

            <FormDialog
                dialog={dialog}
                handlePassword={handlePassword}
                dialogText={"パスワードを入力してください"}
                formName={"tokenPassword"}
            />
        </SignLayout>
    )
}

export default TeacherSignup
