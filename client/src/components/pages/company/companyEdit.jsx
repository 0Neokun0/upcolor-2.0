
import { useEffect, useState } from "react"
import axios from "axios"
import { TeamWorkInfoLayout } from "components/templates"
import { CompanyProfileFrom } from "components/organisms"


const CompanyEdit = () => {

    const [companyProfile, setCompanyProfile] = useState([])
    // const [courseIds, setCourseIds] = useState([])
    // const [occupationIds, setOccupationIds] = useState([])
    // const [locationIds, setLocationIds] = useState([])


    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const data = new FormData(e.currentTarget)

    //     axios.post("/company/update", {
    //         courseIds: courseIds,
    //         occupationIds: occupationIds,
    //         locationIds: locationIds,
    //         introduction: data.get("introduction"),
    //         business: data.get("business"),
    //         officeAddress: data.get("officeAddress"),
    //         companyUrl: data.get("companyUrl"),
    //         jobSiteUrl: data.get("jobSiteUrl"),
    //     })
    // }

    useEffect(() => {
        axios.post("/company/getProfile")
            .then((res) => {
                setCompanyProfile(res.data)
            })
    }, [])

    return (

        <TeamWorkInfoLayout
            component={
                <CompanyProfileFrom
                    companyProfile={companyProfile}
                />
            }
        />
    );
}

export default CompanyEdit
