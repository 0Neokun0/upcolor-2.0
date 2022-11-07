import { Box, Button, Card, Typography, Stack } from "@mui/material";
import { formatDistance, subHours } from "date-fns";

import BrowseGalleryIcon from "@mui/icons-material/BrowseGallery";


const GroupCompanyEventCard = (props) => {
    return (
        <>
            <Stack
                alignItems="center"
                spacing={2}
                sx={{
                    height: "calc(100vh - 64px)",
                }}
            >
                <Box display="flex" pb={1} mt={4} alignItems="center">
                    <Typography
                        sx={{
                            mr: 1
                        }}
                        variant="h5"
                    >
                        エベント・説明会
                    </Typography>

                </Box>

                <Card
                    sx={{
                        p: 2,
                        m: 2,
                        borderRadius: "25px",
                        boxShadow: 3,
                        bgcolor: '#f5f5f5',
                    }}
                >
                    <Typography variant="h4">B社株式会社</Typography>

                    <Box py={3} display="flex" alignItems="flex-start">
                        <BrowseGalleryIcon />
                        <Box pl={1}>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    lineHeight: 1,
                                }}
                                color="text.primary"
                            >
                                14:30 - 16:15
                            </Typography>
                            <Typography variant="subtitle1">
                                {formatDistance(
                                    subHours(new Date(), 4),
                                    new Date(),
                                    {
                                        addSuffix: true,
                                    }
                                )}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Button variant="contained" size="small">
                            出席
                        </Button>
                    </Box>
                </Card>
            </Stack>
        </>
    )
}

export default GroupCompanyEventCard