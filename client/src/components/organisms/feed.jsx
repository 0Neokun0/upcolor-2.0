import { Post } from "components/molecules"
import { Box } from "@mui/material"

const Feed = (props) => {
    return (
        <Box>
            {/* {
                props.posts.map((post) => {
                    return (
                        <Post />
                    )
                })
            } */}
            <Post name="まつお" time="1111:11:11" content="どうもまつおです。ヴァロラントが大好きです。kay/oは苦手です。よろしくお願いします。"/>
        </Box>
    );
}

export default Feed;
