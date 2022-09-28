import { Box, Button, Card, FormControlLabel, FormGroup, Switch, TextField, Typography } from "@mui/material"

const TeamJoinForm = (props) => {
    return (
        <Card
            sx={{
                width: "300px",
                borderRadius: "0px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                py: 5,
            }}
        >
            <Typography
                variant="h6"
            >
                進級制作チーム作成
            </Typography>

            <Box
                component={"form"}
                onSubmit={props.handleTeamCreate}
                sx={{
                    mt: 2,
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
                    />
    
                    <TextField
                        label="作品名"
                        name="teamWorkName"
                        variant="outlined"
                        size="small"
                        required
                    />
                </Box>

                <FormGroup>
                    <FormControlLabel
                        label="進捗の公開"
                        control={
                            <Switch
                            />
                        }
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        label="チャットの公開"
                        control={
                            <Switch
                            />
                        }
                    />
                </FormGroup>

                <Button
                    type="submit"
                    variant="contained"
                    size="small"
                    fullWidth
                    sx={{
                        mt: 5,
                    }}
                >
                    作成
                </Button>
            </Box>
        </Card>
    );
}

export default TeamJoinForm;
