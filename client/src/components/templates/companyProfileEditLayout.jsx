import { Box } from "@mui/system"

const CompanyProfileEditLayout = (props) => {
    return (
        <Box
            sx={{
                py: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {props.children}
        </Box>
    )
}

export default CompanyProfileEditLayout
