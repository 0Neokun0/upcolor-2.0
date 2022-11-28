import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";

const ClassNewsRoomCreate = (props) => {
    return (
        <Dialog
            open={props["openCreate"]}
            onClose={() => props["setOpenCreate"](false)}
        >
            <Box
                component="form"
                onSubmit={props["createClassNews"]}
            >
                <DialogTitle>
                    クラスを作成
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        クラスの名前を入力すると、クラスルームが作成されます!
                    </DialogContentText>

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
                </DialogContent>

                <DialogActions>
                    <Button
                        onClick={() => props["setOpenCreate"](false)}
                        color="primary"
                    >
                        キャンセル
                    </Button>

                    <Button
                        type="submit"
                        color="primary"
                    >
                        作成
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
}

export default ClassNewsRoomCreate