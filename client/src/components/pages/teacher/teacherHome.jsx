import { DevelopMenus } from "components/organisms"
import { DevelopLayout } from "components/templates"
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded"

const TeacherHome = () => {
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

    return (
        <DevelopLayout>
            <DevelopMenus
                menus={menus}
            />
        </DevelopLayout>
    )
}

export default TeacherHome
