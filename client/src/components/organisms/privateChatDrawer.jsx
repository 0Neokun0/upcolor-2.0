import { Drawer } from "@mui/material"
import { PrivateChatUsers } from "components/organisms"

const PrivateChatDrawer = (props) => {
    const { open, onClose } = props

    return (
        <Drawer
            open={open}
            onClose={onClose}
        >
            <PrivateChatUsers />
        </Drawer>
    )
}

export default PrivateChatDrawer