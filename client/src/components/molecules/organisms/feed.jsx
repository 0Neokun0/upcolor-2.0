import { useEffect, useState } from "react";
import { Box, Stack, Skeleton } from "@mui/material";
import { Post } from "components/organisms";
import axios from "axios";

function Feed() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  setTimeout(() => {
    setLoading(false);
  }, [500]);

  useEffect(() => {
    axios.post("/post/getPostList")
    .then((res) => {
        setPosts(res.data)
        console.log(res.data)
    })
  }, []);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          {
            posts.map((post) => {
                return (
                    <Post key={post["post_id"]} title={post["user_name"]} subTitle={post["created_at"]} text={post["post_text"]}/>
                )
            })
          }
        </>
      )}
    </Box>
  );
}

export default Feed;
