import { Outlet } from "react-router-dom"
import { Container, Grid } from "@mui/material"
import { GroupMenu } from "components/organisms"

const GroupLayout = (props) => {
    return (
        <Container>
            <Grid
                container
                sx={{
                    background: "white",
                }}
            >
                <Grid
                    item
                    xs={1}
                    sx={{
                        borderRight: 1,
                        borderColor: "rgba(0, 0, 0, 0.12)",
                    }}
                >
                    <GroupMenu
                        menus={props.menus}
                    />
                </Grid>

                <Grid
                    item
                    xs={11}
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
                            handleSendChat: props.handleSendChat,
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default GroupLayout;
