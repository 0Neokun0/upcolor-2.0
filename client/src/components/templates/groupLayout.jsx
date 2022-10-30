import { Outlet } from "react-router-dom";
import { Box, Card, Stack } from "@mui/material";

import GroupSideBar from "components/organisms/groupSideBar";

const GroupLayout = (props) => {
    return (
        <Box
            sx={{
                pt: 2,
                m: 1,
            }}
        >
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
                            setSelectGroupId: props.setSelectGroupId,
                            handleCreateSubmit: props.handleCreateSubmit,
                            handleGenerateInviteUrl:
                                props.handleGenerateInviteUrl,
                            handleLeaveGroup: props.handleLeaveGroup,

                            chats: props.chats,
                            handleSendChat: props.handleSendChat,
                        }}
                    />
                </Card>
            </Stack>
        </Box>
    );
};

export default GroupLayout;
