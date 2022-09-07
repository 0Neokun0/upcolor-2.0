import {
  Card,
  Typography,
  Box,
  Avatar,
  Link,
  Stack,
  Divider,
  Button,
} from '@mui/material'
import CardOverflow from '@mui/joy/CardOverflow'
import StreetviewIcon from '@mui/icons-material/Streetview'
import SendIcon from '@mui/icons-material/Send'

const user_picture_url =
  'https://lh3.googleusercontent.com/a-/AOh14Ggq6rlWCSncZmTiVhxUUwBbMMqch4BPitAyBBUecg=s40-c'
const user_name = '八木勇貴'
const teacher_course_id = '情報処理ネットワーク'

const TeacherProfileCard = () => {
  return (
    <Card
      onClick={() => alert('Hello from here')}
      elevation={10}
      direction="row"
      sx={{
        borderRadius: '25px',
        borderColor: '#00897b',
        width: 250,
        height: 220,
        gap: 2,
        backgroundColor: '#fafafa',
        '&:hover': {
          backgroundColor: '#eeeeee',
        },
        cursor: 'pointer',
        flexWrap: 'wrap',

        p: '5px',
      }}
    >
      <CardOverflow sx={{ mr: 1, ml: 1, mt: 1, mb: 1 }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 1, borderRadius: '10px', backgroundColor: '#c5e1a5', p: 1 }}
        >
          <Avatar
            src={user_picture_url}
            sx={{ width: 45, height: 45 }}
          ></Avatar>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 1 }}
        >
          <Typography
            level="h1"
            fontSize="lg"
            mb={1}
            sx={{ fontWeight: 'bold', p: 1 }}
          >
            {user_name}
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 1, p: 1 }}
        >
          <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
            <Link
              overlay
              underline="none"
              href="#interactive-card"
              sx={{ color: '#9e9e9e', fontWeight: 'meduim' }}
            >
              {teacher_course_id}
            </Link>
          </Typography>
        </Box>
        <Box>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={1}
          >
            <Button size="small" startIcon={<StreetviewIcon />}>
              プロファイル
            </Button>
            <Button size="small" endIcon={<SendIcon />}>
              メッセージ
            </Button>
          </Stack>
        </Box>
      </CardOverflow>
    </Card>
  )
}

export default TeacherProfileCard
