import React from "react";
import {
  Typography,
  Card,
  styled,
  Chip,
  CardContent,
  Divider,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";

const CompanyFeatures = styled(Typography)({
  fontWeight: "bold",
  fontStyle: "italic",
  textDecorationThickness: 1,
  color: "#7e57c2",
  "&:hover": {
    color: "#673ab7",
  },
});

const CompanyFeatureCard = () => {
  return (
    <Card sx={{ maxWidth: 250, borderRadius: 12 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component={"span"}>
          <Divider>
            <Chip icon={<BusinessIcon />} label="企業" />
          </Divider>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <CompanyFeatures mb={1}>企業プロフィールを作成</CompanyFeatures>

          <CompanyFeatures mb={1}>企業情報入力</CompanyFeatures>
          <CompanyFeatures mb={1}>学生と採用フロー</CompanyFeatures>
          <CompanyFeatures mb={1}>グループ作成・管理</CompanyFeatures>
          <CompanyFeatures mb={1}>選考グループ作成</CompanyFeatures>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CompanyFeatureCard;
