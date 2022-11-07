import { Box } from "@mui/material";

import { GroupChatUserCard } from "components/molecules";
import { GroupCompanyEventCard, GroupMenu } from ".";

const GroupSideBar = (props) => {
	return (
		<>
			<Box
				sx={{
					width: "300px",
				}}
			>
				<GroupChatUserCard />

				<GroupMenu menus={props.menus} />

				{/* <GroupCompanyEventCard /> */}
			</Box>
		</>
	);
};

export default GroupSideBar;
