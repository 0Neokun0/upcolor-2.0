import { BrowserRouter, Route, Routes } from "react-router-dom"
<<<<<<< HEAD
import LandingPage from "components/pages/landingPage/landingPage";

function App () {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="" element={<LandingPage />} />
        </Routes>
    </BrowserRouter>
  );
=======
import { Group, Home } from "components/pages/student"
import { GroupChatLayout } from "components/templates"

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
                <Route path="" element={<Home />} />

                <Route path="group" element={<Group />}>
                    <Route path="" element={<GroupChatLayout groups={groups} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
>>>>>>> 048caaa603f63f9f4f0bd86c7c4cf629e29cb5ce
}

export default App;
