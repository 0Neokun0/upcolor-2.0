import { Box, Chip, Divider, Typography } from "@mui/material"

const FeatureCard = (props) => {
    return (
        <Box
            sx={{
                p: 2,
                width: "30%"
            }}
        >
            <Divider>
                <Chip
                    icon={props.icon}
                    label={props.title}
                />
            </Divider>

            <Box
                sx={{
                    color: props.color,
                }}
            >
                {
                    props.features.map((feature, index) => {
                        return (
                            <Typography
                                key={index}
                                sx={{
                                    lineHeight: "2em",
                                    fontWeight: "bold",
                                }}
                            >
                                {feature}
                            </Typography>
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default FeatureCard
