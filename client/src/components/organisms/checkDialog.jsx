import { Box, Dialog, DialogActions, DialogTitle } from "@mui/material"

const CheckDialog = (props) => {
    return (
        <Dialog open={props.openFlg} onClose={props.close}>
            <DialogTitle>
                {props.title}
            </DialogTitle>

            <DialogActions>
                {
                    props.buttons.map((button, index) => {
                        return (
                            <Box key={index}>
                                {button}
                            </Box>
                        )
                    })
                }
            </DialogActions>
        </Dialog>
    )
}

export default CheckDialog