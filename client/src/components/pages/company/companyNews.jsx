import axios from "axios"
import { ContainerMd } from "components/templates"
import { CompanyNewsForm, CompanyNewsHeader } from "components/organisms"
import { useState } from "react"
import { useEffect } from "react"
import { Divider } from "@mui/material"
import CompanyNewsList from "components/organisms/companyNewsList"


const CompanyNews = () => {
    const [company, setCompany] = useState([])
    const [courses, setCourses] = useState([])
    const [companyNews, setCompanyNews] = useState([])
    const [formState, setFormState] = useState(false)

    const [target, setTarget] = useState([])

    const handleTarget = (e) => {
        const {
            target: { value },
        } = e

        setTarget(typeof value === 'string' ? value.split(',') : value,)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)

        axios.post("/company/addCompanyNews", {
            title: data.get("title"),
            text: data.get("text"),
            target: target,
        })
        window.location.reload()
    }

    useEffect(() => {
        axios.post("/company/getCompanyProfile")
            .then((res) => {
                setCompany(res.data)
            })

            axios.post("/course/course")
            .then((res) => {
                setCourses(res.data)
            })

        axios.post("/company/getMyCompanyNews")
            .then((res) => {
                setCompanyNews(res.data)
                console.log(res.data)
            })
    }, [])

    return (
        <ContainerMd>
            <CompanyNewsHeader
                company={company}
            />

            {
                company
                ?
                <CompanyNewsForm
                    formState={formState}
                    setFormState={setFormState}

                    company={company}
                    courses={courses}

                    target={target}
                    handleTarget={handleTarget}

                    handleSubmit={handleSubmit}
                />
                :
                <></>
            }

            <Divider
                sx={{
                    my: 2,
                }}
            />

            <CompanyNewsList
                company={company}
                companyNews={companyNews}
            />
        </ContainerMd>
    )
}

export default CompanyNews