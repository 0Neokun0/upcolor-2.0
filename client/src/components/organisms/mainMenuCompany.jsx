import { Link } from "react-router-dom"
import { Card, Hidden, List, ListItem, ListItemButton, ListItemIcon } from "@mui/material"
import { MainMenuCompanyCard } from "components/molecules"

const MainMenuCompany = (props) => {
    return (
        <Hidden
            lgDown
        >
            <Card
                sx={{
                    p: 2,
                    width: 300,
                    height: 375,
                }}
            >
                <MainMenuCompanyCard
                    company={props.company}
                />

                <List
                    disablePadding
                    sx={{
                        "li + li": {
                            borderTop: 1,
                            borderColor: "#e3f2fd",
                        },
                    }}
                >
                    {props.companyMenus.map((companyMenu, index) => {
                        return (
                            <ListItem disablePadding key={index}>
                                <ListItemButton
                                    component={Link}
                                    to={companyMenu.url}
                                >
                                    <ListItemIcon>
                                        {companyMenu.icon}
                                    </ListItemIcon>

                                    {companyMenu.value}
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
            </Card>
        </Hidden>
    )
}

export default MainMenuCompany