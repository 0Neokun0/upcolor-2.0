import { Box } from "@mui/material"
import CompanyNewsCard from "components/molecules/companyNewsCard"

const CompanyNewsList = (props) => {
    return (
        <Box>
            {
                props.companyNews
                &&
                props.companyNews.map((elem) => {
                    return (
                        <CompanyNewsCard
                            key={elem["company_news_id"]}
                            id={elem["company_news_id"]}
                            name={elem["user_name"]}
                            title={elem["company_news_title"]}
                            text={elem["company_news_text"]}
                            time={elem["created_at"]}
                        />
                    )
                })
            }
        </Box>
    )
}

export default CompanyNewsList