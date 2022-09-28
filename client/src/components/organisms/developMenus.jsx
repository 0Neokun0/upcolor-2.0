import { Button } from "@mui/material"
import { Link } from "react-router-dom"

const DevelopMenus = (props) => {
    return (
        props.menus
        &&
        props.menus.map((menu, index) => {
            return (
                <Button
                    key={index}
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={menu["url"]}
                    sx={props.sx}
                >
                    {menu["value"]}
                </Button>
            )
        })
    )
}

export default DevelopMenus
