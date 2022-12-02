import { UserButton } from "components/molecules"
import { List } from "@mui/material"

const PrivateChatUsers = (props) => {
    const { users, selectedUserId, selectedUserOnChange, menuAnchorEl, menuOpen, userMenuOpen, userMenuClose } = props

    return (
        <List
            disablePadding
            sx={{
                minWidth: "300px",
                maxWidth: "400px",
            }}
        >
            {
                users
                &&
                users.map((user, index) => {
                    return (
                        <UserButton
                            key={user["id"]}
                            index={index}
                            id={user["id"]}
                            name={user["name"]}
                            icon={user["icon"]}
                            selected={selectedUserId}
                            onClick={selectedUserOnChange}
                            anchorEl={menuAnchorEl}
                            open={menuOpen}
                            onClickIcon={userMenuOpen}
                            onClose={userMenuClose}
                        />
                    )
                })
            }
        </List>
    )
}

export default PrivateChatUsers