import { Box } from "@mui/material"
import { NewsCard } from "components/molecules"

const NewsList = (props) => {
    return (
        <Box sx={{
            width: 1,
        }}
        >
            {
                props.news
                &&
                props.news.map((elem) => {
                    return (
                        <NewsCard
                            profile={props.profile}
                            key={elem["news_id"]}
                            name={elem["user_name"]}
                            title={elem["news_title"]}
                            text={elem["news_text"]}
                            time={elem["created_at"]}
                        />
                    )
                })
            }
        </Box>
    )
}

export default NewsList