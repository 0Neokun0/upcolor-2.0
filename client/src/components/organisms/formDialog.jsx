import { Box, Button, Dialog, DialogContent, DialogContentText, TextField, Typography } from "@mui/material"

import KeyIcon from '@mui/icons-material/Key';

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
                        <Typography
                            variant="subtitle2">
                            {props.dialogText}
                        </Typography>

                    </DialogContentText>

                    <TextField
                        color="success"
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
                        color="success"
                        type="submit"
                        variant="contained"
                        size="normal"
                        fullWidth
                        sx={{
                            mt: 2,
                        }}
                        startIcon={<KeyIcon />}
                    >
                        送信
                    </Button>
                </DialogContent>
            </Box>
        </Dialog>
    )
}

export default FormDialog
