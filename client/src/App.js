import axios from "axios"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"

import { LandingPage, SignIn, SignUp } from "components/pages"
import { AddLectures } from "components/pages/teacher"
import { Group, Home, RegistTimeTable, ShowTimeTable } from "components/pages/student"

import { GroupChatLayout } from "components/templates"
import { Feed, FeedDetail, Header } from "components/organisms"
import { Box } from "@mui/material"


import logo from "components/atoms/logo/upcolor_logo.svg"
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded'
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded'

function App() {
    const [open, setOpen] = useState(false);
    const [signInState, setSignInState] = useState("");

    const menus = [
        {
            icon: <PeopleAltRoundedIcon />,
            value: "学生",
            url: "#",
        },
        {
            icon: <SchoolRoundedIcon />,
            value: "学校",
            url: "#",
        },
        {
            icon: <BusinessRoundedIcon />,
            value: "企業",
            url: "#",
        },
    ]

    const groups = [
        {
            id: 1,
            name: "Valorant",
            latest: "key/o難しい",
            time: "YYYY/MM/DD",
        },
        {
            id: 2,
            name: "Valorant",
            latest: "key/o難しい",
            time: "YYYY/MM/DD",
        },
        {
            id: 3,
            name: "Valorant",
            latest: "key/o難しい",
            time: "YYYY/MM/DD",
        },
        {
            id: 4,
            name: "Valorant",
            latest: "key/o難しい",
            time: "YYYY/MM/DD",
        },
    ]

    const toggleSignout = () => {
        axios.post("/account/signout")
            .then(() => {
                sessionStorage.removeItem('AUTHORITY');
                window.location.reload();
            })
    }

    const toggleAlertOpen = () => {
        setOpen(true);
    }
    const toggleAlertClose = () => {
        setOpen(false);
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

        if (myAuthority === "TEACHER") {
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

                    <Route path="signin" element={<ReqNoAuth component={<SignIn />} />} />
                    <Route path="signup" element={<SignUp />} />

                    <Route path="Home" element={<ReqAuthStu component={<Home />} />} >
                        <Route path="" element={<Feed />} />
                        <Route path=":postId" element={<FeedDetail />} />
                    </Route>

                    <Route path="group" element={<Group />}>
                        <Route path="" element={<GroupChatLayout groups={groups} />} />
                    </Route>

                    <Route path="timeTable" element={<ReqAuthStu component={<ShowTimeTable />} />} >
                        <Route path="regist" element={<RegistTimeTable />} />
                    </Route>

                    <Route path="develop" element={<ReqAuthAdm component={<AddLectures />} />} />
                </Routes>
            </BrowserRouter>
        </Box>
    )
}

export default App;
