import { useEffect, useState } from "react"
import axios from "axios"
import { TeamWorkInfoLayout } from "components/templates"
import { ProfileForm } from "components/organisms"

const ProfileEdit = () => {
    const [profile, setProfile] = useState([])

    const toggleEditProfile = (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)

        axios.post("/account/updateProfile", {
            introduction: data.get("introduction"),
            qualifications: data.get("qualifications"),
            programming: data.get("programming"),
            github: data.get("github"),
        })

        window.location.href = "/profile"
    }

    useEffect(() => {
        axios.post("/account/getProfile")
            .then((res) => {
                setProfile(res.data)
            })
    }, [])

    return (
        profile.length
        &&
        <TeamWorkInfoLayout
            component={
                <ProfileForm
                    profile={profile}
                    toggleEditProfile={toggleEditProfile}
                />
            }
        />
    );
}

export default ProfileEdit