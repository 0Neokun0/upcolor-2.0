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
        },
        {
            id: 2,
            name: "Valorant",
            latest: "key/o難しい",
        },
        {
            id: 3,
            name: "Valorant",
            latest: "key/o難しい",
        },
        {
            id: 4,
            name: "Valorant",
            latest: "key/o難しい",
        },
    ]

    const toggleSignout = () => {
        axios.post("/account/signout").then(() => {
            window.location.reload();
        })
    }
    
    const toggleAlertOpen = () => {
        setOpen(true);
    }
    const toggleAlertClose = () => {
        setOpen(false);
    }

    useEffect(() => {
        axios.post("/account/signState")
        .then((res) => {
            setSignInState(res.data);
        });
    }, []);

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

                    <Route path="signin" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />

                    <Route path="Home" element={<Home />}>
                        <Route path="" element={<Feed />} />
                        <Route path=":postId" element={<FeedDetail />} />
                    </Route>

                    <Route path="group" element={<Group />}>
                        <Route path="" element={<GroupChatLayout groups={groups} />} />
                    </Route>
                    
                    <Route path="timeTable" element={<ShowTimeTable />}>
                        <Route path="regist" element={<RegistTimeTable />} />
                    </Route>

                    <Route path="develop" element={<AddLectures />} />
                </Routes>
            </BrowserRouter>
        </Box>
    );

}

export default App;
