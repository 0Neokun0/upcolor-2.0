import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";

const ClassNewsCreateClass = (props) => {
    return (
        <div>
            <Dialog
                open={props.openCreate}
                onClose={() => props.setOpenCreate(false)}
            >
                <Box
                    component="form"
                    onSubmit={props.createClass}
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
                            name="classRoomName"
                            label="クラス名"
                            type="text"
                            required
                            fullWidth
                        // value={className}
                        // onChange={(e) => setClassName(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            name="classRoomPassword"
                            label="パスワード"
                            type="password"
                            required
                            fullWidth
                        // value={className}
                        // onChange={(e) => setClassName(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={() => props.setOpenCreate(false)}
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

        </div>
    )
}

export default ClassNewsCreateClass
