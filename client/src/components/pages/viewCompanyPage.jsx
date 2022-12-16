import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Box, Typography, Tab, Tabs, Tooltip, IconButton } from "@mui/material"
import CompanyPageTitle from "components/molecules/companyPageTitle"
import { CompanyHomeLayout, ContainerXl } from "components/templates"
import CompanyProfileTabs from "components/organisms/companyProfileTabs"
import { CompanyDetailsTab, CompanyLinksTab, CompanyProfile } from "components/organisms"
import PropTypes from "prop-types"

import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded"
import ContactMailIcon from "@mui/icons-material/ContactMail"
import AutoStoriesIcon from "@mui/icons-material/AutoStories"
import CorporateFareIcon from "@mui/icons-material/CorporateFare"
import GradeRoundedIcon from '@mui/icons-material/GradeRounded'
import FolderCopyIcon from "@mui/icons-material/FolderCopy"
import TryIcon from "@mui/icons-material/Try"
import WebIcon from "@mui/icons-material/Web"
import HouseIcon from "@mui/icons-material/House"
import HailIcon from "@mui/icons-material/Hail"
import SchemaIcon from "@mui/icons-material/Schema"
import EventSeatIcon from "@mui/icons-material/EventSeat"
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import MapIcon from '@mui/icons-material/Map'
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded'

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
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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

const ViewCompanyPage = () => {
    const companyId = useParams()["viewCompany"]
    const [company, setCompany] = useState([])

    const [value, setValue] = useState(0)

    const backPage = () => {
        window.history.back()
    }

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    useEffect(() => {
        axios
            .post("/company/getCompany", { companyId: companyId })
            .then((res) => {
                console.log(res.data)
                setCompany(res.data)
            })
    }, [])

    return (
        <ContainerXl>
            <Tooltip
                title="企業・会社一覧に戻る"
                placement="right"
                size="small"
            >
                <IconButton
                    onClick={backPage}
                >
                    <KeyboardBackspaceRoundedIcon />
                </IconButton>
            </Tooltip>
            {
                company
                    ?
                    <CompanyHomeLayout>
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
                                        label="SNS.リンク"
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
                                        title={"社長メッセージ"}
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
                    :
                    <Typography>
                        企業プロフィールが見つかりません
                    </Typography>

            }
        </ContainerXl>
    )
}

export default ViewCompanyPage
