import axios from "axios"
import { ProfileCard } from "components/molecules";
import { useState, useEffect } from "react"

const CompanyList = () => {
    const [companyList, setCompanyList] = useState([]);

    const userPictureUrl = 'https://upload.wikimedia.org/wikipedia/commons/8/88/DXC_Logo_2021_Purple_Black.png'
    // const user_name = 'DXCテクノロジージャパン'
    // const company_industry = '情報処理ネットワーク'

    useEffect(() => {
        axios.post("/company/list")
            .then((res) => {
                const list = res.data
                setCompanyList(list)
            })
        }, [])

        console.log(companyList)

    return (
        <ProfileCard
            image={userPictureUrl}
            name={"まつお"}
            course={"情報処理NW専攻/システムエンジニアコース"}
        />
    )

}

export default CompanyList
