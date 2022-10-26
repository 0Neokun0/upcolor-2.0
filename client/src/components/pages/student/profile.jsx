import { useEffect, useState } from "react"
import axios from "axios"
import { ProfileLayout } from "components/templates"
import { ProfileDetail } from "components/organisms"
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded'
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import GitHubIcon from '@mui/icons-material/GitHub'


const Profile = () => {
    const [profile, setProfile] = useState([])
    const [profileLists, setProfileLists] = useState([])

    useEffect(() => {
        axios.post("/account/getProfile")
            .then((res) => {
                setProfile(res.data)
                setProfileLists([
                    {
                        title: "取得資格",
                        icon: <WorkspacePremiumRoundedIcon />,
                        content: res.data["qualification_names"],
                    },
                    {
                        title: "プログラミング言語",
                        icon: <TerminalRoundedIcon />,
                        content: res.data["program_names"],
                    },
                    {
                        title: "メールアドレス",
                        icon: <EmailRoundedIcon />,
                        content: res.data["mail"],
                    },
                    {
                        title: "Github",
                        icon: <GitHubIcon />,
                        content: res.data["github"],
                    },
                ])
            })
    }, [])

    return (
        profile
        &&
        <ProfileLayout>
            <ProfileDetail
                profile={profile}
                profileLists={profileLists}
            />
        </ProfileLayout>
    )
}

export default Profile