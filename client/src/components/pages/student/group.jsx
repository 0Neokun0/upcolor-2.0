import axios from "axios"
import { useState, useEffect } from "react"
import { io } from "socket.io-client"
import config from "components/config"
import GroupLayout from "components/templates/groupLayout"
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
const socket = io(config.socket.host)

const Group = () => {
    const [groups, setGroups] = useState([])
    const [selectGroupId, setSelectGroupId] = useState(null)
    const [menuOpen, setMenuOpen] = useState(null)
    const [menuId, setMenuId] = useState(null)
    const [copyOpen, setCopyOpen] = useState(false)
    const [userId, setUserId] = useState(null)

    const [chats, setChats] = useState([])
    const [addChats, setAddChats] = useState([])

    const menus = [
        {
            icon: <CommentRoundedIcon />,
            value: "チャット",
            url: "/group",
        },
        {
            icon: <AddRoundedIcon />,
            value: "グループ作成",
            url: "/group/create",
        },
    ]

    const scrollDown = () => {
        const chatBox = document.getElementById("chatBox")
        chatBox.scrollTop = chatBox.scrollHeight
    }

    const groupClick = (id) => {
        socket.emit("groupChat join", selectGroupId, id)
        setSelectGroupId(id)

        setTimeout(() => {
            scrollDown()
        }, 500)
    }

    const handleCreateSubmit = (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)

        axios.post("/group/addGroup", {
            name: data.get("name"),
        })

        window.location.href = "/group"
    }

    const handleSendChat = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const token = document.cookie.split("=")[1]

        // axios.post("/group/sendChat", {
        //     groupId: selectGroupId,
        //     text: data.get("text"),
        // })

        socket.emit("groupChat msg", token, selectGroupId, data.get("text"))

        document.getElementById("chatInput").value = ""

        setTimeout(() => {
            scrollDown()
        }, 500)
    }

    const handleGenerateInviteUrl = (groupId) => {
        axios.post("/group/getInviteUrl", {
            groupId: groupId,
        })
            .then((res) => {
                navigator.clipboard.writeText(config.client.host + "/groupinvite/" + res.data)
                setCopyOpen(true)
            })
    }

    const handleLeaveGroup = (groupId) => {
        axios.post("/group/deleteJoinedGroup", {
            groupId: groupId,
        })

        window.location.reload()
    }

    useEffect(() => {
        axios.post("/group/getJoinedGroupList")
            .then((res) => {
                setGroups(res.data["groupsList"])
                setUserId(res.data["userId"])
            })
    }, [])

    useEffect(() => {
        socket.on("groupChat", (msg) => {
            setAddChats((addChats) => [...addChats, msg])
        })
    }, [])

    useEffect(() => {
        if (selectGroupId) {
            axios.post("/group/getGroupChat", {
                groupId: selectGroupId,
            })
                .then((res) => {
                    setChats(res.data)
                })
        }
    }, [selectGroupId])

    return (
        <GroupLayout
            menus={menus}

            userId={userId}
            groups={groups}
            selectGroupId={selectGroupId}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            menuId={menuId}
            setMenuId={setMenuId}
            copyOpen={copyOpen}
            setCopyOpen={setCopyOpen}
            groupClick={groupClick}

            handleCreateSubmit={handleCreateSubmit}

            handleGenerateInviteUrl={handleGenerateInviteUrl}
            handleLeaveGroup={handleLeaveGroup}

            chats={chats}
            addChats={addChats}
            scrollDown={scrollDown}
            handleSendChat={handleSendChat}
        />
    );
}

export default Group