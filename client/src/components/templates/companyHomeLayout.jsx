import { Box } from "@mui/material"

const CompanyHomeLayout= (props) => {
    return (
        <Box
            sx={{
                p: 2,
            }}
        >
            {props["children"]}
        </Box>
    );
}

export default CompanyHomeLayout