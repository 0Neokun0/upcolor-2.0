module.exports = {
    db: {
        host: "localhost",
        user: "root",
        password: "",
        database: "upcolor",
    },

    jwt: {
        secret: "KARISECRETKEYKARISECRETKEYKARISECRETKEY",
        options: {
            algorithm: "HS256",
            expiresIn: "7d",
        }
    },

    server: {
        host: "192.168.22.106:3000"
    },
}