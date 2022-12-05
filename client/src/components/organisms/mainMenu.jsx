import { Link } from 'react-router-dom'
import { Box, Card, List, ListItem, ListItemButton, ListItemIcon } from '@mui/material'

import MainMenuProfileCard from 'components/molecules/mainMenuProfileCard'

const MainMenu = (props) => {
    return (
        <Box>
            <Card
                sx={{
                    p: 2,
                    borderRadius: "15px",
                }}
            >
                <MainMenuProfileCard
                    profile={props.profile}
                />

                <List
                    disablePadding
                    sx={{
                        'li + li': {
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
                                    sx={{
                                        borderRadius: "15px",
                                    }}
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
