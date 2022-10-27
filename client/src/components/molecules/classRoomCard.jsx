import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Link from '@mui/joy/Link';
import { Avatar, Box, Typography } from '@mui/material';


const ClassCard = (props) => {
    return (
        <Card
            variant="outlined"
            sx={(theme) => ({
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
                    borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                    transform: 'translateY(-2px)',
                },
                '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
            })}
        >
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
                        href={"classRoomHome/" + props.classId}
                        underline="hover"
                        sx={{
                            color: 'text.primary',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        {props.className}
                    </Link>
                </Typography>
                <AspectRatio sx={{
                    '--AspectRatio-paddingBottom':
                        'clamp(0px, (70% - 200px) * 999, 100px)',
                }}
                >
                    <Box
                        bgcolor='gray'>
                        <img
                            alt='クラスルームの画像'
                            src='https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?cs=srgb&dl=pexels-pixabay-256395.jpg&fm=jpg' />
                    </Box>
                </AspectRatio>
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
                            {props.classCreator}
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Card>

    );
}

export default ClassCard