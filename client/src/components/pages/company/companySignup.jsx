import axios from "axios"
import { Container } from "@mui/system"
import { useEffect, useState } from "react"
import { SignLayout } from "components/templates"
import { SignUpBox } from "components/organisms"

const CompanySignup = () => {
    const [companyExist, setCompanyExist] = useState(false);
    const [checkExist, setCheckExist] = useState(false)
    const [company, setCompany] = useState(null)

    useEffect(() => {
        if (!window.location.search) {
            window.location.href = "/"
        }

        axios.post("/check/company", {
            token: getParam("token")
        })
        .then((res) => {
            const companyName = res.data
            if (companyName) {
                setCompanyExist(true)
                setCompany(companyName)
            } else {
                window.location.href = "/"
            }
        })

    }, [])

    const getParam = (name, url) => {
        if (!url) url = window.location.href

        name = name.replace(/[[\]]/g, "\\$&")

        var regex = new RegExp("[?%]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url)

        if (!results) return null
        if (!results[2]) return null

        return decodeURIComponent(results[2].replace(/\+/g, " "))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        axios.post("/account/signup", {
            name: data.get("name"),
            email: data.get("email"),
            password: data.get("password"),
            userType: 3,
            company: company,
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
        companyExist
        &&
        <Container
            component="main"
            sx={{
                pt: 2,
                textAlign: "center",
            }}
        >
            <SignLayout
                component={
                    <SignUpBox
                        handleSubmit={handleSubmit}
                        checkExist={checkExist}
                        company={company}
                    />
                }
            />
        </Container>
    )
}

export default CompanySignup
