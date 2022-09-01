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
            value: "みんなの進級制作",
            url: "#",
        },
        {
            value: "自分の進級制作",
            url: "/teamwork",
        },
        {
            value: "ユーザー",
            url: "#",
        },
        {
            value: "プロフィール",
            url: "#",
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
            title: "シリコンバレー研修アンケート",
            name: "八木勇希",
            content: "急ぎの対応お願いします！ シリコンバレー研修アンケート、 参加しない学生も「参加しない」旨を入力とのことです。。。 お手数ですが、未回答の学生は入力お願いします。",
        },
        {
            id: 2,
            title: "退出処理",
            name: "友金牧人",
            content: "23卒学生各位本日より就職先が決定している学生から、このクラスルームから退出処理を行います。24卒向けの内容にシフトしていくからです。内定を獲得していて、今暫くこのクラスルームを使いたい学生はメールで連絡ください。宜しくお願いいたします。",
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
