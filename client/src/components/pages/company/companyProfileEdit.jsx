import axios from "axios"
import { useEffect, useState } from "react"
import { CompanyProfileEditLayout } from "components/templates"

const CompanyProfileEdit = () => {

    const [profile, setProfile] = useState([])
    const [courseIds, setCourseIds] = useState([])
    const [occupationIds, setOccupationIds] = useState([])
    const [locationIds, setLocationIds] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        axios.post("/company/update", {
            courseIds: courseIds,
            occupationIds: occupationIds,
            locationIds: locationIds,
            introduction: data.get("introduction"),
            business: data.get("business"),
            officeAddress: data.get("officeAddress"),
            companyUrl: data.get("companyUrl"),
            jobSiteUrl: data.get("jobSiteUrl"),
        })
    }

    useEffect(() => {
        axios.post("/company/getProfile")
            .then((res) => {
                setProfile(res.data)
            })
    }, [])

    return (
        <CompanyProfileEditLayout>
            
        </CompanyProfileEditLayout>
    )
}

export default CompanyProfileEdit
