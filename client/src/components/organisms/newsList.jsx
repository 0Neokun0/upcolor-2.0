import { Box } from "@mui/material"
import { NewsCard } from "components/molecules"

const NewsList = (props) => {
    return (
        <Box>
            {
                props.news
                &&
                props.news.map((elem) => {
                    const date = new Date(elem["created_at"])

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
                        <NewsCard
                            key={elem["news_id"]}
                            id={elem["news_id"]}
                            name={elem["user_name"]}
                            title={elem["news_title"]}
                            text={elem["news_text"]}
                            time={formattedDate}
                        />
                    )
                })
            }
        </Box>
    )
}

export default NewsList