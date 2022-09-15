import axios from "axios"
import { useState, useEffect } from "react"
import GroupLayout from "components/templates/groupLayout"
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded'

const Group = () => {
    const [groups, setGroups] = useState([])
    const [selectGroupId, setSelectGroupId] = useState(null)

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
        {
            icon: <PersonAddAltRoundedIcon />,
            value: "招待",
            url: "/group/invite",
        },
    ]

    const handleCreateSubmit = (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)

        axios.post("/group/addGroup", {
            name: data.get("name"),
        })
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

    useEffect(() => {
        axios.post("/group/getJoinedGroupList")
            .then((res) => {
                setGroups(res.data)
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

            groups={groups}
            selectGroupId={selectGroupId}
            setSelectGroupId={setSelectGroupId}
            handleCreateSubmit={handleCreateSubmit}

            chats={chats}
            handleSendChat={handleSendChat}
        />
    );
}

export default Group;
