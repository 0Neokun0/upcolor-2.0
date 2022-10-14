import axios from "axios"
import { useState, useEffect } from "react"
import GroupLayout from "components/templates/groupLayout"
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import AddRoundedIcon from '@mui/icons-material/AddRounded'

const Group = () => {
    const [groups, setGroups] = useState([])
    const [selectGroupId, setSelectGroupId] = useState(null)
    const [userId, setUserId] = useState(null)

    const [chats, setChats] = useState([])

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

        axios.post("/group/sendChat", {
            groupId: selectGroupId,
            text: data.get("text"),
        })

        const elem = document.getElementById("chatInput")
        elem.value = ""
    }

    const handleGenerateInviteUrl = (groupId) => {
        axios.post("/group/getInviteUrl", {
            groupId: groupId,
        })
        .then((res) => {
            navigator.clipboard.writeText("http://localhost:3000/groupinvite/" + res.data)
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
            setSelectGroupId={setSelectGroupId}
            handleCreateSubmit={handleCreateSubmit}

            handleGenerateInviteUrl={handleGenerateInviteUrl}
            handleLeaveGroup={handleLeaveGroup}

            chats={chats}
            handleSendChat={handleSendChat}
        />
    );
}

export default Group;
