import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";

const ClassRoomJoinClass = (props) => {

    return (
        <div>
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
                    onClick={props.handleCloseClassRoomJoin}
                    color="primary"
                >
                    キャンセル
                </Button>
                <Button
                    // onClick={joinClass}
                    color="primary"
                >
                    参加
                </Button>
            </DialogActions>
        </div>
    )
}

export default ClassRoomJoinClass
