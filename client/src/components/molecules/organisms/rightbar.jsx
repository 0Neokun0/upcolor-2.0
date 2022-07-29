import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";

function RightBar() {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed" width={300} sx={{ mt: '2%' }}>
                <Typography variant="h6" fontWeight={500}>
                    授業のアナウンスメント
                </Typography>

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://www.teacheracademy.eu/wp-content/uploads/2020/02/english-classroom.jpg"
                        alt="green iguana"
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            八木勇貴
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            急ぎの対応お願いします！ シリコンバレー研修アンケート、
                            参加しない学生も「参加しない」旨を入力とのことです。。。
                            お手数ですが、未回答の学生は入力お願いします。
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button size="small">Share</Button>
                        
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    );
}

export default RightBar;
