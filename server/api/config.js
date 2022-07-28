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
    }
}