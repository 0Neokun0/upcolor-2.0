import { Box, Card, CardHeader, List, ListSubheader } from "@mui/material"
import { SearchEntry } from "components/molecules"


const CompanySearch = (props) => {
    return (
        <Card sx={{
            width: 350,
            p: 1,
            borderRadius: 2,
            boxShadow: 3,
            overflowY: "auto",
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
            <CardHeader sx={{
                textAlign: 'center',
                p: 1,
            }}
                title={"企業検索"}
                subheader={"UPCOLORに掲載されている企業を検索してください。"}
            />
            <List
                sx={{
                    maxWidth: 350,
                    p: 2,

                }}
                component="nav"
                subheader={
                    <ListSubheader>
                        <Box sx={{
                            textAlign: 'center',
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
