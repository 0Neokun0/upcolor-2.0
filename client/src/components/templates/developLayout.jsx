import { Box } from "@mui/material";

const DevelopLayout = (props) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                width: "80%",
                mx: "auto",
                textAlign: "center",
            }}
        >
            {props.children}
        </Box>
    );
};

export default DevelopLayout;
