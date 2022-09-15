import React from 'react';
import { Avatar, Box, Button, Stack, TextField } from "@mui/material"
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';

const PostBox = () => {
    return (
        <>
            <Box sx={{ fontFamily: "Arial", width: '100%', height: '170px', borderRadius: '10px', boxShadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)' }}>
                            <Box sx={{ padding: '10px' }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: '20px'
                                }}>
                                    <Avatar sx={{ width: '50', height: '50', borderRadius: '50%', objectFit: 'cover', mr: '20px' }} />
                                    <TextField

                                        id="outlined-textarea"
                                        variant="standard"
                                        placeholder="Placeholder"
                                        multiline
                                        sx={{ width: '80%' }}
                                    />
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Box sx={{ display: 'flex', ml: '50px' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mr: '15px', cursor: 'pointer' }}>
                                                <Stack direction="row" spacing={2}>
                                                    <Button color="success" startIcon={<PhotoSizeSelectActualIcon />}>
                                                        写真
                                                    </Button>
                                                    <Button color="primary" startIcon={<PhotoSizeSelectActualIcon />}>
                                                        ビデオ
                                                    </Button>
                                                    <Button color="error" startIcon={<PhotoSizeSelectActualIcon />}>
                                                        Tag
                                                    </Button>
                                                </Stack>
                                            </Box>

                                        </Box>

                                    </Box>
                                </Box>



                            </Box>

                        </Box>
        </>
    );
}

export default PostBox;
