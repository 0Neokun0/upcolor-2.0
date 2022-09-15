import { Box, Typography } from "@mui/material"
import { NewsCard } from "components/molecules"

const News = (props) => {
    return (
        <Box flex={1.2} p={2} sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <Box position="fixed" width={300} sx={{ mt: '2%' }}>
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
        </Box>
    );
}

export default News;
