import { DevelopMenus } from "components/organisms"
import { DevelopLayout } from "components/templates"
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded"

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
            image: "https://i-seifu.jp/wp-content/themes/i-seifu_wp/images/cp-kyujin.png",
            color: "success",
            text: "ここから教師を追加してください。",
            startIcon: <GroupAddRoundedIcon />,
        },
    ]

    const ButtonSx = [
        {
            mt: 2,
            fontSize: 20,
            fontWeight: 'bold',
            border: 1,
            borderRadius: 2,
        },
    ]

    const cardSx = [
        {
            minWidth: 300,
            m: 2,
            p: 2,
            borderRadius: "15px",
            boxShadow: 3,
        },
    ]

    return (
        <DevelopLayout>
            <DevelopMenus
                menus={menus}
            />
        </DevelopLayout>
    )
}

export default TeacherHome
