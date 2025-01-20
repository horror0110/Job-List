import cors from "cors";
import express from "express";
import { handleLogin } from "./authentication.js";
import knex from "./lib/db.js";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware as apolloExpressMiddleware } from "@apollo/server/express4";
import { readFile } from "node:fs/promises";
import { resolvers } from "./resolvers.js";

const { schema } = knex;

const PORT = 9000;

const app = express();

app.use(cors(), express.json());

app.post("/login", handleLogin);


const typeDefs = await readFile("./schema.graphql" , "utf8")

const apolloServer = new ApolloServer({ typeDefs, resolvers });

await apolloServer.start();

app.use("/graphql", apolloExpressMiddleware(apolloServer));

app.listen({ port: PORT }, () => {
  console.log(`Express сервер ажиллаж байна : http://localhost:${PORT}`);
  console.log(`Apollo graphql сэрвэр ажиллаж байна " http://localhost:${PORT}/graphql `)
});
