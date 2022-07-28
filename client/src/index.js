import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Header } from 'components/organisms'
import logo from "components/atoms/logo/upcolor_logo.svg"
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded'
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded'

const root = ReactDOM.createRoot(document.getElementById('root'))

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
root.render(
    <React.StrictMode>
        <Header
            logoSrc={logo}
            name={"UPCOLOR"}
            menus={menus}
        />

        <App />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
