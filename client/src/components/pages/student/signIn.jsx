import axios from "axios"
import { useState } from "react"
import { SignInBox } from "components/organisms"
import { SignLayout } from "components/templates"

const SignIn = () => {
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
                    window.location.href = "home"
                } else {
                    setAvailability(true)
                }
            })
    }

    return (
        <SignLayout
            component={
                <SignInBox
                    submit={handleSubmit}
                    availability={availability}
                />
            }
        />
    );
}

export default SignIn;
