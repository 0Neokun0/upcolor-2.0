import { UserButton } from "components/molecules"
import { List } from "@mui/material"

const PrivateChatUsers = (props) => {
    const { users } = props

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
                            name={user["name"]}
                        />
                    )
                })
            }
        </List>
    )
}

export default PrivateChatUsers