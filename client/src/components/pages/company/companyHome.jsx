import { Box, Paper } from "@mui/material"
import { MainMenu } from "components/organisms"

const CompanyHome = () => {
    const menus = [
        {
            value: "グループ投稿",
            url: "#",
        },
        {
            value: "グループ認証",
            url: "#",
        },
        {
            value: "グループ管理",
            url: "#",
        },
        {
            value: "企業プロフィール編集",
            url: "/company/recruitment",
        },
        {
            value: "ユーザープロフィール編集",
            url: "#",
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
                <MainMenu
                    menus={menus}
                />
            </Paper>
        </Box>
    )
}

export default CompanyHome
