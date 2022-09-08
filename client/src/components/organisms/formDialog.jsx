import { Box, Button, Dialog, DialogContent, DialogContentText, TextField } from "@mui/material"

const FormDialog = (props) => {
    return (
        <Dialog
            open={props.dialog}
        >
            <Box
                component="form"
                onSubmit={props.handlePassword}
            >
                <DialogContent>
                    <DialogContentText>
                        {props.dialogText}
                    </DialogContentText>

                    <TextField
                        name={props.formName}
                        type="password"
                        label="password"
                        size="small"
                        autoFocus
                        required
                        fullWidth
                        sx={{
                            mt: 2,
                        }}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        size="normal"
                        fullWidth
                        sx={{
                            mt: 2,
                        }}
                    >
                        送信
                    </Button>
                </DialogContent>
            </Box>
        </Dialog>
    )
}

export default FormDialog
