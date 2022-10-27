import { Avatar, Box, Card, CardMedia, Chip, Dialog, IconButton, Tooltip, Typography } from "@mui/material";

import ClassRoundedIcon from '@mui/icons-material/ClassRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ClassRoomCreateClass from "./classRoomCreateClass";
import ClassRoomJoinClass from "./classRoomJoinClass";

const ClassRoomPageHeader = (props) => {

    return (
        <>
            <Card
                sx={{
                    m: 2,
                    p: 2,
                    borderRadius: '10px',
                    boxShadow: 3,
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                    }}
                >
                    <CardMedia
                        sx={{
                            height: 100,
                            borderRadius: 2,
                        }}
                        component="img"
                        src={props.classRoomTitleImage}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            color: 'white',
                            top: 8,
                            left: '50%',
                            transform: 'translateX(-50%)',
                        }}
                    >
                        <Typography variant="h3">
                            {props.classRoomTitle}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            m: 1,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Chip
                            avatar=
                            {
                                <Avatar
                                    alt="userProfileAvatar"
                                    src="/static/images/avatar/1.jpg"
                                />
                            }
                            label="Username"
                            variant="outlined"
                        />

                        <Box>
                            <Tooltip
                                title="作成"
                                placement="bottom"
                            >
                                <IconButton
                                    onClick={() => props.setOpenCreate(true)}
                                >
                                    <ClassRoundedIcon />
                                </IconButton>
                            </Tooltip>

                            <ClassRoomCreateClass
                                openCreate={props.openCreate}
                                setOpenCreate={props.setOpenCreate}

                                createClass={props.createClass}
                            />

                            <Tooltip
                                title="参加"
                                placement="bottom"
                            >
                                <IconButton
                                    onClick={() => props.setOpenJoin(true)}
                                >
                                    <AddRoundedIcon />
                                </IconButton>
                            </Tooltip>
                        </Box>

                        <ClassRoomJoinClass
                            open={props.openJoin}
                            setOpenJoin={props.setOpenJoin}
                        />
                    </Box>
                </Box>
            </Card>
        </>
    );
};

export default ClassRoomPageHeader;
