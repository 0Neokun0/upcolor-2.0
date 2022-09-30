const sql = require("./function/sql")

exports.save = (images) => {
    // images は下記の形で渡す
    // const images = [
    //     {
    //         url: "...",
    //         id: "...",
    //         type: "...",
    //     },
    // ]

    // type number
    // ユーザープロフィール画像: 1
    // 投稿添付画像: 2
    // DM添付画像: 3
    // グループチャット: 4
    // チームチャット: 5
    // クラスチャット: 6
    // 企業グループチャット: 7
    // 企業プロフィール画像: 8

    const sqlInsertImages = `
        INSERT INTO images(
            image_url,
            image_id,
            image_type
        )
        VALUES(
            ?,
            ?,
            ?
        )
    `

    let result = true
    try {
        images.map(async (image) => {
            await sql.handleInsertImages(sqlInsertImages, [image.url, image.id, image.type])
        })
    } catch {
        result = false
    }

    return result
}