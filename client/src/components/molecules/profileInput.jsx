import { Card, Typography } from "@mui/material"

const ProfileInput = (props) => {
    return (
        <Card
            sx={{
                p: 3,
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
        </Card>
    );
}

export default ProfileInput;
