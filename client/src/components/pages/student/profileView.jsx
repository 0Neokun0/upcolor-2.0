import axios from "axios"
import { ProfileStudentDetail } from "components/organisms"
import { ProfileLayout } from "components/templates"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded'
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import GitHubIcon from '@mui/icons-material/GitHub'

const ProfileView = () => {
    const userId = useParams()["userId"]
    const [profile, setProfile] = useState([])
    const [profileLists, setProfileLists] = useState([])

    useEffect(() => {
        axios.post("/account/getStudentProfile", {
            userId: userId,
        })
            .then((res) => {
                setProfile(res.data[0])
                setProfileLists([
                    {
                        title: "取得資格",
                        icon: <WorkspacePremiumRoundedIcon />,
                        content: res.data[0]["student_qualifications"]
                    },
                    {
                        title: "プログラミング言語",
                        icon: <TerminalRoundedIcon />,
                        content: res.data[0]["student_programming_languages"]
                    },
                    {
                        title: "メールアドレス",
                        icon: <EmailRoundedIcon />,
                        content: res.data[0]["user_mail"],
                    },
                    {
                        title: "Github",
                        icon: <GitHubIcon />,
                        content: res.data[0]["student_github"],
                    },
                ])
            })
    }, [userId])

    return (
        <ProfileLayout
            component={
                <ProfileStudentDetail
                    profile={profile}
                    profileLists={profileLists}
                />
            }
        />
    );
}

export default ProfileView