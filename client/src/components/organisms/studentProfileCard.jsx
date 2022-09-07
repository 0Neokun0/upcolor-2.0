import {
  Card,
  Typography,
  Box,
  Avatar,
  Link,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import CardOverflow from "@mui/joy/CardOverflow";
import StreetviewIcon from "@mui/icons-material/Streetview";
import SendIcon from "@mui/icons-material/Send";

const user_picture_url = "https://pbs.twimg.com/profile_images/1347689219997618179/vxEVp2Hw_400x400.jpg"
const user_name = "Nishant Meher";
const student_course_id = "情報処理ネットワーク";

function StudentProfileCard() {
  return (
    <Card
      onClick={() => alert("Hello from here")}
      elevation={10}
      direction="row"
      sx={{
        borderRadius: "25px",
        borderColor: "#00897b",
        width: 250,
        height: 220,
        gap: 2,
        backgroundColor: "#fafafa",
        "&:hover": {
          backgroundColor: "#eeeeee",
        },
        cursor: "pointer",
        flexWrap: "wrap",

        p: "5px",
      }}
    >
      <CardOverflow sx={{ mr: 1, ml: 1, mt: 1, mb: 1 }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 1, borderRadius: "10px", backgroundColor: "#90caf9", p: 1 }}
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
            sx={{ fontWeight: "bold", p: 1 }}
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
              sx={{ color: "#9e9e9e", fontWeight: "meduim" }}
            >
              {student_course_id}
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
  );
}

export default StudentProfileCard;
