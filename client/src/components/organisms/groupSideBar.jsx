import { Box, Button, Card, Typography } from "@mui/material";
import { formatDistance, subMinutes, subHours } from "date-fns";

import { GroupMenu } from "components/organisms";
import ChatUserCard from "components/molecules/chatUserCard";

import BrowseGalleryIcon from "@mui/icons-material/BrowseGallery";
import GroupCompanyEvent from "components/molecules/groupCompanyEvent";

const GroupSideBar = (props) => {
    return (
        <>
            <Box
                sx={{
                    width: "300px",
                }}
            >
                <ChatUserCard />

                <GroupMenu menus={props.menus} />

                <GroupCompanyEvent/>
            </Box>
        </>
    );
};

export default GroupSideBar;
