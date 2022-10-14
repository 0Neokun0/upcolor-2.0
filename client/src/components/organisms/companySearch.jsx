import { List, ListSubheader } from "@mui/material"
import { SearchEntry } from "components/molecules"

const CompanySearch = (props) => {
    return (
        <List
            component="nav"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    絞り込み
                </ListSubheader>
            }
            sx={{
                width: "20%",
                maxWidth: 360,
                p: 2,
                bgcolor: "background.paper",
                overflowY: "scroll",
                "::-webkit-scrollbar": {
                    width: "5px",
                },
                "::-webkit-scrollbar-thumb": {
                    backgroundColor: "rgba(0, 0, 50, .5)",
                    borderRadius: "5px",
                },
                "::-webkit-scrollbar-track": {
                    boxShadow: 2,
                },
            }}
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
