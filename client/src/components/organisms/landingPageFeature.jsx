import { Card } from "@mui/material"
import { FeatureCard } from "components/molecules";

const LandingPageFeature = (props) => {
    return (
        <Card
            variant="outlined"
            sx={{
                width: "900px",
                borderRadius: "0px",
                display: "flex",
                justifyContent: "space-between"
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
    );
}

export default LandingPageFeature;
