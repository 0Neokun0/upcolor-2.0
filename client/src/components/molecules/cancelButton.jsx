import { Button } from "@mui/material"
import DeleteIcon from '@material-ui/icons/Delete'

const CancelButton = (props) => {
    return (
        <Button
            key={props.key}
            variant="contained"
            color="error"
            size={props.size}
            startIcon={<DeleteIcon />}
            onClick={props.close}
        >
            キャンセル
        </Button>
    )
}

export default CancelButton