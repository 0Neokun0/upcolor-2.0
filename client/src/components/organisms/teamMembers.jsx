import { Link } from "react-router-dom"
import { Box, Button, Popover, Typography } from "@mui/material"

const TeamMembers = (props) => {
    return (
        <Box
            sx={{
                width: "80%",
                mx: "auto",
                mb: 2,
            }}
        >
            {
                props.members
                &&
                props.members.map((member) => {
                    return (
                        <Button
                            key={member["user_id"]}
                            component={Link}
                            to={"/profile/" + member["user_id"]}
                        >
                            {member["user_name"]}
                        </Button>
                    )
                })
            }

            <Box
                sx={{
                    textAlign: "right",
                }}
            >
                <Button
                    variant="contained"
                    size="small"
                    onClick={props.handleGenerateInviteUrl}
                >
                    招待URLコピー
                </Button>

                <Popover
                    open={Boolean(props.anchorEl)}
                    anchorEl={props.anchorEl}
                    onClose={props.handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                >
                    <Typography
                        sx={{
                            p: 1,
                        }}
                    >
                        コピー完了
                    </Typography>
                </Popover>
            </Box>
        </Box>
    );
}

export default TeamMembers
