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
            image: "https://scontent-itm1-1.xx.fbcdn.net/v/t1.6435-9/83455413_872271626552391_6675737040484564992_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=hEuUzvhMVawAX-0gIm4&_nc_ht=scontent-itm1-1.xx&oh=00_AfCGXIGlHiRUZ91O69Td4qTBAg1b8MAtKy-zhLbS3_eB2w&oe=6385B0A3",
            color: "secondary",
            text: "こちらから企業を招待してください。",
            startIcon: <BusinessRoundedIcon />,
            url: "./tab/genCompanySign",
        },
        {
            value: "生徒管理",
            image: "https://scontent-itm1-1.xx.fbcdn.net/v/t1.6435-9/83455413_872271626552391_6675737040484564992_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=hEuUzvhMVawAX-0gIm4&_nc_ht=scontent-itm1-1.xx&oh=00_AfCGXIGlHiRUZ91O69Td4qTBAg1b8MAtKy-zhLbS3_eB2w&oe=6385B0A3",
            color: "secondary",
            text: "こちらから生徒を退学させてください。",
            startIcon: <BusinessRoundedIcon />,
            url: "./tab/management",
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
                cardSx={cardSx}
                ButtonSx={ButtonSx}
            />
        </DevelopLayout>
    )
}

export default DevelopHome
