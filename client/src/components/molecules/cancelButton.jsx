import { Button } from "@mui/material"
import DeleteIcon from '@material-ui/icons/Delete'

const CancelButton = (props) => {
    return (
        <Button
            variant="contained"
            color="error"
            size={props.size}
            startIcon={<DeleteIcon />}
            onClick={props.click}
        >
            キャンセル
        </Button>
    )
}

export default CancelButton