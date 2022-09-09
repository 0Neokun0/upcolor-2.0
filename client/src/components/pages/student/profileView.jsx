import axios from "axios"
import { ProfileStudentDetail } from "components/organisms"
import { ProfileLayout } from "components/templates"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProfileView = () => {
    const userId = useParams()["userId"]
    const [profile, setProfile] = useState([])

    useEffect(() => {
        axios.post("/account/getStudentProfile", {
            userId: userId,
        })
            .then((res) => {
                setProfile(res.data[0])
            })
    }, [userId])

    return (
        <ProfileLayout
            component={
                <ProfileStudentDetail
                    profile={profile}
                />
            }
        />
    );
}

export default ProfileView