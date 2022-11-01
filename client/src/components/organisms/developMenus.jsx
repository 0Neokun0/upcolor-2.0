import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";

const DevelopMenus = (props) => {
    return (
        props.menus &&
        props.menus.map((menu, index) => {
            return (
                <Card sx={props.cardSx}>
                    <CardMedia
                        sx={{
                            borderRadius: 1,
                        }}
                        component="img"
                        width="250px"
                        height="70px"
                        image={menu["image"]}
                    />
                    <CardContent>
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
            );
        })
    );
};

export default DevelopMenus;
