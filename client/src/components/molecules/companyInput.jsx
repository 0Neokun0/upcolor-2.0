import { Paper, Typography } from "@mui/material"

const CompanyInput = (props) => {
    return (
        <Paper
            sx={{
                p: 2,
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    borderBottom: 1,
                    borderColor: "lightgrey",
                    mb: 2,
                }}
            >
                {props["title"]}
            </Typography>

            {props.children}
        </Paper>
    );
}

export default CompanyInput;
