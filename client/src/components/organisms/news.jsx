import { Box } from "@mui/material"
import { NewsCard } from "components/molecules"

const News = (props) => {
    return (
        <Box
            sx={{
                "div + div": {
                    mt: 2,
                }
            }}
        >
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
