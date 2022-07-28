import { HomeLayout } from "components/templates"

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
        {
            id: 4,
            name: "まつお",
            time: "YYYY/MM/DD",
            content: "こんにちはまつおです。valorantが好きです。kay/oは苦手です。"
        },
        {
            id: 5,
            name: "まつお",
            time: "YYYY/MM/DD",
            content: "こんにちはまつおです。valorantが好きです。kay/oは苦手です。"
        },
        {
            id: 6,
            name: "まつお",
            time: "YYYY/MM/DD",
            content: "こんにちはまつおです。valorantが好きです。kay/oは苦手です。"
        },
        {
            id: 7,
            name: "まつお",
            time: "YYYY/MM/DD",
            content: "こんにちはまつおです。valorantが好きです。kay/oは苦手です。"
        },
        {
            id: 8,
            name: "まつお",
            time: "YYYY/MM/DD",
            content: "こんにちはまつおです。valorantが好きです。kay/oは苦手です。"
        },
        {
            id: 9,
            name: "まつお",
            time: "YYYY/MM/DD",
            content: "こんにちはまつおです。valorantが好きです。kay/oは苦手です。"
        },
        {
            id: 10,
            name: "まつお",
            time: "YYYY/MM/DD",
            content: "こんにちはまつおです。valorantが好きです。kay/oは苦手です。"
        },
    ]

    const menus = [
        {
            value: "グループ",
            url: "/group",
        },
        {
            value: "みんなの進級制作",
            url: "#",
        },
        {
            value: "自分の進級制作",
            url: "#",
        },
        {
            value: "ユーザー",
            url: "#",
        },
        {
            value: "プロフィール",
            url: "#",
        },
        {
            value: "時間割",
            url: "#",
        },
        {
            value: "設定",
            url: "#",
        },
    ]

    const news = [
        {
            id: 1,
            title: "シリコンバレー研修アンケート",
            name: "八木勇希",
            content: "急ぎの対応お願いします！ シリコンバレー研修アンケート、 参加しない学生も「参加しない」旨を入力とのことです。。。 お手数ですが、未回答の学生は入力お願いします。",
        },
        {
            id: 2,
            title: "退出処理",
            name: "友金牧人",
            content: "23卒学生各位本日より就職先が決定している学生から、このクラスルームから退出処理を行います。24卒向けの内容にシフトしていくからです。内定を獲得していて、今暫くこのクラスルームを使いたい学生はメールで連絡ください。宜しくお願いいたします。",
        },
    ]
    return (
        <HomeLayout posts={posts} menus={menus} news={news} />
    );
}

export default Home;