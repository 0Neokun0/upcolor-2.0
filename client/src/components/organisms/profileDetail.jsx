import { Box, Button, Card, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Tab, Tabs, TextField, Tooltip, Typography } from "@mui/material"
import { grey, teal } from "@mui/material/colors"
import { server } from "components/config"
import { ProfileFormUnit, TabPanel } from "components/molecules"

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
                            borderRight: 1,
                            borderColor: "divider",
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
                        xs
                        sx={{
                            minWidth: "65%",
                        }}
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

                            <Tab
                                value={3}
                                label="投稿"
                                onClick={() => props["setSelectTab"](3)}
                            />

                            {/* 自分のページだけ */}
                            <Tab
                                value={4}
                                label="編集"
                                onClick={() => props["setSelectTab"](4)}
                                sx={{
                                    ml: "auto"
                                }}
                            />
                        </Tabs>

                        <Box
                            sx={{
                                p: 2,
                            }}
                        >
                            <TabPanel
                                value={props["selectTab"]}
                                index={1}
                            >
                                {
                                    props["profile"]["introduction"]
                                        ?
                                        props["profile"]["introduction"]
                                        :
                                        "未設定"
                                }
                            </TabPanel>

                            <TabPanel
                                value={props["selectTab"]}
                                index={2}
                            >
                                進級制作
                            </TabPanel>

                            <TabPanel
                                value={props["selectTab"]}
                                index={3}
                            >
                                投稿
                            </TabPanel>

                            <TabPanel
                                value={props["selectTab"]}
                                index={4}
                            >
                                <ProfileFormUnit
                                    title="一般"
                                >
                                    <TextField
                                        fullWidth
                                    />
                                </ProfileFormUnit>
                            </TabPanel>
                        </Box>
                    </Grid>
                </Grid>
            </Card>

            <Button
                onClick={() => window.location = "/profile/edit"}
                variant="contained"
                fullWidth
            >
                編集
            </Button>
        </>
    )
}

export default ProfileDetail