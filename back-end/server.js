import express from "express";
import cors from "cors";
import bodyParser from "body-parse";
import mongoose from "mongoose";

const app = express();
const router = express.Router();

app.use(cor());
app.use(bodyParser.json);

mongoose.connect('');

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB db connection established successfully.");
});

app.use("/", router);

app.listen();