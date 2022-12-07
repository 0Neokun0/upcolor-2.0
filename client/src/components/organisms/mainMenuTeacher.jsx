import { Link } from 'react-router-dom'
import { Box, Card, List, ListItem, ListItemButton, ListItemIcon } from '@mui/material'

import { MainMenuTeacherCard } from 'components/molecules'

const MainMenuTeacher = (props) => {
    return (
        <Card
            sx={{
                p: 2,

                borderRadius: "15px",
            }}
        >
            <MainMenuTeacherCard
                teacher={props["teacher"]}
            />

            <List
                disablePadding
                sx={{
                    'li + li': {
                    },
                }}
            >
                {props.teacherMenus.map((teacherMenu, index) => {
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
                                to={teacherMenu.url}
                            >
                                <ListItemIcon>
                                    {teacherMenu.icon}
                                </ListItemIcon>

                                {teacherMenu.value}
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </Card>
    )
}

export default MainMenuTeacher
