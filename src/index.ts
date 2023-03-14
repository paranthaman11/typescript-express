import express, { Request, Response } from "express";

import swaggerUi from "swagger-ui-express";
const app = express();
const port = 8000;
import mongoose, { ConnectOptions } from "mongoose";
import { router } from "./api/posts/posts.router";

// Define the MongoDB URI
const MONGODB_URI = "mongodb://localhost:27017/Typescript";
import swaggerJSDoc from "swagger-jsdoc";
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

//swagger

app.use("/", router);
// Swagger configuration
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "My API",
    version: "1.0.0",
    description: "My API description",
  },
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./**/*.ts"],
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// Serve swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start the server

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerData));
// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });
