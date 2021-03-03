module.exports = {
    apps: [
        {
            name: "mongodb",
            script: "./src/server.js",
            watch: true,
            env: {
                PORT: 3000,
                MONGO_URI:
                    "mongodb+srv://admin:Kona1234@mongodbtutorial.sl38y.mongodb.net/BlogService?retryWrites=true&w=majority",
                NODE_ENV: "development",
            },
        },
    ],
};
