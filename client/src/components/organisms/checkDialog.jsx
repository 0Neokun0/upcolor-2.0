import { Dialog, DialogActions, DialogTitle } from "@mui/material"

const CheckDialog = (props) => {
    return (
        <Dialog open={props.openFlg} onClose={props.close}>
            <DialogTitle>
                {props.title}
            </DialogTitle>

            <DialogActions>
                {props.buttons}
            </DialogActions>
        </Dialog>
    )
}

export default CheckDialog