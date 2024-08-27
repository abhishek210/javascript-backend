import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
// midleware ko use krte hai with .use
console.log("app section");
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// When user submits this form, his data gets sent to your server as a URL-encoded string like:
// name=Alice&email=alice%40example.com&preferences%5Bmeals%5D=Vegetarian&preferences%5Bworkshop%5D=React+Basics

app.use(express.static("public"));
// app.use(express.static("public")): This line configures the Express app to serve static files (such as images, CSS, JavaScript) from the "public" directory.
app.use(cookieParser());

// routes import

import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);

// http://localhost:8000/api/v1/users/register

export { app };
