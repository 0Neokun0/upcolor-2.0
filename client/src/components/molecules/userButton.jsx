import { Avatar, IconButton, ListItemButton, Typography } from "@mui/material"
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded'

const UserButton = (props) => {
    const {name} = props
    
    return (
        <ListItemButton
            sx={{
                width: "100%",
                borderRadius: 50,
                display: "flex",
                alignItems: "center",
                ":hover": {
                    backgroundColor: "white",
                }
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

            <IconButton
                sx={{
                    ml: "auto",
                }}
            >
                <MoreVertRoundedIcon />
            </IconButton>
        </ListItemButton>
    )
}

export default UserButton