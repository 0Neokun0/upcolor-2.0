import { Box, IconButton, Link, ListItem, Tooltip } from "@mui/material"

const GroupMenu = (props) => {
    return (
        <Box sx={{
            p: 1,
            m: 1,
            display: 'flex',
            justifyContent: 'flex-start',
          }}>
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
        </Box>
    )
}

export default GroupMenu
