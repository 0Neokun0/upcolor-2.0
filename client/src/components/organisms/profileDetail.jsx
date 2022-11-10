import { Avatar, Box, Button, Card, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Tab, Tabs, Tooltip, Typography } from "@mui/material"
import { grey, teal } from "@mui/material/colors"
import { server } from "components/config"

const ProfileDetail = (props) => {
    return (
        <>
            <Card
                sx={{
                    borderRadius: "15px",
                }}
            >
                <Grid
                    container
                >
                    <Grid
                        item
                        xs
                        sx={{
                            py: 2,
                            px: 4,
                            backgroundColor: teal[50],
                            minWidth: "300px",
                        }}
                    >
                        <Box
                            textAlign="center"
                        >
                            <Box
                                component="img"
                                src={server.host + "/images/icon/" + props["profile"]["image"]}
                                sx={{
                                    width: "100%",
                                    aspectRatio: "1/1",
                                    maxWidth: "300px",
                                    borderRadius: "50%",
                                    mb: 2,
                                    objectFit: "cover"
                                }}
                            />
                        </Box>

                        <Typography
                            variant="h4"
                            fontWeight="bold"
                        >
                            {props["profile"]["name"]}
                        </Typography>

                        <Typography
                            sx={{
                                pl: 2,
                                color: grey[600],
                                borderLeft: 3,
                                borderColor: grey[400],
                                whiteSpace: "pre-wrap",
                                mb: 2,
                            }}
                        >
                            {props["profile"]["course_name"]}
                        </Typography>

                        <Button
                            variant="outlined"
                            fullWidth
                        >
                            フォロー
                        </Button>

                        <Divider
                            sx={{
                                my: 2,
                            }}
                        />

                        <List
                            disablePadding
                            sx={{
                                "li + li": {
                                    mt: 1,
                                }
                            }}
                        >
                            {
                                props["profileLists"].map((list, index) => {
                                    return (
                                        <ListItem
                                            key={index}
                                            disableGutters
                                            disablePadding
                                            sx={{
                                                alignItems: "initial",
                                            }}
                                        >
                                            <ListItemIcon>
                                                <Tooltip
                                                    title={list["title"]}
                                                    placement="right"
                                                    sx={{
                                                        color: grey[700],
                                                    }}
                                                >
                                                    {list["icon"]}
                                                </Tooltip>
                                            </ListItemIcon>

                                            <ListItemText
                                                sx={{
                                                    whiteSpace: "pre-wrap",
                                                    m: 0,
                                                }}
                                            >
                                                {
                                                    list["content"]
                                                        ?
                                                        list["content"]

                                                        :
                                                        "未設定"
                                                }
                                            </ListItemText>
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                    </Grid>

                    <Grid
                        item
                        xs={8}
                    >
                        <Tabs
                            value={props["selectTab"]}
                            sx={{
                                borderBottom: 1,
                                borderColor: 'divider',
                            }}
                        >
                            <Tab
                                value={1}
                                label="自己紹介"
                                onClick={() => props["setSelectTab"](1)}
                            />

                            <Tab
                                value={2}
                                label="進級制作"
                                onClick={() => props["setSelectTab"](2)}
                            />

                            {/* <Tab
                                value={3}
                                label="進級制作"
                                onClick={() => props["setSelectTabs"](3)}
                            /> */}
                        </Tabs>
                    </Grid>
                </Grid>
            </Card>

            -----------------------------------------
            <Card
                sx={{
                    width: "1000px",
                    mx: "auto",
                    borderRadius: 0,
                }}
            >
                <Grid
                    container
                    sx={{
                        p: 2,
                    }}
                >
                    <Grid
                        item
                        xs={4}
                    >
                        <Box
                            sx={{
                                textAlign: "center",
                                p: 5,
                            }}
                        >
                            <Avatar
                                src={server.host + "/images/icon/" + props.profile["image"]}
                                sx={{
                                    width: "150px",
                                    height: "150px",
                                    mx: "auto",
                                    mb: 5,
                                }}
                            />

                            <Typography
                                variant="h5"
                            >
                                {props.profile["name"]}
                            </Typography>

                            <Typography
                                variant="subtitle2"
                                sx={{
                                    whiteSpace: "pre-wrap",
                                }}
                            >
                                {props.profile["course_name"]}
                            </Typography>

                            <Box
                                sx={{
                                    textAlign: "left",
                                    mt: 2,
                                }}
                            >
                                {
                                    props.profileLists.map((profileLists, index) => {
                                        return (
                                            <Grid
                                                key={index}
                                                container
                                            >
                                                <Grid
                                                    item
                                                    xs={2}
                                                >
                                                    <Tooltip
                                                        title={profileLists["title"]}
                                                        placement="right"
                                                    >
                                                        {profileLists["icon"]}
                                                    </Tooltip>
                                                </Grid>

                                                <Grid
                                                    item
                                                    xs={10}
                                                    sx={{
                                                        whiteSpace: "pre-wrap",
                                                    }}
                                                >
                                                    {
                                                        profileLists["content"]
                                                            ?
                                                            profileLists["content"] !== "-1"
                                                                ?
                                                                profileLists["content"]
                                                                :
                                                                "なし"
                                                            :
                                                            "未設定"
                                                    }
                                                </Grid>
                                            </Grid>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                    </Grid>

                    <Grid
                        item
                        xs={8}
                    >
                        <Box
                            sx={{
                                p: 5,
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    borderBottom: 1,
                                    fontWeight: "bold",
                                    mb: 2,
                                }}
                            >
                                自己紹介
                            </Typography>

                            {
                                props.profile["introduction"]
                                    ?
                                    props.profile["introduction"]
                                    :
                                    "未設定"
                            }
                        </Box>
                    </Grid>

                    <Button
                        onClick={() => window.location.replace("/profile/edit")}
                        variant="contained"
                        size="small"
                        sx={{
                            width: "80%",
                            mx: "auto",
                        }}
                    >
                        編集
                    </Button>
                </Grid>
            </Card >
        </>
    )
}

export default ProfileDetail