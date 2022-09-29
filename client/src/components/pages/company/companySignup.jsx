import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CompanySignupLayout, SignLayout } from "components/templates"
import { SignUpBox } from "components/organisms"

const CompanySignup = () => {
    const token = useParams()["token"]
    const [companyExist, setCompanyExist] = useState(false);
    const [checkExist, setCheckExist] = useState(false)
    const [company, setCompany] = useState(null)

    useEffect(() => {
        axios.post("/check/company", {
            token: token,
        })
        .then((res) => {
            const company = res.data
            if (company) {
                setCompanyExist(true)
                setCompany(company)
            } else {
                window.location.href = "/company/home"
            }
        })

    }, [token])

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
        <CompanySignupLayout
            component={
                <SignLayout
                    component={
                        <SignUpBox
                            handleSubmit={handleSubmit}
                            checkExist={checkExist}
                            company={company}
                        />
                    }
                />
            }
            companyExist={companyExist}
        />
    )
}

export default CompanySignup
