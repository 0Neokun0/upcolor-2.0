import { Card } from "@mui/material"
import { blueGrey } from "@mui/material/colors"
import { FeatureCard } from "components/molecules"

const LandingPageFeature = (props) => {
    return (
        <Card
            elevation={10}
            sx={{
                transform: "translate(-50%,-50%)",
                position: "absolute",
                top: "100%",
                left: "50%",
                width: "900px",
                display: "flex",
                justifyContent: "space-between",
                background: `linear-gradient(to left, ${blueGrey[100]}, white)`,
            }}
        >
            {
                props.features.map((feature, index) => {
                    return (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            color={feature.color}
                            features={feature.features}
                        />
                    )
                })
            }
        </Card>
    )
}

export default LandingPageFeature
