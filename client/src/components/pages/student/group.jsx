import GroupLayout from "components/templates/groupLayout"
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded'

const Group = () => {
    const menus = [
        {
            icon: <CommentRoundedIcon />,
            value: "チャット",
            url: "",
        },
        {
            icon: <AddRoundedIcon />,
            value: "グループ作成",
            url: "create",
        },
        {
            icon: <PersonAddAltRoundedIcon />,
            value: "招待",
            url: "invite",
        },
    ]

    return (
        <GroupLayout menus={menus} />
    );
}

export default Group;
