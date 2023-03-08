import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;
import mongoose, { ConnectOptions } from "mongoose";
import { router } from "./api/posts/posts.router";
// Define the MongoDB URI
const MONGODB_URI = "mongodb://localhost:27017/Typescript";

// Define custom options that extend ConnectOptions interface
interface CustomConnectOptions extends ConnectOptions {
  useUnifiedTopology?: boolean;
}

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as CustomConnectOptions)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

//

app.use("/", router);
// app.get("/view", (req: Request, res: Response) => {
//   console.log("test");
//   res.send("Hello, World!");
// });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
