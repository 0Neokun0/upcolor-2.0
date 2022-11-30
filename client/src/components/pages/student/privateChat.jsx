import { PrivateChatLayout } from "components/templates"
import { PrivateChatBox, PrivateChatUsers } from "components/organisms"

const PrivateChat = () => {
    const users = [
        {
            id: 1,
            name: "まつお",
        },
        {
            id: 2,
            name: "こめだ",
        },
        {
            id: 3,
            name: "ニシャント",
        },
    ]

    const selected = "まつお"

    const chats = [
        {
            id: 1,
            self: 1,
            name: "ニシャント",
            icon: "",
            time: "00/00 00:00",
            text: "コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ",
        },
        {
            id: 2,
            self: 0,
            name: "ニシャント",
            icon: "",
            time: "00/00 00:00",
            text: "コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ",
        },
        {
            id: 3,
            self: 1,
            name: "ニシャント",
            icon: "",
            time: "00/00 00:00",
            text: "コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ",
        },
        {
            id: 4,
            self: 1,
            name: "ニシャント",
            icon: "",
            time: "00/00 00:00",
            text: "コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ",
        },
    ]

    return (
        <PrivateChatLayout
            list={
                <PrivateChatUsers
                    users={users}
                />
            }
            chat={
                <PrivateChatBox
                    selected={selected}
                    chats={chats}
                />
            }
        />
    )
}

export default PrivateChat