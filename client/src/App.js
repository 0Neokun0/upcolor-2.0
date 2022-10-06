import axios from "axios"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"
import { Box } from "@mui/material"

import { LandingPage, NotFound, Signin } from "components/pages"

import { StudentSignup, StudentHome, Group, Profile, ProfileEdit, ProfileView, RegistTimeTable, ShowTimeTable, TeamWork, TeamWorkInfo, TeamList, TeamWorkInvite, CompanyList, GroupInvite } from "components/pages/student"
import { TeacherSignup, DevelopHome, AddLectures, GenTeacherSign, GenCompanySign, TeacherHome} from "components/pages/teacher"
import { CompanySignup, CompanyHome, Recruitment } from "components/pages/company"

import { ClassRoomLayout, GroupChatLayout } from "components/templates"
import { Feed, FeedDetail, Header } from "components/organisms"

import logo from "components/atoms/logo/upcolor_logo.svg"
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded'
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded'
import GroupCreateLayout from "components/templates/groupCreateLayout"


function App() {
    const [open, setOpen] = useState(false)
    const [signInState, setSignInState] = useState("")

    const menus = [
        {
            icon: <PeopleAltRoundedIcon />,
            value: "学生",
            url: "/",
        },
        {
            icon: <SchoolRoundedIcon />,
            value: "学校",
            url: "/teacher/home",
        },
        {
            icon: <BusinessRoundedIcon />,
            value: "企業",
            url: "/company/home",
        },
    ]

    const toggleSignout = () => {
        axios.post("/account/signout")
            .then(() => {
                sessionStorage.removeItem('AUTHORITY')
                window.location.reload()
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

    return (
        <Box>
            <Header
                logoSrc={logo}
                name={"UPCOLOR"}
                menus={menus}
                signInState={signInState}
                open={open}
                toggleAlertOpen={toggleAlertOpen}
                toggleAlertClose={toggleAlertClose}
                toggleSignout={toggleSignout}
            />

            <BrowserRouter>
                <Routes>
                    <Route path="" element={<LandingPage />} />
                    <Route path="*" element={<NotFound />} />

                    {/* <Route path="student/signup" element={<ReqNoAuth component={<StudentSignup />} />} /> */}
                    {/* <Route path="teacher/signup" element={<ReqNoAuth component={<TeacherSignup />} />} /> */}
                    {/* <Route path="company/signup" element={<ReqNoAuth component={<CompanySignup />} />} /> */}
                    <Route path="signup/student" element={<StudentSignup />} />
                    <Route path="signup/teacher/:token" element={<TeacherSignup />} />
                    <Route path="signup/company/:token" element={<CompanySignup />} />

                    {/* <Route path="signin" element={<ReqNoAuth component={<Signin />} />} /> */}
                    <Route path="signin" element={<Signin />} />

                    <Route path="home" element={<ReqAuthStu component={<StudentHome />} />} >
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

                    <Route path="teamWork" element={<TeamWork />} />
                    <Route path="teamList" element={<TeamList />} />
                    <Route path="teamWorkInfo" element={<TeamWorkInfo />} />
                    <Route path="teamWorkInvite">
                        <Route path="" element={<NotFound />} />
                        <Route path=":inviteToken" element={<TeamWorkInvite />} />
                    </Route>

                    <Route path="profile">
                        <Route path="" element={<Profile />} />
                        <Route path=":userId" element={<ProfileView />} />
                    </Route>

                    <Route path="profile/edit" element={<ProfileEdit />} />

                    <Route path="companyList" element={<CompanyList />} />


                    <Route path="timeTable" element={<ShowTimeTable />} />
                    <Route path="timeTable/regist" element={<RegistTimeTable />} />

                    {/* <Route path="timeTable" element={<ReqAuthStu component={<ShowTimeTable />} />} />
                    <Route path="timeTable/regist" element={<ReqAuthStu component={<RegistTimeTable />} />} /> */}

                    <Route path="develop" element={<ReqAuthAdm component={<DevelopHome />} />} />
                    <Route path="develop/addLectures" element={<ReqAuthAdm component={<AddLectures />} />} />
                    <Route path="develop/genTeacherSign" element={<ReqAuthAdm component={<GenTeacherSign />} />} />
                    <Route path="develop/genCompanySign" element={<ReqAuthAdm component={<GenCompanySign />} />} />

                    <Route path="company/home" element={<CompanyHome />} />
                    <Route path="teacher/home" element={<TeacherHome />} />
                    <Route path="company/recruitment" element={<Recruitment />} />

                    <Route path="classroom" element={<ClassRoomLayout />} />
                </Routes>
            </BrowserRouter>
        </Box>
    )
}

export default App
