import { Box } from "@mui/material"
import { SaveButton } from "components/molecules"
import { TimeTableGrid, CheckDialog } from "components/organisms"

const TimeTableLayout = (props) => {
    return (
        <Box
            sx={{
                width: "80%",
                minWidth: "800px",
                pt: 2,
                mx: "auto",
            }}
        >
            <TimeTableGrid
                viewTimeTable={props.viewTimeTable}
                days={props.days}
                periods={props.periods}
                change={props.change}
            />

            <SaveButton
                size={props.size}
                style={props.style}
                submit={props.submit}
            />

            <CheckDialog
                openFlg={props.openFlg}
                close={props.close}
                title={props.title}
                buttons={props.buttons}
            />
        </Box>
    )
}

export default TimeTableLayout