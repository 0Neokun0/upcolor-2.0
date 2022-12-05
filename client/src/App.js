import axios from "axios"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"
import { Box } from "@mui/material"


import { ClassNews, ClassNewsFeed, LandingPage, NotFound, Signin, ViewTeamWork } from "components/pages"
import { StudentSignup, StudentHome, Group, Profile, ProfileEdit, ProfileView, RegistTimeTable, ShowTimeTable, TeamWork, TeamList, TeamWorkInvite, StudentList, CompanyList, GroupInvite, PrivateChat } from "components/pages/student"
import { TeacherHome, TeacherSignup, DevelopHome, AddLectures, GenTeacherSign, GenCompanySign, TeacherNews } from "components/pages/teacher"
import { CompanySignup, CompanyHome, CompanyProfileEdit, Recruitment, StudentProfileView } from "components/pages/company"
import { GroupChatLayout } from "components/templates"
import { Feed, FeedDetail, Header } from "components/organisms"
import ClassNewsFeedList from "components/organisms/classNewsFeedList"

import logo from "components/atoms/logo/upcolor_logo.svg"
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded"
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded"
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded"
import GroupCreateLayout from "components/templates/groupCreateLayout"

import WorkspacesIcon from '@mui/icons-material/Workspaces'
import GroupWorkIcon from '@mui/icons-material/GroupWork'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'
import BadgeIcon from '@mui/icons-material/Badge'
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'
import ChatRoundedIcon from '@mui/icons-material/ChatRounded'
import ClassIcon from '@mui/icons-material/Class'
import GroupsIcon from "@mui/icons-material/Groups"
import LockOpenIcon from "@mui/icons-material/LockOpen"
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts"
import SettingsIcon from "@mui/icons-material/Settings"
import ContactsIcon from "@mui/icons-material/Contacts"
import HomeWorkIcon from "@mui/icons-material/HomeWork"
import NewspaperIcon from '@mui/icons-material/Newspaper'

function App() {
    const [open, setOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [signInState, setSignInState] = useState("")
    const [profile, setProfile] = useState([])
    const [teacher, setTeacher] = useState([])
    const [company, setCompany] = useState([])
    const [userType, setUserType] = useState([])


    const [anchorEl, setAnchorEl] = useState(null)
    const openNavbar = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    const menus = [
        {
            label: "学生フィード",
            icon: <PeopleAltRoundedIcon />,
            value: "学生",
            url: "/home",
        },
        {
            label: "クラスニュース",
            icon: <SchoolRoundedIcon />,
            value: "学校",
            url: "/teacher",
        },
        {
            label: "企業検索",
            icon: <BusinessRoundedIcon />,
            value: "企業",
            url: "/list/company",
        },
    ]

    const drawerMenus = [
        {
            value: "グループ",
            url: "/group",
            icon: <WorkspacesIcon />,
        },
        {
            value: "自分の進級制作",
            url: "/teamwork",
            icon: <GroupWorkIcon />,

        },
        {
            value: "みんなの進級制作",
            url: "/teamlist",
            icon: <AccountTreeIcon />,
        },
        {
            value: "ユーザー",
            url: "/list/student",
            icon: <PersonSearchIcon />,
        },
        {
            value: "プロフィール",
            url: "/profile",
            icon: <BadgeIcon />,
        },
        {
            value: "個人チャット",
            url: "/chat",
            icon: <ChatRoundedIcon />,
        },
        {
            value: "時間割",
            url: "/timeTable/regist",
            icon: <ViewTimelineIcon />,
        },
        {
            value: "クラスニューズ",
            url: "/classNews",
            icon: <ClassIcon />,
        },
        {
            value: "設定",
            url: "#",
            icon: <SettingsSuggestIcon />,
        },
    ]

    const companyDrawerMenus = [
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
            value: "学生プロフィール閲覧",
            icon: <ContactsIcon />,
            url: "/list/student",
        },
        {
            value: "企業・会社プロフィール閲覧",
            icon: <HomeWorkIcon />,
            url: "/list/company",
        },
        {
            value: "企業プロフィール編集",
            icon: <SettingsIcon />,
            url: "/company/profile/edit",
        },
    ]

    const teacherDrawerMenus = [
        {
            value: "ニューズ投稿",
            icon: <NewspaperIcon/>,
            url: "/teacher/teachernews",
        },
        {
            value: "クラスニューズ",
            url: "/classNews",
            icon: <ClassIcon />,
        },
        {
            value: "学生管理",
            icon: <ManageAccountsIcon />,
            url: "#",
        },
        {
            value: "学生プロフィール閲覧",
            icon: <ContactsIcon />,
            url: "/list/student",
        },
        {
            value: "企業・会社プロフィール閲覧",
            icon: <HomeWorkIcon />,
            url: "/list/company",
        },
        {
            value: "先生プロフィール編集",
            icon: <SettingsIcon />,
            url: "#",
        },
    ]



    const toggleSignout = () => {
        axios.post("/account/signout")
            .then(() => {
                sessionStorage.removeItem('AUTHORITY')
                window.location.href = "/"
            })
    }

    const toggleAlertOpen = () => {
        setOpen(true)
    }
    const toggleAlertClose = () => {
        setOpen(false)
    }

    const ReqAuthStu = (props) => {
        const myAuthority = sessionStorage.getItem("AUTHORITY")

        if (myAuthority === "STUDENT") {
            return props.component
        } else if (myAuthority === null) {
            document.location = "/login"
        }

        document.location = "/"
    }

    const ReqAuthTea = (props) => {
        const myAuthority = sessionStorage.getItem("AUTHORITY")

        if (myAuthority === "TEACHER" || myAuthority === "ADMIN") {
            return props.component
        } else if (myAuthority === null) {
            document.location = "/login"
        }

        document.location = "/"
    }

    const ReqAuthCom = (props) => {
        const myAuthority = sessionStorage.getItem("AUTHORITY")

        if (myAuthority === "COMPANY") {
            return props.component
        } else if (myAuthority === null) {
            document.location = "/login"
        }

        document.location = "/"
    }

    const ReqAuthAdm = (props) => {
        const myAuthority = sessionStorage.getItem("AUTHORITY")

        if (myAuthority === "ADMIN") {
            return props.component
        } else if (myAuthority === null) {
            document.location = "/login"
        }

        document.location = "/"
    }

    const ReqNoAuth = (props) => {
        const myAuthority = sessionStorage.getItem("AUTHORITY")

        if (myAuthority === null) {
            return props.component
        }

        document.location = "/"
    }

    useEffect(() => {
        axios.post("/account/signState")
            .then((res) => {
                if (res.data) {
                    const authority = res.data["type_name"]
                    sessionStorage.setItem("AUTHORITY", authority)
                    setSignInState(true)
                } else {
                    setSignInState(false)
                }
            })
    }, [])

    useEffect(() => {
        axios.post("/account/getProfile")
            .then((res) => {
                setProfile(res.data)
                console.log(res.data)
            })
    }, [])

    useEffect(() => {
        axios.post("/account/getTeacherProfile")
            .then((res) => {
                setTeacher(res.data)
                console.log(res.data)
            })
    }, [])

    useEffect(() => {
        axios.post("/company/getCompanyProfile")
            .then((res) => {
                setCompany(res.data)
                console.log(res.data)
            })
    }, [])

    useEffect(() => {
            axios.post("/account/getUserType")
                .then((res) => {
                    setUserType(res.data)
                    console.log(res.data)
                })
        }, [])

    return (
        <Box>
            <BrowserRouter>
                <Header
                    logoSrc={logo}
                    name={"UPCOLOR"}
                    signInState={signInState}
                    openNavbar={openNavbar}
                    anchorEl={anchorEl}
                    handleClick={handleClick}
                    handleClose={handleClose}
                    open={open}
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                    toggleAlertOpen={toggleAlertOpen}
                    toggleAlertClose={toggleAlertClose}
                    toggleSignout={toggleSignout}
                    userType={userType}
                    profile={profile}
                    teacher={teacher}
                    company={company}
                    menus={menus}
                    drawerMenus={drawerMenus}
                    companyDrawerMenus={companyDrawerMenus}
                    teacherDrawerMenus={teacherDrawerMenus}
                />

                <Routes>
                    <Route path="/" element={<LandingPage signInState={signInState} />} />
                    <Route path="*" element={<NotFound />} />

                    {/* <Route path="student/signup" element={<ReqNoAuth component={<StudentSignup />} />} /> */}
                    {/* <Route path="teacher/signup" element={<ReqNoAuth component={<TeacherSignup />} />} /> */}
                    {/* <Route path="company/signup" element={<ReqNoAuth component={<CompanySignup />} />} /> */}
                    <Route path="signup/student" element={<StudentSignup />} />
                    <Route path="signup/teacher/:token" element={<TeacherSignup />} />
                    <Route path="signup/company/:token" element={<CompanySignup />} />

                    {/* <Route path="signin" element={<ReqNoAuth component={<Signin />} />} /> */}
                    <Route path="signin" element={<Signin />} />

                    <Route path="home" element={<ReqAuthStu component={<StudentHome />} />}>
                        <Route path="" element={<Feed />} />
                        <Route path=":postId" element={<FeedDetail />} />
                    </Route>

                    <Route path="group" element={<Group />}>
                        <Route path="" element={<GroupChatLayout />} />
                        <Route path="create" element={<GroupCreateLayout />} />
                    </Route>

                    <Route path="groupInvite">
                        <Route path="" element={<NotFound />} />
                        <Route path=":inviteToken" element={<GroupInvite />} />
                    </Route>

                    <Route path="teamWork">
                        <Route path="" element={<TeamWork />} />
                        <Route path=":teamId" element={<ViewTeamWork />} />
                    </Route>
                    <Route path="teamList" element={<TeamList />} />
                    <Route path="teamWorkInvite">
                        <Route path="" element={<NotFound />} />
                        <Route path=":inviteToken" element={<TeamWorkInvite />} />
                    </Route>

                    <Route path="profile">
                        <Route path="" element={<Profile />} />
                        <Route path=":userId" element={<ProfileView />} />
                    </Route>

                    <Route path="profile/edit" element={<ProfileEdit />} />

                    <Route path="chat">
                        <Route path="" element={<PrivateChat />} />
                    </Route>

                    <Route path="list/student" element={<StudentList />} />
                    <Route path="list/company" element={<CompanyList />} />

                    <Route path="timeTable" element={<ShowTimeTable />} />
                    <Route path="timeTable/regist" element={<RegistTimeTable />} />

                    {/* <Route path="timeTable" element={<ReqAuthStu component={<ShowTimeTable />} />} />
                    <Route path="timeTable/regist" element={<ReqAuthStu component={<RegistTimeTable />} />} /> */}

                    <Route path="teacher" element={<ReqAuthTea component={<TeacherHome />} />} />
                    <Route path="teacher/teacherNews" element={<ReqAuthTea component={<TeacherNews />} />} />

                    <Route path="classNews">
                        <Route path="" element={<ClassNews />} />
                        <Route path=":classId" element={<ClassNewsFeed />} />
                        <Route path=":classNewsTextId" element={<ClassNewsFeedList />} />
                    </Route>

                    <Route path="develop" element={<ReqAuthAdm component={<DevelopHome />} />} />
                    <Route path="develop/addLectures" element={<ReqAuthAdm component={<AddLectures />} />} />
                    <Route path="develop/genTeacherSign" element={<ReqAuthAdm component={<GenTeacherSign />} />} />
                    <Route path="develop/genCompanySign" element={<ReqAuthAdm component={<GenCompanySign />} />} />

                    <Route path="company/home" element={<CompanyHome />} />
                    <Route path="company/profile/edit" element={<CompanyProfileEdit />} />
                    <Route path="company/profile">
                        <Route path=":userId" element={<ReqAuthCom component={<StudentProfileView />} />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Box>
    )
}

export default App
