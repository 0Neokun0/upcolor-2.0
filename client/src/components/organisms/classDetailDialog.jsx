import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"

const ClassDetailDialog = (props) => {
    return (
        <Dialog
            open={Boolean(props.dialog !== false)}
            onClose={props.close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {props.lecture["lecture_name"]}
            </DialogTitle>

            <DialogContent>
                <DialogContentText>
                    教員:{props.lecture["lecture_teacher"]}
                </DialogContentText>

                <DialogContentText>
                    教室:{props.lecture["lecture_room"]}
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button
                    color="error"
                    onClick={props.close}
                >
                    閉じる
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ClassDetailDialog
