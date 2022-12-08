import { Box, Hidden, Tab, Tabs } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import PropTypes from "prop-types"

import CompanyHomeLayout from "components/templates/companyHomeLayout"
import { CompanyLinksTab, CompanyProfile } from "components/organisms"
import CompanyDetailsTab from "components/organisms/companyDetailsTab"

import GroupsIcon from "@mui/icons-material/Groups"
import LockOpenIcon from "@mui/icons-material/LockOpen"
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts"
import SettingsIcon from "@mui/icons-material/Settings"
import ContactsIcon from "@mui/icons-material/Contacts"
import MainMenuCompany from "components/organisms/mainMenuCompany"
import CompanyProfileTabs from "components/organisms/companyProfileTabs"
import CompanyPageTitle from "components/molecules/companyPageTitle"
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded"
import ContactMailIcon from "@mui/icons-material/ContactMail"
import AutoStoriesIcon from "@mui/icons-material/AutoStories"
import CorporateFareIcon from "@mui/icons-material/CorporateFare"
import GradeRoundedIcon from "@mui/icons-material/GradeRounded"
import FolderCopyIcon from "@mui/icons-material/FolderCopy"
import TryIcon from "@mui/icons-material/Try"
import WebIcon from "@mui/icons-material/Web"
import HouseIcon from "@mui/icons-material/House"
import HomeWorkIcon from "@mui/icons-material/HomeWork"
import HailIcon from "@mui/icons-material/Hail"
import SchemaIcon from "@mui/icons-material/Schema"
import EventSeatIcon from "@mui/icons-material/EventSeat"
import EmailRoundedIcon from "@mui/icons-material/EmailRounded"
import MapIcon from '@mui/icons-material/Map'
function TabPanel(props) {
    const { children, value, index, ...other } = props
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    }
}



const CompanyHome = () => {
    const [company, setCompany] = useState([])
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    useEffect(() => {
        axios.post("/company/getCompanyProfile")
            .then((res) => {
                setCompany(res.data)
            })
    }, [])

    const companyMenus = [
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
            value: "学生閲覧",
            icon: <ContactsIcon />,
            url: "/list/student",
        },
        {
            value: "企業・会社閲覧",
            icon: <HomeWorkIcon />,
            url: "/list/company",
        },
        {
            value: "企業プロフィール編集",
            icon: <SettingsIcon />,
            url: "/company/profile/edit",
        },
    ]

    return (
        company
        &&
        <CompanyHomeLayout>
            <Hidden
                mdDown
            >
                <Box
                    sx={{
                        p: 2,
                        width: 400,
                        height: 400,
                    }}
                >
                    <MainMenuCompany
                        company={company}
                        companyMenus={companyMenus}
                    />
                </Box>
            </Hidden>


            <CompanyProfile>
                <CompanyPageTitle
                    company={company}
                />

                <CompanyProfileTabs>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="inherit"
                        indicatorColor="gray"
                        centered
                    >
                        <Tab
                            label="会社概要"
                            icon={<BusinessRoundedIcon />}
                            iconPosition="top"
                            {...a11yProps(0)}
                        />

                        <Tab
                            label="採用データ"
                            icon={<ContactMailIcon />}
                            iconPosition="top"
                            {...a11yProps(1)}
                        />

                        <Tab
                            label="リンク・連絡先"
                            icon={<AutoStoriesIcon />}
                            iconPosition="top"
                            {...a11yProps(2)}
                        />
                    </Tabs>

                    <TabPanel
                        value={value}
                        index={0}
                    >
                        <CompanyDetailsTab
                            title={"会社紹介"}
                            icon={<CorporateFareIcon />}
                            content={company["introduction"]}
                            imageSrc="https://i.ibb.co/vBYCcGx/Company-Profile.jpg"
                        />

                        <CompanyDetailsTab
                            title={"事業内容"}
                            icon={<FolderCopyIcon />}
                            content={company["business"]}
                            imageSrc="https://i.ibb.co/HCkYD7V/company-Content.png"
                        />

                        <CompanyDetailsTab
                            title={"社長・CEO"}
                            icon={<GradeRoundedIcon />}
                            content={company["manager_name"]}
                            imageSrc="https://i.ibb.co/jyCvZYn/managername.png"
                        />

                        <CompanyDetailsTab
                            title={"社長・CEOメッセージ"}
                            icon={<TryIcon />}
                            content={company["ceo_message"]}
                            imageSrc="https://i.ibb.co/X89S1Zn/manager-Speech.png"
                        />

                        <CompanyDetailsTab
                            title={"本社"}
                            icon={<EventSeatIcon />}
                            content={company["address"]}
                            imageSrc="https://i.ibb.co/JpFNK60/location-headquarters.jpg"
                        />
                    </TabPanel>

                    <TabPanel
                        value={value}
                        index={1}
                    >
                        <CompanyDetailsTab
                            title={"業種情報"}
                            icon={<SchemaIcon />}
                            content={company["occupation_names"]}
                            imageSrc="https://i.ibb.co/By2DNpr/companyoccupations.jpg"
                        />

                        <CompanyDetailsTab
                            title={"専攻募集"}
                            icon={<HailIcon />}
                            content={company["course_names"]}
                            imageSrc="https://i.ibb.co/mD0TS6m/recruiting.jpg"
                        />

                        <CompanyDetailsTab
                            title={"支社地域"}
                            icon={<MapIcon />}
                            content={company["prefecture_names"]}
                            imageSrc="https://i.ibb.co/mRQw5Gh/companylocations.jpg"
                        />
                    </TabPanel>

                    <TabPanel
                        value={value}
                        index={2}
                    >
                        <CompanyLinksTab
                            title={"企業ページ"}
                            icon={<HouseIcon />}
                            link={company["homepage_url"]}
                        />
                        <CompanyLinksTab
                            title={"企業リクナビ・マイナビページ"}
                            icon={<WebIcon />}
                            link={company["jobsite_url"]}
                        />
                        <CompanyLinksTab
                            title={"企業・会社・メール"}
                            icon={<EmailRoundedIcon />}
                            link={company["manager_mail"]}
                        />
                    </TabPanel>
                </CompanyProfileTabs>
            </CompanyProfile>
        </CompanyHomeLayout>
    )
}

export default CompanyHome
