import { Outlet } from "react-router-dom"
import { Box, Card, Grid, Stack } from "@mui/material"
import { GroupMenu, GroupSideBar } from "components/organisms"

const GroupLayout = (props) => {
    return (
        <Box sx={{
            p:2,
        }}>

            <Stack
                direction="row"
                spacing={2}
                sx={{
                    height: "calc(100vh - 64px)",
                }}
            >
                <GroupSideBar menus={props.menus} />

                <Card
                    sx={{
                        width: 1,
                    }}
                >



                    <Outlet
                        context={{
                            userId: props.userId,
                            groups: props.groups,
                            selectGroupId: props.selectGroupId,
                            menuOpen: props.menuOpen,
                            setMenuOpen: props.setMenuOpen,
                            menuId: props.menuId,
                            setMenuId: props.setMenuId,
                            copyOpen: props.copyOpen,
                            setCopyOpen: props.setCopyOpen,
                            groupClick: props.groupClick,

                            handleCreateSubmit: props.handleCreateSubmit,
                            handleGenerateInviteUrl: props.handleGenerateInviteUrl,
                            handleLeaveGroup: props.handleLeaveGroup,

                            chats: props.chats,
                            addChats: props.addChats,
                            scrollDown: props.scrollDown,
                            handleSendChat: props.handleSendChat,
                        }}
                    />
                </Card>

            </Stack>
        </Box>
    );
}

export default GroupLayout;
