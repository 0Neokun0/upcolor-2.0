import { Box } from "@mui/system"
import { ViewTimeTableGrid, ClassDetailDialog } from "components/organisms"

const ViewTimeTableLayout = (props) => {
    return (
        <Box
            sx={{
                width: "80%",
                minWidth: "800px",
                pt: 2,
                mx: "auto",
            }}
        >
            <ViewTimeTableGrid
                timeTable={props.timeTable}
                days={props.days}
                periods={props.periods}
                open={props.open}
            />

            <ClassDetailDialog
                lecture={props.lecture}
                dialog={props.dialog}
                close={props.close}
            />
        </Box>
    )
}

export default ViewTimeTableLayout;
