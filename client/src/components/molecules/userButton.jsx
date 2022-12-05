import { Link } from "react-router-dom"
import { server } from "components/config"
import { Avatar, IconButton, ListItemButton, Menu, MenuItem, Typography } from "@mui/material"
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded'

const UserButton = (props) => {
    const { index, id, name, icon, selected, onClick, anchorEl, open, onClickIcon, onClose } = props

    return (
        <ListItemButton
            onClick={() => onClick(index, id)}
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
            <Avatar
                src={`${server.host}/images/icon/${icon}`}
                sx={{
                    border: 1,
                    borderColor: "divider",
                }}
            />

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
                    onClick={(e) => onClickIcon(e, index)}
                    sx={{
                        ml: "auto",
                    }}
                >
                    <MoreVertRoundedIcon />
                </IconButton>
            }

            <Menu
                anchorEl={anchorEl}
                open={Boolean(index === open)}
                onClose={onClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem
                    component={Link}
                    to={`/profile/${id}`}
                >
                    プロフィール
                </MenuItem>
            </Menu>
        </ListItemButton>
    )
}

export default UserButton