import {
    Box,
    Button,
    Card,
    FormControlLabel,
    FormGroup,
    InputAdornment,
    Switch,
    TextField,
    Typography,
} from "@mui/material";

import GroupWorkRoundedIcon from "@mui/icons-material/GroupWorkRounded";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import SaveAsRoundedIcon from "@mui/icons-material/SaveAsRounded";
const TeamJoinForm = (props) => {
    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                width: "fit-content",
                borderRadius: "15px",
                boxShadow: 3,
                mx: "auto",
                mt: "80px",
                py: 2,
                px: 5,
            }}
        >
            <Box
                sx={{
                    mt: 2,
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                }}
            >
                <GroupWorkRoundedIcon sx={{
                    mr:2,
                }} fontSize="large" />
                <Typography variant="h5">進級制作チーム作成</Typography>
            </Box>

            <Box
                component={"form"}
                onSubmit={props.handleTeamCreate}
                sx={{
                    mt: 2,
                    my: 4,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <TextField
                        label="チーム名"
                        name="teamName"
                        variant="outlined"
                        size="small"
                        required
                        sx={{
                            mb: 2,
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <DriveFileRenameOutlineRoundedIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        label="作品名"
                        name="teamWorkName"
                        variant="outlined"
                        size="small"
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <BadgeRoundedIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        mt: 4,
                    }}
                >
                    <FormGroup>
                        <FormControlLabel
                            label="進捗の公開"
                            control={<Switch />}
                        />
                    </FormGroup>

                    <FormGroup>
                        <FormControlLabel
                            label="チャットの公開"
                            control={<Switch />}
                        />
                    </FormGroup>
                </Box>

                <Button
                    type="submit"
                    variant="contained"
                    size="small"
                    fullWidth
                    sx={{
                        mt: 5,
                    }}
                    startIcon={<SaveAsRoundedIcon />}
                >
                    作成
                </Button>
            </Box>
        </Card>
    );
};

export default TeamJoinForm;
