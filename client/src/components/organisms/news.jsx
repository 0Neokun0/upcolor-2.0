import { Box } from "@mui/material"
import { NewsCard } from "components/molecules"

const News = (props) => {
    return (
        <Box flex={1.2} p={2} sx={{ display: { xs: "none", sm: "none", md: "block" } }}>


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
