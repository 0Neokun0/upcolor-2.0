import { Box } from "@mui/material"
import { useOutletContext } from "react-router-dom"
import { StudentBarTitle } from "."

const ManagementStudent = () => {
    const studentList = useOutletContext()["studentList"]
    return (
        <Box
            sx={{
                width: "calc(100% - 48px)",
                minWidth: "1132px",
                minHeight: "calc(100vh - 201px)",
                m: 3,
            }}
        >
            <StudentBarTitle
                studnetList={studentList}
            />
        </Box>
    )
}

export default ManagementStudent
