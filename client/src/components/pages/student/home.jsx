import { HomeLayout } from "components/templates"
import { Box } from "@mui/material"

const Home = () => {
    const posts = [
        {
            id: 1,
            name: "まつお",
            time: "YYYY/MM/DD",
            content: "こんにちはまつおです。valorantが好きです。kay/oは苦手です。"
        },
        {
            id: 2,
            name: "まつお",
            time: "YYYY/MM/DD",
            content: "こんにちはまつおです。valorantが好きです。kay/oは苦手です。"
        },
        {
            id: 3,
            name: "まつお",
            time: "YYYY/MM/DD",
            content: "こんにちはまつおです。valorantが好きです。kay/oは苦手です。"
        },
    ]
    return (
        <Box>
            <HomeLayout posts={posts} />
        </Box>
    );
}

export default Home;
