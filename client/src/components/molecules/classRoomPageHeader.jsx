import { Box, Card, CardMedia, Dialog, IconButton, Tooltip, Typography } from "@mui/material";

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
                    mt: 1,
                    p: 2,
                    borderRadius: '10px',
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
                        }}
                    >
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
