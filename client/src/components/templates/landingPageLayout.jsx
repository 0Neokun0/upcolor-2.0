import { Box, Typography } from "@mui/material"
import { LandingPageFeature } from "components/organisms"
import { LandingPageCard } from "components/molecules"

const LandingPageLayout = (props) => {
    return (
        <Box
            sx={{
                py: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <LandingPageCard
                card={props.card}
            />

            <Typography
                variant="h5"
                sx={{
                    mt: 3,
                    mb: 3
                }}
            >
                Upcolor 2.0の機能
            </Typography>

            <LandingPageFeature
                features={props.features}
            />
        </Box>
    );
}

export default LandingPageLayout;
