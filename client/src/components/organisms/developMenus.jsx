import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material"
import { Link } from "react-router-dom"

const DevelopMenus = (props) => {
    return (
        props.menus &&
        props.menus.map((menu, index) => {
            return (
                <Card
                    key={index}
                    sx={props.cardSx}
                >
                    <CardMedia
                        sx={{
                            borderRadius: 2,
                            minwidth: 300,
                            height: 80,
                        }}
                        component="img"
                        image={menu["image"]}
                    />

                    <CardContent>
                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                        >
                            {menu["text"]}
                        </Typography>

                        <Button
                            key={index}
                            variant="outlined"
                            component={Link}
                            to={menu["url"]}
                            sx={props.ButtonSx}
                            color={menu["color"]}
                            startIcon={menu["startIcon"]}
                        >
                            {menu["value"]}
                        </Button>
                    </CardContent>
                </Card>
            )
        })
    )
}

export default DevelopMenus
