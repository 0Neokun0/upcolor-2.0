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
                    borderRadius: "15px",
                    width: 325,
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
                        },
                    }}
                >
                    {props.companyMenus.map((companyMenu, index) => {
                        return (
                            <ListItem
                                disablePadding
                                key={index}
                            >
                                <ListItemButton
                                    sx={{
                                        borderRadius: 3,
                                    }}
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