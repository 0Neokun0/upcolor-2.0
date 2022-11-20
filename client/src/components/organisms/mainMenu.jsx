import { Box, Card, List, Link, ListItem, ListItemButton, ListItemIcon, Typography } from '@mui/material'
import MainMenuProfileCard from 'components/molecules/mainMenuProfileCard'

const MainMenu = (props) => {
    return (
        <Box>
            <Card
                sx={{
                    p: 2,

                }}
            >
                <Box sx={{
                    display: "flex",
                    mb: 1,
                    p: 1,
                }}>
                <Link
                    href="/"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={props.logo}
                        alt="ロゴの画像"
                        height="30px"
                    />
                </Link>
                <Typography
                    variant="h6"
                    sx={{
                        ml: 3,
                        flexGrow: 1,
                        fontWeight: 600,
                    }}
                >
                    UPCOLOR
                </Typography>
                </Box>
                <MainMenuProfileCard
                    profile={props.profile}
                />

                <List
                    disablePadding
                    sx={{
                        'li + li': {
                            borderTop: 1,
                            borderColor: '#e3f2fd',
                        },
                    }}
                >
                    {props.menus.map((menu, index) => {
                        return (
                            <ListItem
                                disablePadding
                                key={index}
                            >
                                <ListItemButton
                                    component={Link}
                                    to={menu.url}
                                >
                                    <ListItemIcon>
                                        {menu.icon}
                                    </ListItemIcon>

                                    {menu.value}
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
            </Card>
        </Box>
    )
}

export default MainMenu
