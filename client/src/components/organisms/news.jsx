import { Box, Typography } from "@mui/material"
import NewsCard from "components/molecules/newsCard"

const News = (props) => {
    return (
        <Box>
            <Typography
                variant="h5"
                sx={{
                    mt: 2,
                    textAlign: "center",
                }}
            >
                先生の投稿
            </Typography>
            {
                props.news.map((elem) => {
                    return (
                        <Box
                            key={elem.id}
                        >
                            <NewsCard
                                title={elem.title}
                                name={elem.name}
                                content={elem.content}
                            />
                        </Box>
                    )
                })
            }
        </Box>
    );
}

export default News;
