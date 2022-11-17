import { Link } from "react-router-dom"
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    Typography,
} from "@mui/material"
import { grey } from "@mui/material/colors"
import { server } from "components/config"

const PostProfile = (props) => {
    return (
        <Link to={`/home/${props["post"]["post_id"]}`}>
            <Card
                sx={{
                    boxShadow: 2,
                    borderRadius: "15px",
                }}
            >
                <CardActionArea
                    sx={{
                        p: 2,
                    }}
                >
                    <CardContent
                        sx={{
                            p: 0,
                        }}
                    >
                        <Typography
                            sx={{
                                whiteSpace: "pre-wrap",
                            }}
                        >
                            {props["post"]["post_text"]}
                        </Typography>

                        {
                            props["post"]["post_file_url"]
                            &&
                            <Box
                                sx={{
                                    width: "100%",
                                    textAlign: "center",
                                }}
                            >
                                <Box
                                    component="img"
                                    src={`${server.host}/images/post/${props["post"]["post_file_url"]}`}
                                    sx={{
                                        border: 1,
                                        borderColor: grey[500],
                                        maxWidth: "50%",
                                        maxHeight: "400px"
                                    }}
                                />
                            </Box>
                        }

                        <Typography
                            textAlign="end"
                            variant="subtitle2"
                        >
                            {props["post"]["created_at"]}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}

export default PostProfile