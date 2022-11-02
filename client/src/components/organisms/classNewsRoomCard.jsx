import { Avatar, Box, Card, CardMedia, Link, Typography } from "@mui/material"

const ClassNewsRoomCard = () => {
    return (
        <>
            <Card
                variant="outlined"
                sx={{
                    bgcolor: 'white',
                    width: 300,
                    height: 200,
                    p: 2,
                    mb: 2,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    resize: 'horizontal',
                    overflow: 'hidden',
                    borderRadius: '25px',
                    transition: 'transform 0.3s, border 0.3s',
                    '&:hover': {

                        transform: 'translateY(-2px)',
                    },
                    '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },

                }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        maxWidth: 200,
                    }}
                >
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                            height: 15,
                            textOverflow: 'ellipsis',
                        }}
                    >
                        <Link
                            // href={"classRoomHome/" + props.classId + "/" + props.className}
                            underline="hover"
                            sx={{
                                color: 'text.primary',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            {/* {props.className} */}
                            ClassName
                        </Link>
                    </Typography>
                    <CardMedia
                        component="img"
                        height="100"
                        image="https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?cs=srgb&dl=pexels-pixabay-256395.jpg&fm=jpg'"
                    />
                    <Box sx={{
                        display: 'flex',
                        gap: 1.5,
                        mt: 'auto'
                    }}
                    >
                        <Avatar>
                            ドウミ
                        </Avatar>
                        <Typography
                            variant='h8'>
                            <Link
                                href=""
                                underline="hover"
                                sx={{
                                    color: 'text.primary',
                                    '&.Mui-focusVisible:after': { outlineOffset: '-4px' },
                                }}
                            >
                                {/* {props.classCreator} */}
                                doumi
                            </Link>
                        </Typography>
                    </Box>
                </Box>

            </Card>

        </>
    )
}

export default ClassNewsRoomCard
