import { Box, Card, CardActions, CardContent, IconButton, MenuItem, Select, Typography } from "@mui/material"
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import SaveRoundedIcon from '@mui/icons-material/SaveRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

const TeamInfoCardSelectChip = (props) => {
    const handleChange = (e) => {
        props["set"](
            e.target.value
        )
    }
    return (
        <Card
            variant="outlined"
            sx={{
                borderRadius: 3,
            }}
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
                            <Select
                                label="専攻リスト"
                                name={props["name"]}
                                value={props["courseId"]}
                                onChange={handleChange}
                            >
                                {
                                    props.lists.map((item, index) => {
                                        return (
                                            <MenuItem
                                                key={index}
                                                value={item[props.value]}
                                            >
                                                {item[props.content]}
                                            </MenuItem>
                                        )
                                    })
                                }
                            </Select>
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

export default TeamInfoCardSelectChip
