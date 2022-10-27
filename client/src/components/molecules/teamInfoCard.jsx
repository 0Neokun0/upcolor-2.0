import { Box, Card, CardActions, CardContent, IconButton, TextField, Typography } from "@mui/material"
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import SaveRoundedIcon from '@mui/icons-material/SaveRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

const TeamInfoCard = (props) => {
    return (
        <Card
            variant="outlined"
        >
            <Box
                component="form"
                onSubmit={props["onSubmit"]}
            >
                <input
                    type="hidden"
                    name="type"
                    value={props["name"]}
                />

                <CardContent>
                    <Box
                        sx={{
                            borderBottom: 1,
                            mb: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                p: 1,
                            }}
                        >
                            {props["title"]}
                        </Typography>

                        {
                            props["auth"]
                            &&
                            !props["state"]
                            &&
                            <IconButton
                                size="small"
                                onClick={() => { props["toggleState"](!props["state"]) }}
                            >
                                <EditRoundedIcon />
                            </IconButton>
                        }
                    </Box>

                    {
                        props["state"]
                            ?
                            <TextField
                                size="small"
                                name="content"
                                defaultValue={props["content"]}
                                maxRows={4}
                                fullWidth
                                multiline
                            />
                            :
                            <Typography
                                sx={{
                                    whiteSpace: "pre-wrap",
                                }}
                            >
                                {
                                    props["content"] !== null
                                        ?
                                        props["content"]
                                        :
                                        "情報なし"
                                }
                            </Typography>
                    }
                </CardContent>

                <CardActions
                    sx={{
                        p: 0,
                    }}
                >
                    {
                        props["state"]
                        &&
                        <Box
                            sx={{
                                ml: "auto",
                            }}
                        >
                            <IconButton
                                type="submit"
                            >
                                <SaveRoundedIcon />
                            </IconButton>

                            <IconButton
                                onClick={() => { props["toggleState"](!props["state"]) }}
                            >
                                <CloseRoundedIcon />
                            </IconButton>
                        </Box>
                    }
                </CardActions>
            </Box>
        </Card>
    )
}

export default TeamInfoCard
