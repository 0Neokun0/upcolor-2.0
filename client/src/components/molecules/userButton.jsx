import { Avatar, IconButton, ListItemButton, Typography } from "@mui/material"
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded'

const UserButton = (props) => {
    const { id, name, selected, onClick } = props

    return (
        <ListItemButton
            onClick={() => onClick(id)}
            sx={{
                width: "100%",
                borderRadius: 50,
                display: "flex",
                alignItems: "center",

                // プロパティ: id === selected ? 選択時スタイル: 非選択時スタイル
                backgroundColor: id === selected ? "white" : "",
                boxShadow: id === selected ? 1 : 0,
            }}
        >
            <Avatar />

            <Typography
                sx={{
                    ml: 2,
                    fontSize: "1.2em",
                    wordBreak: "keep-all",
                }}
            >
                {name}
            </Typography>

            {
                id === selected
                &&
                <IconButton
                    sx={{
                        ml: "auto",
                    }}
                >
                    <MoreVertRoundedIcon />
                </IconButton>
            }
        </ListItemButton>
    )
}

export default UserButton