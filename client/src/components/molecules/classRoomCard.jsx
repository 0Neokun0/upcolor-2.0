import { AssignmentIndOutlined, FolderOpenOutlined } from '@material-ui/icons'
import { Avatar, Box, Card, Hidden, IconButton } from '@mui/material'
import React from 'react'

const classCard = () => {
    return (
        <>
        <Card
            sx={{
            width: 300,
            border: 1,
            borderRadius: 5,
            overflow: 'hidden',
            cursor: 'pointer',
            }}
        >
            <Box
            sx={{
                backgroundColor: 'gray',
                height: 2,
                position: 'relative',
                color: 'white',
                padding: 10,
                borderBottom: 1,
            }}
            >
                <Box
                    sx={{
                    fontWeight: 600,
                    fontSize: 30,
                    overflow: 'hidden',
                    }}
                >
                    Name
                </Box>

                    <Avatar
                        sx={{
                        width: 56,
                        height: 56,
                        position: 'absolute',
                        right: 5,
                        }}
                        src="https://lh3.googleusercontent.com/a-/ACNPEu8jOmU15WzaLKlxcLdDbcewV5cSnXDt3FM3vMUX=s96-c"
                    />
            </Box>
            <Box
            sx={{
                height: 190,
                borderBottom: 1,
            }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 15,
                        ml: 2,
                        fontSize: 15,
                    }}
                >
                    CreatorName
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                }}
            >
                <IconButton>
                    <FolderOpenOutlined />
                </IconButton>

                <IconButton>
                    <AssignmentIndOutlined />
                </IconButton>
            </Box>
        </Card>
    </>
  )
}

export default classCard
