import { Box, Typography } from "@mui/material"
import { Outlet } from "react-router-dom"

const DevelopManagementBox = (props) => {
    const { title, studentList } = props
    return (
        <Box>
            {
                title
                &&
                <Box
                    sx={{
                        width: "100%",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        borderBottom: "solid 1px #D9D9D9",
                        "& > p": {
                            ml: 3,
                        },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "24px",
                        }}
                    >
                        {title}
                    </Typography>
                </Box>
            }

            <Outlet
                context={{
                    studentList: studentList,
                }}
            />
        </Box>

    )
}

export default DevelopManagementBox
