import { IconButton, Link, List, ListItem, Tooltip } from "@mui/material"

const GroupMenu = (props) => {
    return (
        <List
            disablePadding
        >
            {
                props.menus.map((menu, index) => {
                    return (
                        <ListItem
                            disablePadding
                            key={index}
                        >
                            <Tooltip
                                title={menu.value}
                                placement="right"
                            >
                                <IconButton
                                    LinkComponent={Link}
                                    href={menu.url}
                                    sx={{
                                        m: "auto",
                                    }}
                                >
                                    {menu.icon}
                                </IconButton>
                            </Tooltip>
                        </ListItem>
                    )
                })
            }
        </List>
    )
}

export default GroupMenu
