import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { ContainerMd } from "components/templates"
import { ClassNewsFeedHeader, ClassNewsFeedForm } from "components/organisms"
import ClassNewsFeedList from "components/organisms/classNewsFeedList"


const ClassNewsFeed = () => {
    const classId = useParams()["classId"]

    const [open, setOpen] = useState(false)
    const [profile, setProfile] = useState([])
    const [enterClassNewsRoom, setEnterClassNewsRoom] = useState([])
    const [news, setNews] = useState(false)
    const [userType, setUserType] = useState()

    const handleSubmitNews = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        axios.post("/classNews/addClassNews", {
            classId: classId,
            text: data.get("classNewsText"),
        })

        setOpen(false)
        window.location.reload()
    }

    useEffect(() => {
        axios.post("/account/getProfile")
            .then((res) => {
                setProfile(res.data)
            })

        axios.post("/account/getUserType")
            .then((res) => {
                setUserType(res.data)
            })
    }, [])

    useEffect(() => {
        axios.post("/classNews/enterClassRoom", {
            classId: classId,
        })
            .then((res) => {
                setEnterClassNewsRoom(res.data)
            })

        axios.post("/classNews/getClassNews", {
            classId: classId,
        })
            .then((res) => {
                if (res.data) {
                    setNews(res.data)
                }
            })
    }, [classId])

    return (
        <ContainerMd>
            <ClassNewsFeedHeader
                classId={classId}
                enterClassNewsRoom={enterClassNewsRoom}
            />

            {
                userType === 2
                &&
                <ClassNewsFeedForm
                    profile={profile}
                    open={open}
                    setOpen={setOpen}
                    handleSubmitNews={handleSubmitNews}
                />
            }

            {
                news
                    ?
                    <ClassNewsFeedList
                        news={news}
                    />
                    :
                    <></>
            }
        </ContainerMd>
    )
}
export default ClassNewsFeed