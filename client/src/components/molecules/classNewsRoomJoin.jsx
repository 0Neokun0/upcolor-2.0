import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"

const ClassNewsRoomJoin = (props) => {
    return (
        <Dialog
            open={props["openJoin"]}
            onClose={() => props["setOpenJoin"](false)}
        >
            <Box>
                <DialogTitle>
                    クラスに参加
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        クラスのIDを入力して教室に参加
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        label="クラス名"
                        type="text"
                        fullWidth
                    // value={classId}
                    // onChange={(e) => setClassId(e.target.value)}
                    />
                </DialogContent>

                <DialogActions>
                    <Button
                        onClick={() => props["setOpenJoin"](false)}
                    >
                        キャンセル
                    </Button>

                    <Button>
                        参加
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
}

export default ClassNewsRoomJoin