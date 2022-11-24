import { LandingPageLayout } from "components/templates"
import { cyan, deepPurple, green, lightGreen } from "@mui/material/colors"

import { Box, Button, Chip, Typography } from "@mui/material"
import logo from "components/atoms/logo/upcolor_logo.svg"
import image from "components/atoms/images/20943572.jpg"
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded'
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded'

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
            <Box
                sx={{
                    pl: "150px",
                    backgroundColor: "white",
                    height: "calc(100vh - 64px)",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Box>
                    {/* <Box
                        sx={{
                            textAlign: "center"
                        }}
                    >
                        <img
                            src={logo}
                            alt="ロゴの画像"
                            height="100px"
                        />

                        <Box>
                            <Chip
                                label="Version 2.0"
                                sx={{
                                    color: "white",
                                    backgroundColor: lightGreen["A700"],
                                    fontWeight: "bold",
                                }}
                            />
                        </Box>
                    </Box> */}

                    <Typography
                        variant="h1"
                    >
                        UPCOLOR
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        color="gray"
                    >
                        去年に引き続きUpColorをバージョンアップして<br />
                        学内交流アプリケーションにしました。
                    </Typography>

                    <Box
                        sx={{
                            mt: 4,
                            display: "flex",
                            justifyContent: "end",
                        }}
                    >
                        <Button
                            variant="outlined"
                            color="secondary"
                            href="/signup/student"
                        >
                            サインアップ
                        </Button>

                        <Button
                            variant="contained"
                            href="/signin"
                            sx={{
                                ml: 2,
                            }}
                        >
                            サインイン
                        </Button>
                    </Box>
                </Box>

                <Box
                    sx={{
                        mx: "auto",
                    }}
                >
                    <img
                        src={image}
                        alt="ロゴの画像"
                        height="600px"
                    />
                </Box>
            </Box>


            <LandingPageLayout
                card={card}
                features={features}
            />
        </Box>
    );
};

export default LandingPage;
