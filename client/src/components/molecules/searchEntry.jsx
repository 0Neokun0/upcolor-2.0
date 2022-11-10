
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

import { Box, Collapse, List, ListItem, ListItemIcon, ListItemText, ToggleButton, ToggleButtonGroup } from "@mui/material"
import { useState } from 'react'

const SearchEntry = (props) => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    const [formats, setFormats] = useState(() => [])

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats)
        props.set(newFormats)
    }

    return (
        <Box sx={{
            m: 1,
        }}
        >
            <ListItem onClick={handleClick}>
                <ListItemIcon>
                    {props.icon}
                </ListItemIcon>
                <ListItemText
                    primary={props.title}
                />
                {open
                    ?
                    <ExpandLess />
                    :
                    <ExpandMore />
                }
            </ListItem>
            <Collapse
                in={open}
                timeout="auto"
                unmountOnExit
            >
                <List
                    component="div"
                    disablePadding
                >
                    <ToggleButtonGroup
                        orientation="vertical"
                        name={props.name}
                        value={formats}
                        onChange={handleFormat}
                        sx={{
                            width: 1,
                            maxHeight: "30vh",
                            overflow: "auto",
                            "::-webkit-scrollbar": {
                                width: "5px",
                            },
                            "::-webkit-scrollbar-thumb": {
                                backgroundColor: "rgba(0, 0, 50, .5)",
                                borderRadius: "5px",
                            },
                            "::-webkit-scrollbar-track": {
                                boxShadow: 2,
                            },
                        }}
                    >
                        {
                            props.select.map((value, index) => {
                                return (
                                    <ToggleButton sx={{
                                        borderRadius: '10px'
                                    }}
                                        key={index}
                                        value={value[props.sqlId]}
                                    >
                                        {value[props.sqlName]}
                                    </ToggleButton>
                                )
                            })
                        }
                    </ToggleButtonGroup>
                </List>
            </Collapse>
        </Box>
    )
}

export default SearchEntry
