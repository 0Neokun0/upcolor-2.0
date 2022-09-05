import axios from "axios"
import { HomeLayout } from "components/templates"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Home = () => {
    const postId = useParams()["postId"]

    const [openPostModal, setOpenPostModal] = useState(false)
    const [openReplyModal, setOpenReplyModal] = useState(false)
    const [post, setPost] = useState([])
    const [posts, setPosts] = useState([])
    const [replys, setReplys] = useState([])

    const menus = [
        {
            value: "グループ",
            url: "/group",
        },
        {
            value: "自分の進級制作",
            url: "/teamwork",
        },
        {
            value: "みんなの進級制作",
            url: "/teamlist",
        },
        {
            value: "ユーザー",
            url: "#",
        },
        {
            value: "プロフィール",
            url: "/profile",
        },
        {
            value: "時間割",
            url: "#",
        },
        {
            value: "設定",
            url: "#",
        },
    ]

    const news = [
        {
            id: 1,
            title: "体調チェックアンケート",
            name: "八木勇希 先生",
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

    return (
        <HomeLayout
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
    );
}

export default Home;
