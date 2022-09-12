import { Button } from "@mui/material"
import SaveIcon from '@material-ui/icons/Save'

const SaveButton = (props) => {
    return (
        <Button
            key={props.key}
            variant="contained"
            color="primary"
            size={props.size}
            startIcon={<SaveIcon />}
            sx={props.style}
            onClick={props.submit}
        >
            保存
        </Button>
    )
}

export default SaveButton