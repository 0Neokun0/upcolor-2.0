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
                    const date = new Date(news["created_at"])

                    const formattedDate =
                        date.getFullYear() +
                        "/" +
                        ("0" + (date.getMonth() + 1)).slice(-2) +
                        "/" +
                        ("0" + date.getDate()).slice(-2) +
                        " " +
                        ("0" + date.getHours()).slice(-2) +
                        ":" +
                        ("0" + date.getMinutes()).slice(-2) +
                        ":" +
                        ("0" + date.getSeconds()).slice(-2)

                    return (
                        <ClassNewsFeedCard
                            key={news["chat_id"]}
                            id={news["user_id"]}
                            name={news["user_name"]}
                            text={news["sent_text"]}
                            icon={news["image_url"]}
                            time={formattedDate}
                        />
                    )
                })
            }
        </Box>
    )
}

export default ClassNewsFeedList
