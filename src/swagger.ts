import swaggerAutogen from "swagger-autogen";

const outputFile = "./src/swagger_output.json";
const endpointsFiles = ["./src/index.ts"];

const swaggerDoc = {
  info: {
    version: "1.0.0",
    title: "My API",
    description:
      "Documentation automatically generated by the <b>swagger-autogen</b> module.",
  },
  host: "localhost:8000",
  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Posts",
      description: "Endpoints",
    },
  ],
  securityDefinitions: {
    apiKeyAuth: {
      type: "apiKey",
      in: "header", // can be "header", "query" or "cookie"
      name: "X-API-KEY", // name of the header, query parameter or cookie
      description: "any description...",
    },
  },
};

swaggerAutogen()(outputFile, endpointsFiles, swaggerDoc).then(() => {
  require("./index.ts");
});