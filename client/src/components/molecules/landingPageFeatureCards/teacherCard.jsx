import React from "react";
import {
  Typography,
  Card,
  styled,
  Chip,
  CardContent,
  Divider,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";

const TeacherFeatures = styled(Typography)({
  fontWeight: "bold",
  fontStyle: "italic",
  textDecorationThickness: 1,
  color: "#66bb6a",
  "&:hover": {
    color: "#4caf50",
  },
});

const TeacherFeatureCard = () => {
  return (
    <Card sx={{ maxWidth: 250, borderRadius: 12 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component={"span"}>
          <Divider>
            <Chip icon={<SchoolIcon />} label="教師" />
          </Divider>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <TeacherFeatures mb={1}>教師プロフィール作成・閲覧</TeacherFeatures>

          <TeacherFeatures mb={1}>教師投稿・ブログ</TeacherFeatures>
          <TeacherFeatures mb={1}>生徒の進捗閲覧</TeacherFeatures>
          <TeacherFeatures mb={1}>学生・企業グループ作成</TeacherFeatures>
          <TeacherFeatures mb={1}>授業スケジュール管理</TeacherFeatures>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeacherFeatureCard;
