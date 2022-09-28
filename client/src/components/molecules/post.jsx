import { Link } from 'react-router-dom'
import {
    Avatar,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    Divider,
} from '@mui/material'

const Post = (props) => {
    return (
        <Link to={'/home/' + props.id}>
            <Card
                variant="outlined"
                sx={{
                    boxShadow: 2,
                    borderRadius: '15px',
                }}
            >
                <CardActionArea
                    sx={{
                        p: 2,
                    }}
                    onClick={props.togglePostViewModalOpen}
                >
                    <CardHeader
                        avatar={<Avatar>{props.name}</Avatar>}
                        title={props.name}
                        subheader={props.time}
                        sx={{
                            p: 0,
                        }}
                    />

                    <Divider
                        sx={{
                            my: 2,
                        }}
                    />

                    <CardContent
                        sx={{
                            p: 0,
                        }}
                    >
                        {props.content}
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}

export default Post
