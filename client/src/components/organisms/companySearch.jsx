import { List, ListSubheader } from "@mui/material"
import { SearchEntry } from "components/molecules"

const CompanySearch = (props) => {
    return (
        <List
            sx={{
                width: "20%",
                maxWidth: 360,
                p: 2,
                minHeight: "90vh",
                maxHeight: "90vh",
                bgcolor: "background.paper",
                overflowY: "scroll",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    絞り込み
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
                        />
                    )
                })
            }
        </List>
    )
}

export default CompanySearch
