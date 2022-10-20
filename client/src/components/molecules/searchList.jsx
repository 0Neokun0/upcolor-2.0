import InboxIcon from '@mui/icons-material/MoveToInbox'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

import { Box, Collapse, List, ListItem, ListItemIcon, ListItemText, ToggleButton, ToggleButtonGroup } from "@mui/material"
import { useState } from 'react'

const SearchList = (props) => {
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
        <Box>
            <ListItem onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={props.title} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ToggleButtonGroup
                        orientation="vertical"
                        name={props.name}
                        value={formats}
                        onChange={handleFormat}
                        sx={{
                            width: "100%",
                            maxHeight: "50vh",
                            overflowY: "scroll",
                        }}
                    >
                        {
                            props.list.map((value, index) => {
                                return (
                                    <ToggleButton
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

export default SearchList
