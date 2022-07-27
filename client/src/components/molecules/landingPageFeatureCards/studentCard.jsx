import React from "react";

import {
  Typography,
  Card,
  styled,
  Chip,
  CardContent,
  Divider,
} from "@mui/material";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const StudentFeatures = styled(Typography)({
  fontWeight: "bold",
  fontStyle: "italic",
  textDecorationThickness: 1,
  color: "#29b6f6",
  "&:hover": {
    color: "#03a9f4",
  },
});

const StudentFeatureCard = () => {
  return (
    <Card sx={{ maxWidth: 250, borderRadius: 12 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component={"span"}>
          <Divider>
            <Chip icon={<PeopleAltIcon />} label="学生" />
          </Divider>
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <StudentFeatures mb={1}>学生プロフィール作成・閲覧</StudentFeatures>

          <StudentFeatures mb={1}>教師投稿閲覧</StudentFeatures>
          <StudentFeatures mb={1}>個人チャット</StudentFeatures>
          <StudentFeatures mb={1}>グループ作成・管理</StudentFeatures>
          <StudentFeatures mb={1}>企業検索・企業情報</StudentFeatures>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StudentFeatureCard;
