import { CardOverflow } from "@mui/joy"
import { Box, Card, List, ListSubheader } from "@mui/material"
import { SearchEntry } from "components/molecules"

const CompanySearch = (props) => {
    return (
        <Card sx={{
            width: 300,
            p: 1,
            borderRadius: 2,
        }}>
        <List
            sx={{
                maxWidth: 350,
                p: 2,
                bgcolor: "background.paper",
                overflowY: "hidden",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        絞り込み
                    </Box>
                </ListSubheader>
            }
        >
            {
                props.searchList
                &&
                props.searchList.map((search, index) => {
                    return (
                        <SearchEntry
                            key={index}
                            title={search.title}
                            select={search.selectList}
                            name={search.name}
                            sqlId={search.sqlId}
                            sqlName={search.sqlName}
                            set={search.set}
                            icon={search.icon}
                        />
                    )
                })
            }
        </List>
        </Card>
    )
}

export default CompanySearch
