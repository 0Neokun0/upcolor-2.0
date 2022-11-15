import { ClassNewsRoomCreate, ClassNewsRoomJoin } from "components/molecules"
import { Avatar, Box, Card, CardMedia, Chip, IconButton, Tooltip, Typography } from "@mui/material"

import ClassRoundedIcon from '@mui/icons-material/ClassRounded'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import { server } from 'components/config'


const ClassNewsHeader = (props) => {
    return (
        <Card
            sx={{
                p: 2,
                borderRadius: "15px",
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
                        borderRadius: "15px",
                    }}
                    component="img"
                    src="https://wallpaperaccess.com/full/859076.jpg"
                />
                <Box
                    sx={{
                        bgcolor: 'white',
                        p: 1,
                        position: 'absolute',
                        borderRadius: "15px",
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
                        ClassNews
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
                                src={server.host + "/images/icon/" + props.profile.image}
                            />
                        }
                        label={props.profile["name"]}
                        variant="outlined"
                    />
                    <Box>
                        <Tooltip
                            title="作成"
                            placement="bottom"
                        >
                            <IconButton
                                onClick={() => props["setOpenCreate"](true)}
                            >
                                <ClassRoundedIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip
                            title="参加"
                            placement="bottom"
                        >
                            <IconButton
                                onClick={() => props["setOpenJoin"](true)}
                            >
                                <AddRoundedIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
            </Box>

            <ClassNewsRoomCreate
                openCreate={props["openCreate"]}
                setOpenCreate={props["setOpenCreate"]}

                createClassNews={props["createClassNews"]}
            />

            <ClassNewsRoomJoin
                openJoin={props["openJoin"]}
                setOpenJoin={props["setOpenJoin"]}
            />
        </Card>
    )
}

export default ClassNewsHeader