import axios from "axios"
import { useState } from "react"
import { SignInBox } from "components/organisms"
import { SignLayout } from "components/templates"

const Signin = () => {
    const [availability, setAvailability] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)

        axios.post("/account/signin", {
            email: data.get('email'),
            password: data.get('password'),
        })
        .then((res) => {
            if (res.data) {
                const authority = res.data["type_name"]
                sessionStorage.setItem("AUTHORITY", authority)
                window.location.href = "home"
            } else {
                setAvailability(true)
            }
        })
    }

    return (
        <SignLayout>
            <SignInBox
                submit={handleSubmit}
                availability={availability}
            />
        </SignLayout>
    );
}

export default Signin;
