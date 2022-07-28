import { BrowserRouter, Route, Routes } from "react-router-dom"

import LandingPage from "components/pages/landingPage/landingPage";



import { Group, Home } from "components/pages/student"
import { GroupChatLayout } from "components/templates"

import { AddLectures } from "components/pages/teacher"

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

    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<LandingPage />} />
                <Route path="Home" element={<Home/>}/>

                <Route path="group" element={<Group />}>
                    <Route path="" element={<GroupChatLayout groups={groups} />} />
                </Route>

                <Route path="develop" element={<AddLectures />} />
            </Routes>
        </BrowserRouter>
    );

}

export default App;
