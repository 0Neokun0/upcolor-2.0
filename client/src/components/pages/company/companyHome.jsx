import axios from "axios"
import { useEffect, useState } from "react"
import { Box, Paper } from "@mui/material"

import GroupsIcon from "@mui/icons-material/Groups"
import LockOpenIcon from "@mui/icons-material/LockOpen"
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts"
import SettingsIcon from "@mui/icons-material/Settings"
import ContactsIcon from "@mui/icons-material/Contacts"
import HomeWorkIcon from "@mui/icons-material/HomeWork"
import MainMenuCompany from "components/organisms/mainMenuCompany"
const CompanyHome = () => {

    const [company, setCompany] = useState([])

    useEffect(() => {
        axios.post("/company/getCompanyProfile")
            .then((res) => {
                setCompany(res.data)
                console.log(res.data)
            })
    }, [])

    const companyMenus = [
        {
            value: "グループ投稿",
            icon: <GroupsIcon />,
            url: "#",
        },
        {
            value: "グループ認証",
            icon: <LockOpenIcon />,
            url: "#",
        },
        {
            value: "グループ管理",
            icon: <ManageAccountsIcon />,
            url: "#",
        },
        {
            value: "学生プロフィール閲覧",
            icon: <ContactsIcon />,
            url: "/list/student",
        },
        {
            value: "企業・会社プロフィール閲覧",
            icon: <HomeWorkIcon />,
            url: "/list/company",
        },
        {
            value: "企業プロフィール編集",
            icon: <SettingsIcon />,
            url: "/company/profile/edit",
        },
    ]

    return (
        <Box
            sx={{
                width: "80%",
                pt: 2,
                mx: "auto",
            }}
        >
            <Paper>
                <MainMenuCompany
                    company={company}
                    companyMenus={companyMenus}
                />
            </Paper>
        </Box>
    )
}

export default CompanyHome
