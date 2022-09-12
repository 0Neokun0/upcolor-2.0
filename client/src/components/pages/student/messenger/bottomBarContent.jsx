import {
  Avatar,
  Tooltip,
  IconButton,
  Box,
  Button,
  styled,
  InputBase,
  useTheme,
} from '@mui/material'
import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone'
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone'

const MessageInputWrapper = styled(InputBase)(
  () => `
    font-size: 18px;
    padding: 1px;
    width: 100%;
`,
)

const Input = styled('input')({
  display: 'none',
})

const BottomBarContent = () => {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg',
  }

  return (
    <>
      <Box
        sx={{
          background: 'primary',
          display: 'flex',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Box flexGrow={1} display="flex" alignItems="center">
          <Avatar
            sx={{ display: { xs: 'none', sm: 'flex' }, mr: 1 }}
            alt={user.name}
            src={user.avatar}
          />
          <MessageInputWrapper
            autoFocus
            placeholder="Write your message here..."
            fullWidth
          />
        </Box>
        <Box>
          <Tooltip arrow placement="top" title="Choose an emoji">
            <IconButton sx={{ fontSize: 16 }} color="primary">
              😀
            </IconButton>
          </Tooltip>
          <Input accept="image/*" id="messenger-upload-file" type="file" />
          <Tooltip arrow placement="top" title="Attach a file">
            <label htmlFor="messenger-upload-file">
              <IconButton sx={{ mx: 1 }} color="primary" component="span">
                <AttachFileTwoToneIcon fontSize="small" />
              </IconButton>
            </label>
          </Tooltip>
          <Button startIcon={<SendTwoToneIcon />} variant="contained">
            送信
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default BottomBarContent
