import { Box, Divider } from "@mui/material"
import { ClassNewsFeedCard } from "components/molecules"

const ClassNewsFeedList = (props) => {
    return (
        <Box
            sx={{
                "div + div": {
                    mt: 2,
                }
            }}
        >
            <Divider
                sx={{
                    my: 2,
                }}
            />

            {
                props["news"]
                &&
                props["news"].map((news) => {
                    return (
                        <ClassNewsFeedCard
                            key={news["chat_id"]}
                            id={news["user_id"]}
                            name={news["user_name"]}
                            text={news["sent_text"]}
                            icon={news["image_url"]}
                            time={news["created_at"]}
                        />
                    )
                })
            }
        </Box>
    )
}

export default ClassNewsFeedList
