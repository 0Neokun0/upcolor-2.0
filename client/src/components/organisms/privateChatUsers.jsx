import { UserButton } from "components/molecules"
import { List } from "@mui/material"

const PrivateChatUsers = (props) => {
    const { users, selectedUserId, selectedUserOnChange } = props

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
                users.map((user) => {
                    return (
                        <UserButton
                            key={user["id"]}
                            id={user["id"]}
                            name={user["name"]}
                            selected={selectedUserId}
                            onClick={selectedUserOnChange}
                        />
                    )
                })
            }
        </List>
    )
}

export default PrivateChatUsers