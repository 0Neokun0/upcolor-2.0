import { MenuItem, Select } from "@mui/material"

const SelectBox = (props) => {
    return (
        <Select
            defaultValue={props.id}
            onChange={props.change}
            sx={props.style}
        >
            {
                props.menus.map((menu, index) => {
                    return (
                        <MenuItem
                            key={index}
                            value={menu.value}
                        >
                            {menu.name}
                        </MenuItem>
                    )
                })
            }
        </Select>
    )
}

export default SelectBox