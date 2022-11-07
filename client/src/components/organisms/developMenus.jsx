import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const DevelopMenus = (props) => {
    return (
        props.menus
        &&
        props.menus.map((menu, index) => {
            return (
                <Card
                    sx={{
                        minWidth: 300,
                        m: 2,
                        p: 2,
                        borderRadius: "15px",
                        boxShadow: 3,
                    }}
                >
                    <CardMedia
                        sx={{
                            borderRadius: "15px",
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
                            sx={{
                                mt: 2,
                                fontSize: 20,
                                fontWeight: 'bold',
                                border: 1,
                                borderRadius: 2,
                            }}
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
