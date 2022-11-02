import { Avatar, Box, Card, CardActionArea, CardMedia, Chip, Dialog, IconButton, Tooltip, Typography } from "@mui/material";

import ClassRoundedIcon from '@mui/icons-material/ClassRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ClassNewsCreateClass from "components/molecules/classNewsCreateClass";
import ClassNewsJoinClass from "components/molecules/classNewsJoinClass";


const ClassNewsHomeHeader = (props) => {
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
                        src={props.classNewsTitleImage}
                    />
                    <Box
                        sx={{
                            bgcolor: 'white',
                            p: 1,
                            position: 'absolute',
                            borderRadius: '25px',
                            color: 'white',
                            top: 8,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            boxShadow: '0 0 2px 5px #e0e0e0',
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: 50,
                                color: "black"
                            }}>
                            {props.classNewsTitle}
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


                        <Chip sx={{
                            mb: 1,
                        }}
                            avatar=
                            {
                                <Avatar
                                    alt="userProfileAvatar"
                                    src="/static/images/avatar/1.jpg"
                                />
                            }
                            label="neokun"
                            // label={props.profile.user_name}
                            variant="contained"
                        />
                        <Box sx={{
                            display: 'flex',
                        }}>
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

                            <ClassNewsCreateClass
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


                            <ClassNewsJoinClass
                                open={props.openJoin}
                                setOpenJoin={props.setOpenJoin}
                            />
                        </Box>




                    </Box>
                </Box>
            </Card>
        </>
    )
}

export default ClassNewsHomeHeader
