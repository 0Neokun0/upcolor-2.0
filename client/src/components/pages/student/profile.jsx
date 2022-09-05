import { useEffect, useState } from "react"
import { ProfileLayout } from "components/templates"
import { ProfileDetail } from "components/organisms"
import axios from "axios"

const Profile = () => {
    const [profile, setProfile] = useState([])

    useEffect(() => {
        axios.post("/account/getProfile")
            .then((res) => {
                console.log(res.data[0])
                setProfile(res.data[0])
            })
    }, [])

    return (
        profile
        &&
        <ProfileLayout
            component={
                <ProfileDetail
                    profile={profile}
                />
            }
        />
    )
}

export default Profile