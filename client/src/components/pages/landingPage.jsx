import { cyan, deepPurple, green } from "@mui/material/colors"
import { Box, Button, Container, Hidden, IconButton, Typography } from "@mui/material"
import logo from "components/atoms/logo/upcolor_logo.svg"
import image from "components/atoms/images/20943572.jpg"
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded'
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded'
import { Footer, LandingPageFeature } from "components/organisms"
import { useEffect, useState } from "react"

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
const LandingPage = (props) => {
    const [showsScrolBtn, setShowScrolBtn] = useState(false)

    useEffect(() => {
        const handleButtonVisibility = () => {
            window.pageYOffset > 300 ? setShowScrolBtn(true) : setShowScrolBtn(false)
        }

        window.addEventListener("scroll", handleButtonVisibility)
        return () => {
            window.addEventListener("scroll", handleButtonVisibility)
        }
    }, [])

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
                    backgroundColor: "white",
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        width: "fit-content",
                        height: "calc(100vh - 64px)",
                        mx: "auto",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    {/* <<< 左要素 */}
                    <Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src={logo}
                                alt="ロゴの画像"
                                height="100px"
                            />

                            <Typography
                                variant="h1"
                                sx={{
                                    ml: 2,
                                }}
                            >
                                UPCOLOR
                            </Typography>

                        </Box>

                        <Typography
                            color="gray"
                            sx={{
                                ml: "129px"
                            }}
                        >
                            ここではプロフィールのテンプレート、<br />
                            個人間のチャット、ポートフォリオの展示など様々な機能があります。
                        </Typography>

                        <Box
                            sx={{
                                mt: 4,
                                display: "flex",
                                justifyContent: "end",
                            }}
                        >
                            {
                                props["signInState"]
                                    ?
                                    <Typography
                                        variant="h4"
                                    >
                                        ようこそ
                                    </Typography>

                                    :
                                    <Box>
                                        <Button
                                            variant="outlined"
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
                            }
                        </Box>
                    </Box>
                    {/* 左要素 >>> */}

                    {/* <<< 右要素 */}
                    <Hidden
                        lgDown
                    >
                        <Box
                            sx={{
                                ml: 8,
                            }}
                        >
                            <Box
                                component="img"
                                src={image}
                                alt="イメージ"
                                height="500px"
                            />
                        </Box>
                    </Hidden>
                    {/* 右要素 >>> */}
                </Box>

                <Hidden
                    lgDown
                >
                    <LandingPageFeature
                        features={features}
                    />
                </Hidden>
            </Box>

            <Container
                maxWidth="md"
                sx={{
                    mt: 24,
                    py: 2,
                }}
            >
                <Box
                    sx={{
                        display: "flex"
                    }}
                >
                    <Box
                        component="img"
                        src="/company.png"
                        sx={{
                            border: 1,
                            width: "400px",
                            borderColor: "gray",
                        }}
                    />

                    <Box
                        sx={{
                            ml: 8,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "1.5em",
                                fontWeight: "bold",
                            }}
                        >
                            登録企業閲覧
                        </Typography>

                        <Typography>
                            学生は企業様に登録していただいた会社情報を、業種や都道府県等でフィルターし、閲覧することができます。
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        mt: 12,
                    }}
                >
                    <Box
                        sx={{
                            mr: 8,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "1.5em",
                                fontWeight: "bold",
                            }}
                        >
                            進級制作管理
                        </Typography>

                        <Typography>
                            進級制作の作品説明や、差別化点などを登録することができます。また、ガントチャートにより進捗を管理することもできます。
                        </Typography>
                    </Box>

                    <Box
                        component="img"
                        src="/teamWork.png"
                        sx={{
                            border: 1,
                            width: "400px",
                            borderColor: "gray",
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        mt: 12,
                    }}
                >
                    <Box
                        component="img"
                        src="/class.png"
                        sx={{
                            border: 1,
                            width: "400px",
                            borderColor: "gray",
                        }}
                    />

                    <Box
                        sx={{
                            ml: 8,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "1.5em",
                                fontWeight: "bold",
                            }}
                        >
                            ニュース
                        </Typography>

                        <Typography>
                            投稿されたニュースは、設定された対象コースに応じて、学生のホームに表示されます。
                        </Typography>
                    </Box>
                </Box>

                {
                    showsScrolBtn
                    &&
                    <IconButton
                        sx={{
                            position: 'fixed',
                            bottom: '40px',
                            right: '40px',
                            bgcolor: "#42a5f5",
                            color: '#fff',
                            textAlign: 'center',
                        }}
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                            })
                        }}

                    >
                        <KeyboardArrowUpIcon />
                    </IconButton>
                }
            </Container>
            <Footer/>
        </Box>
    )
}

export default LandingPage
