import { UserButton } from "components/molecules"
import { Alert, Box, Drawer, Hidden, List } from "@mui/material"

const PrivateChatUsers = (props) => {
    const { users, selectedUserId, selectedUserOnChange, menuAnchorEl, menuOpen, userMenuOpen, userMenuClose, drawerOpen, onDrawerClose } = props

    return (
        <Box>
            <Hidden
                mdDown
            >
                <List
                    disablePadding
                    sx={{
                        minWidth: "300px",
                        maxWidth: "400px",
                    }}
                >
                    {
                        users
                        ?
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
                        :
                        <Alert
                            severity="error"
                        >
                            相互フォローユーザーが見つかりません
                        </Alert>
                    }
                </List>
            </Hidden>

            <Drawer
                open={drawerOpen}
                onClose={onDrawerClose}
            >
                <Box
                    sx={{
                        p: 2,
                    }}
                >
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
                </Box>
            </Drawer>
        </Box>
    )
}

export default PrivateChatUsers