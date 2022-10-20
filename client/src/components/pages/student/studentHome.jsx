import axios from "axios"
import { HomeLayout } from "components/templates"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import BadgeIcon from '@mui/icons-material/Badge';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

const Home = () => {
    const postId = useParams()["postId"]

    const [openPostModal, setOpenPostModal] = useState(false)
    const [openReplyModal, setOpenReplyModal] = useState(false)
    const [post, setPost] = useState([])
    const [posts, setPosts] = useState([])
    const [replys, setReplys] = useState([])
    const [profile, setProfile] = useState([])
    const [news, setNews] = useState([])

    const menus = [
        {
            value: "グループ",
            url: "/group",
            icon: <WorkspacesIcon />,
        },
        {
            value: "自分の進級制作",
            url: "/teamwork",
            icon: <GroupWorkIcon />,

        },
        {
            value: "みんなの進級制作",
            url: "/teamlist",
            icon: <AccountTreeIcon />,
        },
        {
            value: "ユーザー",
            url: "#",
            icon: <PersonSearchIcon />,
        },
        {
            value: "プロフィール",
            url: "/profile",
            icon: <BadgeIcon />,
        },
        {
            value: "時間割",
            url: "/timeTable/regist",
            icon: <ViewTimelineIcon />,
        },
        {
            value: "設定",
            url: "#",
            icon: <SettingsSuggestIcon />,
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        axios.post("/post/addPost", {
            text: data.get("text"),
            image: data.get("image"),
        },
            config
        )
            .then(() => {
                window.location.reload()
            })
    }
    const handleReplySubmit = (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        axios.post("/post/addReply", {
            text: data.get("text"),
            image: data.get("image"),
            parentId: data.get("parentId"),
        },
            config
        )
            .then(() => {
                window.location.reload()
            })
    }

    const togglePostModalOpen = () => {
        setOpenPostModal(true)
    }
    const togglePostModalClose = () => {
        setOpenPostModal(false)
    }

    const toggleReplyModalOpen = () => {
        setOpenReplyModal(true)
    }
    const toggleReplyModalClose = () => {
        setOpenReplyModal(false)
    }

    useEffect(() => {
        axios.post("/post/getPostList")
            .then((res) => {
                setPosts(res.data)
                console.log(res.data)
            })

        axios.post("/account/getProfile")
            .then((res) => {
                setProfile(res.data[0])
            })

        axios.post("/news/getStudentNews")
            .then((res) => {
                setNews(res.data)
            })
    }, []);

    useEffect(() => {
        setPost([])

        axios.post("/post/getPost", {
            postId: postId,
        })
            .then((res) => {
                setPost(res.data["post"][0])
                setReplys(res.data["replys"])
            })
    }, [postId]);

    return (
        <>
            <HomeLayout
                profile={profile}

                handleSubmit={handleSubmit}
                openPostModal={openPostModal}
                togglePostModalOpen={togglePostModalOpen}
                togglePostModalClose={togglePostModalClose}

                handleReplySubmit={handleReplySubmit}
                openReplyModal={openReplyModal}
                toggleReplyModalOpen={toggleReplyModalOpen}
                toggleReplyModalClose={toggleReplyModalClose}
                postId={postId}

                post={post}
                posts={posts}
                replys={replys}
                menus={menus}
                news={news}
            />
        </>
    );
}

export default Home
