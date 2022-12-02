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
                />
            }
            chat={
                <PrivateChatBox
                    selectedUserName={selectedUserName}
                    chats={chats}
                    formInput={formInput}
                    formInputOnChange={formInputOnChange}
                    sendChat={sendChat}
                />
            }
        />
    )
}

export default PrivateChat

// テストデータ

// const selectedUserName = "まつお"

// const users = [

//     // id:      ユーザーID
//     // name:    ユーザー名

//     {
//         id: 1,
//         name: "まつお",
//     },
//     {
//         id: 2,
//         name: "こめだ",
//     },
//     {
//         id: 3,
//         name: "ニシャント",
//     },
// ]

// const chats = [

// id:      チャットID
// self:    0...他人の投稿, 1...自分の投稿
// name:    ユーザー名
// icon:    アイコンURL
// time:    投稿時間
// text:    内容

//     {
//         id: 1,
//         self: 1,
//         name: "ニシャント",
//         icon: "",
//         time: "00/00 00:00",
//         text: "コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ",
//     },
//     {
//         id: 2,
//         self: 0,
//         name: "ニシャント",
//         icon: "",
//         time: "00/00 00:00",
//         text: "コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ",
//     },
//     {
//         id: 3,
//         self: 1,
//         name: "ニシャント",
//         icon: "",
//         time: "00/00 00:00",
//         text: "コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ",
//     },
//     {
//         id: 4,
//         self: 1,
//         name: "ニシャント",
//         icon: "",
//         time: "00/00 00:00",
//         text: "コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ",
//     },
//     {
//         id: 5,
//         self: 0,
//         name: "ニシャント",
//         icon: "",
//         time: "00/00 00:00",
//         text: "コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ",
//     },
//     {
//         id: 6,
//         self: 1,
//         name: "ニシャント",
//         icon: "",
//         time: "00/00 00:00",
//         text: "コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ",
//     },
//     {
//         id: 7,
//         self: 0,
//         name: "ニシャント",
//         icon: "",
//         time: "00/00 00:00",
//         text: "コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ",
//     },
// ]