import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"

const ClassDetailDialog = (props) => {
    return (
        <Dialog
            open={Boolean(props.dialog !== -1)}
            onClose={props.close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{props.lecture["lecture_name"]}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    教員:{props.lecture["lecture_teacher"]}
                </DialogContentText>
                <DialogContentText id="alert-dialog-description">
                    教室:{props.lecture["lecture_room"]}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.close} color="error">
                    閉じる
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ClassDetailDialog
