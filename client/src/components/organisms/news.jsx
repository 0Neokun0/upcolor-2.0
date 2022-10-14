import { Box } from "@mui/material"
import { NewsCard } from "components/molecules"

const News = (props) => {
    return (
        <Box>
            {
                props.news.map((elem) => {
                    return (
                        <Box
                            key={elem.id}
                            sx={{
                                mt: 2,
                            }}
                        >
                            <NewsCard
                                title={elem.title}
                                name={elem.name}
                                text={elem.text}
                            />
                        </Box>
                    )
                })
            }
        </Box>
    );
}

export default News;
