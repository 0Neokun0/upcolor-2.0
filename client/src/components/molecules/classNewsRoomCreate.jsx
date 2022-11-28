import { Box, Button, Dialog, TextField, Typography } from "@mui/material";

const ClassNewsRoomCreate = (props) => {
    return (
        <Dialog
            open={props["openCreate"]}
            onClose={() => props["setOpenCreate"](false)}
        >
            <Box
                component="form"
                onSubmit={props["createClassNews"]}
                sx={{
                    p: 2,
                }}
            >
                <Typography
                    variant="h5"
                >
                    クラスを作成
                </Typography>

                <Box
                    sx={{
                        mt: 2,
                    }}
                >
                    <TextField
                        autoFocus
                        margin="dense"
                        name="classNewsRoomName"
                        label="クラス名"
                        type="text"
                        fullWidth
                    />

                    <TextField
                        margin="dense"
                        name="classNewsRoomPassword"
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
                        onClick={() => props["setOpenCreate"](false)}
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
                        作成
                    </Button>
                </Box>
            </Box>
        </Dialog>
    );
}

export default ClassNewsRoomCreate