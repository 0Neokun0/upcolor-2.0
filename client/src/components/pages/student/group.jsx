import GroupLayout from "components/templates/groupLayout"
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded'
import axios from "axios"

const Group = () => {
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

    return (
        <GroupLayout
            menus={menus}
            handleCreateSubmit={handleCreateSubmit}
        />
    );
}

export default Group;
