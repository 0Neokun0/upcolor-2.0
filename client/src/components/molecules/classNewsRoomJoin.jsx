import { Box, Button, Dialog, TextField, Typography } from "@mui/material"

const ClassNewsRoomJoin = (props) => {
    return (
        <Dialog
            open={props["openJoin"]}
            onClose={() => props["setOpenJoin"](false)}
        >
            <Box
                component="form"
                onSubmit={props["joinClassNews"]}
                sx={{
                    p: 2,
                }}
            >
                <Typography
                    variant="h5"
                >
                    クラスに参加
                </Typography>

                <Box
                    sx={{
                        mt: 2,
                    }}
                >
                    <TextField
                        autoFocus
                        margin="dense"
                        name="id"
                        label="クラスID"
                        type="text"
                        fullWidth
                    />

                    <TextField
                        margin="dense"
                        name="password"
                        label="パスワード"
                        type="password"
                        fullWidth
                    />
                </Box>

                <Box
                    sx={{
                        mt: 2,
                        display: "flex",
                        justifyContent: "end",
                    }}
                >
                    <Button
                        onClick={() => props["setOpenJoin"](false)}
                    >
                        キャンセル
                    </Button>

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            ml: 2,
                        }}
                    >
                        参加
                    </Button>
                </Box>
            </Box>
        </Dialog>
    );
}

export default ClassNewsRoomJoin