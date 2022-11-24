import axios from 'axios'
import { Box, Grid, IconButton, Tooltip } from "@mui/material"
import { useEffect, useState } from 'react'
import CorporateFareIcon from "@mui/icons-material/CorporateFare"
import BadgeIcon from "@mui/icons-material/Badge"
import MapIcon from "@mui/icons-material/Map"
import FolderCopyIcon from "@mui/icons-material/FolderCopy"
import TryIcon from "@mui/icons-material/Try"

import HailIcon from "@mui/icons-material/Hail"
import SchemaIcon from "@mui/icons-material/Schema"
import EventSeatIcon from "@mui/icons-material/EventSeat"
import GroupsIcon from "@mui/icons-material/Groups"
import LockOpenIcon from "@mui/icons-material/LockOpen"
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts"
import SettingsIcon from "@mui/icons-material/Settings"
import ContactsIcon from "@mui/icons-material/Contacts"

import TodayIcon from "@mui/icons-material/Today"
import WebIcon from "@mui/icons-material/Web"
import HouseIcon from "@mui/icons-material/House"
import InstagramIcon from "@mui/icons-material/Instagram"
import MenuIcon from "@mui/icons-material/Menu"
import { CompanyHomeLayout } from "components/templates"
import { CompanyProfile } from "."
import logo from "components/atoms/logo/upcolor_logo.svg"
import { MainMenuCompanyDrawer } from "components/organisms"

const CompanyHome = () => {
    const [companyMenuOpen, setCompanyMenuOpen] = useState(false)
    const [company, setCompany] = useState([])

    const handleDrawerToggle = () => {
        setCompanyMenuOpen(!companyMenuOpen)
    }

    useEffect(() => {
        axios.post("/company/getCompanyProfile")
        .then((res) => {
            console.log(res.data)
            setCompany(res.data)
        })
    }, [])

    const menus = [
        {
            value: "グループ投稿",
            icon: <GroupsIcon />,
            url: "#",
        },
        {
            value: "グループ認証",
            icon: <LockOpenIcon />,
            url: "#",
        },
        {
            value: "グループ管理",
            icon: <ManageAccountsIcon />,
            url: "#",
        },
        {
            value: "企業プロフィール編集",
            icon: <SettingsIcon />,
            url: "/company/profile/edit",
        },
        {
            value: "学生プロフィール閲覧",
            icon: <ContactsIcon />,
            url: "#",
        },
    ]

    const companyName = company["company_name"]

    const companyOccupation = "業種"

    const companyDetailsTabs = [
        {
            companyDetailsTabsRow: "会社紹介記事",
            companyDetailsIcon: <CorporateFareIcon />,
            companyDetailsImage:
                "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg",
            companyDetailsData:
                "本社には「デジタル工房」を設置。デジタルトランスフォーメーションを加速させる実験的な取り組みを、顧客にアピールする場として活用されている。",
        },
        {
            companyDetailsTabsRow: "プロフィール",
            companyDetailsIcon: <BadgeIcon />,
            companyDetailsImage:
                "https://slidemodel.com/wp-content/uploads/30050-01-company-profile-powerpoint-template-1.jpg",
            companyDetailsData:
                "DXCテクノロジーは、フォーチュン500にランクインするITサービス市場のグローバルリーダーです。世界70カ国以上、130,000人以上の従業員が、お客様にとって重要なサービスを提供し、信頼を獲得しています。私たちはテクノロジーの力を活用して、ミッションクリティカルなITサービスをエンタープライズテクノロジースタック全体で提供し、お客様のビジネスを支えています。。",
        },
        {
            companyDetailsTabsRow: "本社所在地",
            companyDetailsIcon: <MapIcon />,
            companyDetailsImage:
                "https://job.mynavi.jp/common/img23/advance/228893-01ol.jpg",
            companyDetailsData: "本社: 火星",
        },
        {
            companyDetailsTabsRow: "事業内容",
            companyDetailsIcon: <FolderCopyIcon />,
            companyDetailsImage:
                "https://job.mynavi.jp/common/img23/crp_thumb/228893-thumb1_0001.jpg",
            companyDetailsData:
                "・保険業界向けBPaaSとBPO,顧客満足度の向上、ビジネスプロセスの最適化、コストの削減、機敏性の向上を実現するビジネスプロ",
        },
        {
            companyDetailsTabsRow: "社長.代表.CEO.メッセージ",
            companyDetailsIcon: <TryIcon />,
            companyDetailsImage:
                "https://job.mynavi.jp/common/img23/crp_thumb/228893-thumb4_0002.jpg",
            companyDetailsData:
                "ITサービスのグローバルリーダーであるDXC Technologyのミッションは、「お客様の成功と従業員の成長を実現すること」です。全社のミッションのひとつとして「従業員の成長」を掲げる理由は、ITサービスがまさにピープルビジネスであり、人材が価値の源泉となるからです。社員一人ひとりが自己実現に向けて挑戦し成長することで、人材としての価値が高まり、会社の成長にダイレクトにつながります。",
        },
    ]

    const companyRecruitmentTabs = [
        {
            companyRecruitmentRow: "募集要項",
            companyRecruitmentIcon: <HailIcon />,
            companyRecruitmentImage:
                "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg",
            companyRecruitmentData: "うちの会社は○○です。",
        },
        {
            companyRecruitmentRow: "採用フロー",
            companyRecruitmentIcon: <SchemaIcon />,
            companyRecruitmentImage:
                "https://slidemodel.com/wp-content/uploads/30050-01-company-profile-powerpoint-template-1.jpg",
            companyRecruitmentData:
                "うちの会社何やっているか分からないですが、是非ご来社宜しくお願い致します。",
        },
        {
            companyRecruitmentRow: "問合せ先",
            companyRecruitmentIcon: <EventSeatIcon />,
            companyRecruitmentImage:
                "https://slidemodel.com/wp-content/uploads/30050-01-company-profile-powerpoint-template-1.jpg",
            companyRecruitmentData: "本社: 火星",
        },
    ]

    const companyLinksTabs = [
        {
            companyLinksRow: "学内説明会",
            companyLinkIcon: <TodayIcon />,
            companyLinksData: "wwww.marumarukaisha.com",
        },
        {
            companyLinksRow: "マイナビ．リクナビ",
            companyLinkIcon: <WebIcon />,
            companyLinksData: "wwww.marumarukaishamynabi.com",
        },
        {
            companyLinksRow: "ホームページ",
            companyLinkIcon: <HouseIcon />,
            companyLinksData: "wwww.marumarukaisha.com",
        },
        {
            companyLinksRow: "SNS",
            companyLinkIcon: <InstagramIcon />,
            companyLinksData: "wwww.marumarukaishainstagram.com",
        },
    ]

    return (
        <CompanyHomeLayout>
            <Box>
                <Grid
                    container
                    spacing={2}
                    columns={10}
                >
                    <Grid
                        item
                        xs={2}
                    >
                        <MainMenuCompanyDrawer
                            logo={logo}
                            menus={menus}
                            companyMenuOpen={companyMenuOpen}
                            handleDrawerToggle={handleDrawerToggle}
                        />
                        <Box
                            sx={{
                                p: 2,
                                width: "30%",
                            }}
                        >
                            <Tooltip
                                title="メニュー表示">
                                <IconButton
                                    color="inherit"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    sx={{ mr: 2, display: { md: "block", lg: "none" } }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Grid>

                    <Grid
                        item
                        xs={8}
                    >
                        <CompanyProfile
                            handleDrawerToggle={handleDrawerToggle}
                            companyName={companyName}
                            companyOccupation={companyOccupation}
                            companyDetailsTabs={companyDetailsTabs}
                            companyRecruitmentTabs={companyRecruitmentTabs}
                            companyLinksTabs={companyLinksTabs}
                        />
                    </Grid>
                </Grid>
            </Box>
        </CompanyHomeLayout>
    )
}

export default CompanyHome
