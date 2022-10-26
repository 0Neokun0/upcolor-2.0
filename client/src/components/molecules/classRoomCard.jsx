import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';


const ClassCard = (props) => {
    return (
        <Card sx={{ minHeight: 300 }}>
            <Card
                variant="outlined"
                sx={(theme) => ({
                    width: 300,
                    mb: 2,
                    gridColumn: 'span 2',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    resize: 'horizontal',
                    overflow: 'hidden',
                    gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
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
                    <Box sx={{ display: 'flex' }}>
                        <div>
                            <Typography level="h2" sx={{ fontSize: 'md' }} mb={0.5}>
                                <Link
                                    href="#container-responsive"
                                    overlay
                                    underline="none"
                                    sx={{
                                        color: 'text.primary',
                                        '&.Mui-focusVisible:after': { outlineOffset: '-4px' },
                                    }}
                                >
                                    {props.className}
                                </Link>
                            </Typography>
                        </div>
                    </Box>
                    <AspectRatio
                        variant="soft"
                        sx={{
                            '--AspectRatio-paddingBottom':
                                'clamp(0px, (100% - 200px) * 999, 200px)',
                            pointerEvents: 'none',
                        }}
                    >
                        <Box bgcolor='gray'>

                        </Box>
                    </AspectRatio>
                    <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
                        <Avatar variant="soft" color="neutral">
                            Y
                        </Avatar>
                        <div>
                            <Typography level="body2">Neokun</Typography>

                        </div>
                    </Box>
                </Box>
            </Card>
        </Card>
    );
}

export default ClassCard