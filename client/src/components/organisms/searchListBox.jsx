import { Hidden, Box, Card, CardHeader, List, ListSubheader } from "@mui/material"

const SearchListBox = (props) => {
    return (
        <Hidden
            lgDown
        >
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
                    title={"ユーザー検索"}
                    subheader={"UPCOLORを利用するユーザーを検索してください。"}
                />
                <List
                    sx={{
                        maxWidth: 350,
                        p: 1,
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
                    {props.children}
                </List>

            </Card>
        </Hidden>
    )
}

export default SearchListBox
