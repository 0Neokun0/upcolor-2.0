import { Box } from "@mui/material"
import { LandingPageLayout } from "components/templates"
import logo from "components/atoms/logo/upcolor_logo.svg"
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded'
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded'
import { cyan, deepPurple, green } from "@mui/material/colors"

const LandingPage = () => {
    const card = {
        logoSrc: logo,
        title1: "UPCOLOR 2.0",
        title2: "学内交流ウェブアプリ",
        subTitle: "去年に引き続きUpColorをバージョンアップして、学内交流アプリケーションにしました。",
    }

    const features = [
        {
            icon: <PeopleAltRoundedIcon />,
            title: "学生",
            color: cyan[400],
            features: [
                "学生プロフィール作成・閲覧",
                "講師投稿閲覧",
                "個人チャット",
                "グループ作成・管理",
                "企業検索・企業情報閲覧",
            ],
        },
        {
            icon: <SchoolRoundedIcon />,
            title: "講師",
            color: green[400],
            features: [
                "講師プロフィール作成・閲覧",
                "講師投稿・ブログ",
                "生徒の進捗閲覧",
                "学生・企業グループ作成",
                "授業スケジュール管理",
            ],
        },
        {
            icon: <BusinessRoundedIcon />,
            title: "企業",
            color: deepPurple[400],
            features: [
                "企業プロフィール作成",
                "企業情報入力",
                "学生と採用フロー",
                "グループ作成・管理",
                "選考グループ作成",
            ],
        },
    ]

    return (
        <Box>
            <LandingPageLayout
                card={card}
                features={features}
            />
        </Box>
    );
};

export default LandingPage
