import { DevelopLayout } from "components/templates"
import { DevelopMenus } from "components/organisms"

import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded"
import HistoryEduRoundedIcon from "@mui/icons-material/HistoryEduRounded"
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded"

const DevelopHome = () => {

    const menus = [
        {
            value: "講師登録",
            image: "https://i-seifu.jp/wp-content/themes/i-seifu_wp/images/cp-kyujin.png",
            color: "success",
            text: "ここから教師を追加してください。",
            startIcon: <GroupAddRoundedIcon />,
            url: "./tab/genTeacherSign",
        },
        {
            value: "時間割登録",
            image: "https://i-seifu.jp/wp-content/themes/i-seifu_wp/img/senkou/jyouhou/main_img.png",
            color: "error",
            text: "ここから時刻表を追加してください。",
            startIcon: <HistoryEduRoundedIcon />,
            url: "./tab/addLectures",
        },
        {
            value: "企業登録",
            image: "https://i.ibb.co/JpFNK60/location-headquarters.jpg",
            color: "secondary",
            text: "こちらから企業を招待してください。",
            startIcon: <BusinessRoundedIcon />,
            url: "./tab/genCompanySign",
        },
        {
            value: "生徒管理",
            image: "http://gsk-sg.com/wp-content/uploads/2017/06/student-management.jpg",
            color: "primary",
            text: "こちらから生徒を管理してください。",
            startIcon: <BusinessRoundedIcon />,
            url: "./tab/management",
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

export default DevelopHome
