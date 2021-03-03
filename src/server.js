const express = require("express");
const mongoose = require("mongoose");
const app = express();
var morgan = require("morgan");
const { userRouter, blogRouter } = require("./routes");
const { generateFakeData } = require("./../faker2");

const MONGO_URI =
    "mongodb+srv://admin:Kona1234@mongodbtutorial.sl38y.mongodb.net/BlogService?retryWrites=true&w=majority";

const server = async () => {
    try {
        //await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
        await mongoose.connect(MONGO_URI);
        // mongoose.set("debug", true);
        console.log("MongoDB connected");

        // if (process.env.NODE_ENV !== "test") {
        //   app.use(morgan("dev"));
        // }
        app.use(express.json());
        app.use("/user", userRouter);
        app.use("/blog", blogRouter);

        app.listen(3000, async () => {
            console.log("Server started at port 3000");
            // console.time("insert time: ");
            // await generateFakeData(10, 2, 10);
            // console.timeEnd("insert time: ");
        });
    } catch (error) {
        console.log({ error });
    }
};

server();
