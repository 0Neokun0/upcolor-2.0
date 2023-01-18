import { Box } from "@mui/material"
import CompanyNewsCard from "components/molecules/companyNewsCard"

const CompanyNewsList = (props) => {
    return (
        <Box>
            {
                props.companyNews
                &&
                props.companyNews.map((elem) => {
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
                        <CompanyNewsCard
                            company={props.company}
                            key={elem["company_news_id"]}
                            id={elem["company_news_id"]}
                            name={elem["user_name"]}
                            title={elem["company_news_title"]}
                            text={elem["company_news_text"]}
                            time={formattedDate}
                        />
                    )
                })
            }
        </Box>
    )
}

export default CompanyNewsList