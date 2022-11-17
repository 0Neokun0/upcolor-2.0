import { Box } from "@mui/material"

const TabPanel = (props) => {
    const {children, value, index} = props

    return (
        <div
            hidden={value !== index}
        >
            {
                value === index
                &&
                <Box
                    sx={{
                        whiteSpace: "pre-wrap",
                    }}
                >
                    {children}
                </Box>
            }
        </div>
    )
}

export default TabPanel