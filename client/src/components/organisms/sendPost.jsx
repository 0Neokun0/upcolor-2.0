import { Box, IconButton, Modal } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import { cyan } from "@mui/material/colors";

const SendPost = (props) => {
    return (
        <Box>
            <IconButton
                size="large"
                sx={{
                    position: "fixed",
                    right: 20,
                    bottom: 20,
                    backgroundColor: cyan[100],
                }}
            >
                <AddIcon />
            </IconButton>

            <Modal
                open={Boolean(props.open)}
                onClose={props.toggleModalClose}
            >

            </Modal>
        </Box>
    );
}

export default SendPost;
