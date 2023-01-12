import axios from "axios"
import { useEffect, useState } from "react"
import { DevelopMenus, MainMenu } from "components/organisms"
import { ContainerLg, DevelopLayout } from "components/templates"
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded"
import ClassIcon from '@mui/icons-material/Class'
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts"
import SettingsIcon from "@mui/icons-material/Settings"
import ContactsIcon from "@mui/icons-material/Contacts"
import HomeWorkIcon from "@mui/icons-material/HomeWork"
import NewspaperIcon from '@mui/icons-material/Newspaper'
import MainMenuTeacher from "components/organisms/mainMenuTeacher"
import { Box, Hidden, Stack } from "@mui/material"



const TeacherHome = () => {

    const [teacher, setTeacher] = useState([])

    useEffect(() => {
        axios.post("/account/getTeacherProfile")
            .then((res) => {
                setTeacher(res.data)
                console.log(res.data)
            })
    }, [])

    const menus = [
        {
            url: "./teachernews",
            value: "ニュース",
            image: "https://i-seifu.jp/wp-content/themes/i-seifu_wp/images/cp-kyujin.png",
            color: "success",
            text: "ニュースの投稿",
            startIcon: <GroupAddRoundedIcon />,
        },
        {
            url: "/classNews",
            value: "クラス",
            image: "https://i-seifu.jp/wp-content/themes/i-seifu_wp/images/cp-kyujin.png",
            color: "success",
            text: "クラスの管理",
            startIcon: <GroupAddRoundedIcon />,
        },
    ]

    const teacherMenus = [
        {
            value: "ニュース投稿",
            icon: <NewspaperIcon />,
            url: "/teacher/teachernews",
        },
        {
            value: "クラスニュース",
            url: "/classNews",
            icon: <ClassIcon />,
        },
        {
            value: "学生管理",
            icon: <ManageAccountsIcon />,
            url: "/develop/tab/management",
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
            value: "先生プロフィール編集",
            icon: <SettingsIcon />,
            url: "./profile/edit",
        },
    ]

    return (
        <ContainerLg>
            <Stack
                direction={"row"}
            >
                <Hidden
                    mdDown
                >
                    <Box
                        sx={{
                            p: 2,
                            width: "50%",
                            maxWidth: "400px"
                        }}
                    >
                        <MainMenuTeacher
                            teacher={teacher}
                            teacherMenus={teacherMenus}
                        />
                    </Box>

                </Hidden>
                <DevelopLayout>
                    <DevelopMenus
                        menus={menus}
                    />
                </DevelopLayout>
            </Stack>

        </ContainerLg>
    )
}

export default TeacherHome
