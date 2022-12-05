import axios from "axios"
import { io } from "socket.io-client"
import { useEffect, useState } from "react"
import { PrivateChatLayout } from "components/templates"
import { PrivateChatBox, PrivateChatUsers } from "components/organisms"
import config from "components/config"
const socket = io(config.socket.host)

const PrivateChat = () => {
    const [selectedUserId, setSelectedUserId] = useState(1)     // 選択ユーザーID
    const [selectedUserName, setSelectedUserName] = useState()  // 選択ユーザー名前
    const [formInput, setFormInput] = useState()                // chatForm入力
    const [users, setUsers] = useState()                        // 相互フォローユーザー
    const [chats, setChats] = useState()                        // 取得チャット
    const [joinRoom, setJoinRoom] = useState()                  // ルームID保存
    const [menuAnchorEl, setMenuAnchorEl] = useState()          // userButtonMenuアンカー
    const [menuOpen, setMenuOpen] = useState()                  // userButtonMenuハンドル
    const [drawerOpen, setDrawerOpen] = useState(false)         // drawerハンドル

    // 選択ユーザー変更時
    const selectedUserOnChange = (index, userId) => {
        const token = document.cookie.split("=")[1]
        socket.emit("privateChat join", token, selectedUserId, userId)

        setSelectedUserId(userId)
        setSelectedUserName(users[index]["name"])
    }

    // userButtonIconクリック時
    const userMenuOpen = (e, index) => {
        setMenuAnchorEl(e.currentTarget)
        setMenuOpen(index)
    }
    const userMenuClose = () => {
        setMenuAnchorEl(null)
        setMenuOpen(null)
    }

    // drawerButtonクリック時
    const onDrawerOpen = () => {
        console.log("drawer open")
        setDrawerOpen(true)
    }
    const onDrawerClose = () => {
        console.log("drawer close")
        setDrawerOpen(false)
    }

    // チャット送信時
    const sendChat = () => {
        setFormInput("")

        const token = document.cookie.split("=")[1]
        socket.emit("privateChat msg", token, selectedUserId, joinRoom, formInput)
    }

    // chatForm内容変更時
    const formInputOnChange = (e) => {
        setFormInput(e.target.value)
    }

    // 選択ユーザー変更時チャット取得
    useEffect(() => {
        axios.post("/privateChat/get", {
            selectedUserId: selectedUserId,
        })
            .then((res) => {
                setChats(res["data"])
            })
    }, [selectedUserId])

    // チャット受信時
    useEffect(() => {
        const chatArea = document.getElementById("chatArea")
        chatArea.scrollTop = chatArea.scrollHeight
    }, [chats])

    useEffect(() => {
        // 相互フォロー取得
        axios.post("/privateChat/getFriend")
            .then((res) => {
                setUsers(res["data"])

                if (res["data"]) {
                    const token = document.cookie.split("=")[1]
                    socket.emit("privateChat join", token, selectedUserId, res["data"][0]["id"])

                    setSelectedUserId(res["data"][0]["id"])
                    setSelectedUserName(res["data"][0]["name"])
                }
            })

        // チャット双方向通信
        socket.on("privateChat", (chat) => {
            setChats((chats) => [...chats, chat])
        })

        // ルームの保存
        socket.on("privateChat room", (room) => {
            setJoinRoom(room)
        })
    }, [])

    return (
        <PrivateChatLayout
            list={
                <PrivateChatUsers
                    users={users}
                    selectedUserId={selectedUserId}
                    selectedUserOnChange={selectedUserOnChange}
                    menuAnchorEl={menuAnchorEl}
                    menuOpen={menuOpen}
                    userMenuOpen={userMenuOpen}
                    userMenuClose={userMenuClose}
                    drawerOpen={drawerOpen}
                    onDrawerClose={onDrawerClose}
                />
            }
            chat={
                <PrivateChatBox
                    selectedUserName={selectedUserName}
                    chats={chats}
                    formInput={formInput}
                    formInputOnChange={formInputOnChange}
                    sendChat={sendChat}
                    onDrawerOpen={onDrawerOpen}
                />
            }
        />
    )
}

export default PrivateChat