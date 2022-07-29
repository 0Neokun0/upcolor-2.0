import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Group, Home, SignIn, RegistTimeTable, ShowTimeTable } from "components/pages/student"
import { LandingPage } from "components/pages"

import { GroupChatLayout } from "components/templates"
import { Feed, FeedDetail } from "components/organisms"

import { AddLectures } from "components/pages/teacher"
import StudentInput from "components/pages/student/studentInput"
import TeacherInput from "components/pages/teacher/teacherInput"
import CompanyInput from "components/pages/company/companyInput"

function App() {
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

    const ReqAuthStu = (props) => {
        const myAuthority = sessionStorage.getItem("AUTHORITY")

        if (myAuthority === "STUDENT") {
            return props.component
        } else if (myAuthority == null) {
            document.location = "/login"
        }

        document.location = "/"
    }

    const ReqAuthTea = (props) => {
        const myAuthority = sessionStorage.getItem("AUTHORITY")

        if (myAuthority === "TEACHER") {
            return props.component
        } else if (myAuthority == null) {
            document.location = "/login"
        }

        document.location = "/"
    }

    const ReqAuthCom = (props) => {
        const myAuthority = sessionStorage.getItem("AUTHORITY")

        if (myAuthority === "COMPANY") {
            return props.component
        } else if (myAuthority == null) {
            document.location = "/login"
        }

        document.location = "/"
    }

    const ReqAuthAdm = (props) => {
        const myAuthority = sessionStorage.getItem("AUTHORITY")

        if (myAuthority === "ADMIN") {
            return props.component
        } else if (myAuthority == null) {
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

    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<LandingPage />} />

                <Route path="signin" element={<ReqNoAuth component={<SignIn />} />} />

                <Route path="Home" element={<ReqAuthStu component={<Home />} />} >
                    <Route path="" element={<Feed />} />
                    <Route path=":postId" element={<FeedDetail />} />
                </Route>

                <Route path="/group" element={<Group />}>
                    <Route path="" element={<GroupChatLayout groups={groups} />} />
                </Route>

                <Route path="timeTable" element={<ReqAuthStu component={<ShowTimeTable />} />} >
                    <Route path="regist" element={<RegistTimeTable />} />
                </Route>

                <Route path="develop" element={<ReqAuthAdm component={<AddLectures />} />} />

                <Route path="studentInput" element={<StudentInput/>} /> 
                <Route path="teacherInput" element={<TeacherInput/>} /> 
                <Route path="companyInput" element={<CompanyInput/>} />

            
            </Routes>
        </BrowserRouter>
    );

}

export default App;
