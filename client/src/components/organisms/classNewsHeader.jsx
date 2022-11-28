import { ClassNewsRoomCreate, ClassNewsRoomJoin } from "components/molecules"
import { Box, Card, IconButton, Tooltip, Typography } from "@mui/material"

import ClassRoundedIcon from '@mui/icons-material/ClassRounded'
import AddRoundedIcon from '@mui/icons-material/AddRounded'

const ClassNewsHeader = (props) => {
    return (
        <Card
            sx={{
                borderRadius: "15px",
                boxShadow: 3,
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    "img": {
                        display: "block",
                    },
                }}
            >
                <Box
                    component="img"
                    src="https://wallpaperaccess.com/full/859076.jpg"
                    sx={{
                        width: "100%",
                        height: 100,
                        objectFit: "cover",
                    }}
                />

                <Typography
                    variant="h3"
                    sx={{
                        position: "absolute",
                        transform: "translate(-50%,-50%)",
                        top: "50%",
                        left: "50%",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        border: 1,
                        px: 2,
                    }}
                >
                    ClassNews
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'end',
                    p: 1,
                }}
            >
                {/* <Box
                    sx={{
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        alt={props["profile"]["name"]}
                        src={`${server.host}/images/icon/${props["profile"]["image"]}`}
                        sx={{
                            border: 1,
                            borderColor: "divider",
                        }}
                    />

                    <Typography
                        sx={{
                            ml: 1,
                            fontWeight: "bold",
                        }}
                    >
                        {props["profile"]["name"]}
                    </Typography>
                </Box> */}

                <Tooltip
                    title="作成"
                    placement="bottom"
                >
                    <IconButton
                        size="small"
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
                        size="small"
                        onClick={() => props["setOpenJoin"](true)}
                    >
                        <AddRoundedIcon />
                    </IconButton>
                </Tooltip>
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