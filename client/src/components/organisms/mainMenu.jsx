import { Link } from 'react-router-dom'
import {
    Box,
    Card,
    Hidden,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    styled,
} from '@mui/material'

import MainMenuProfileCard from 'components/molecules/mainMenuProfileCard'

const MainMenuWrapper = styled(Box)(
    () => `
          min-width: 15%;
          position: relative;
          z-index: 7;
          height: 100%;
          padding-bottom: 10px;
  `,
)

const MainMenu = (props) => {
    return (
        <>
            <Hidden
                lgDown
            >
                <MainMenuWrapper
                    flex={1}
                    p={2}
                    position="sticky"
                    sx={{
                        mt: 2,
                        ml: 2
                    }}
                >
                    <Card
                        sx={{
                            p: 2,
                            borderRadius: '15px'
                        }}
                    >
                        <MainMenuProfileCard
                            profile={props.profile}
                        />

                        <List
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
                </MainMenuWrapper>
            </Hidden>
        </>
    )
}

export default MainMenu
