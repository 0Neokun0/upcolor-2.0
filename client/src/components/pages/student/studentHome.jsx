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

    const user = [
        {
            name : "Nishant",
            course: "報告処理ネットワー",
        }
    ]

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

    const news = [
        {
            id: 1,
            title: "体調チェックアンケート",
            name: "八木勇貴 先生",
            content: "再度体調チェックアンケートを実施する事となりました。本日の9:20までに回答お願いします。※授業が無い学生も回答お願いします。",
        },
        {
            id: 2,
            title: "SPI模試",
            name: "友金牧人 先生",
            content: "キャリタスのSPI模試が本日からスタートしました。22日(木)までWebで受験できます。無料で受けられる貴重な練習の機会です。無駄にしないようにしてください。",
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        axios.post("/post/addPost", {
            text: data.get("text"),
        })
            .then(() => {
                window.location.reload()
            })
    }
    const handleReplySubmit = (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)

        axios.post("/post/addReply", {
            text: data.get("text"),
            parentId: data.get("parentId"),
        })
            .then(() => {
                window.location.reload()
                console.log("run")
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

    useEffect(() => {
        axios.post("/account/getProfile")
        .then((res) => {
            setProfile(res.data[0])
        })
    }, [])

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

export default Home;
