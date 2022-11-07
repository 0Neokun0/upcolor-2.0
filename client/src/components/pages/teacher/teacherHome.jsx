import { DevelopMenus } from "components/organisms"
import { DevelopLayout } from "components/templates"
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded"

const TeacherHome = () => {
    const menus = [
        {
            value: "ニュース",
            image: "https://i-seifu.jp/wp-content/themes/i-seifu_wp/images/cp-kyujin.png",
            color: "success",
            text: "ここから教師を追加してください。",
            startIcon: <GroupAddRoundedIcon />,
            url: "./teachernews",
        },
    ]

    const sx = [{
        width: "40vh",
        height: "40vh",
        mx: 1,
        mt: 2,
        fontSize: "3em"
    }]

    return (
        <DevelopLayout>
            <DevelopMenus
                menus={menus}
                sx={sx}
            />
        </DevelopLayout>
    )
}

export default TeacherHome
