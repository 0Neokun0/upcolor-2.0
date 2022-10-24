import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";

const ClassRoomCreateClass = (props) => {

    return (
        <div>
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
                    label="クラス名"
                    type="text"
                    fullWidth
                // value={className}
                // onChange={(e) => setClassName(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={props.handleCloseClassRoomCreate}
                    color="primary"
                >
                    キャンセル
                </Button>
                <Button
                    // onClick={createClass}
                    color="primary"
                >
                    参加
                </Button>
            </DialogActions>
        </div>
    )
}

export default ClassRoomCreateClass
