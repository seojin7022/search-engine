import express from "express";
import morgan from "morgan";

import homeRouter from "../routers/homeRouter";

const app = express();

app.set("view engine", "pug");

app.use("/static", express.static(process.cwd() + "/public"));
app.use(morgan("dev"));

app.use(homeRouter);

export default app;
