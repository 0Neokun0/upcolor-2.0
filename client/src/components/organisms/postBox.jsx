import {
  Avatar,
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  TextField,
} from '@mui/material'
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

const PostBox = (props) => {
  return (
    <>
      <Box
        sx={{
          fontFamily: 'Arial',
          width: '100%',
          height: '170px',
          borderRadius: '10px',
          boxShadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)',
          padding: '10px',
        }}
      >
        <Box sx={{ padding: '20px' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: '20px',
            }}
          >
            <Avatar
            variant="rounded"
              sx={{
                width: '50',
                height: '50',
                borderRadius: '50%',
                objectFit: 'cover',
                mr: '20px',
              }}
            />
            <TextField
              name="text"
              id="outlined-multiline-flexible"
              variant="standard"
              placeholder="今どうしてる?"
              fullWidth
              multiline
              rows={2}
              autoFocus
              onClick={props.togglePostModalOpen}
            />
          </Box>
          <Modal
            open={Boolean(props.openPostModal)}
            onClose={props.togglePostModalClose}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component={'form'}
              onSubmit={props.handleSubmit}
              sx={{
                backgroundColor: 'white',
                width: '400px',
                py: 2,
                px: 5,
                borderRadius: '10px',
              }}
            >
              <Box textAlign="right">
                <IconButton onClick={props.togglePostModalClose}>
                  <CloseRoundedIcon />
                </IconButton>
              </Box>

              <TextField
                name="text"
                variant="standard"
                placeholder="今どうしてる?"
                fullWidth
                multiline
                rows={3}
                autoFocus
              />

              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{
                  mt: 2,
                }}
              >
                投稿
              </Button>
            </Box>
          </Modal>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box sx={{ display: 'flex', ml: '50px' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mr: '15px',
                    cursor: 'pointer',
                  }}
                >
                  <Stack direction="row" spacing={2}>
                    <Button
                      color="success"
                      startIcon={<PhotoSizeSelectActualIcon />}
                    >
                      写真
                    </Button>
                    <Button
                      color="primary"
                      startIcon={<PhotoSizeSelectActualIcon />}
                    >
                      ビデオ
                    </Button>
                    <Button
                      color="error"
                      startIcon={<PhotoSizeSelectActualIcon />}
                    >
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
  )
}

export default PostBox
