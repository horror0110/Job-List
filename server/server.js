import cors from "cors";
import express from "express";
import { handleLogin } from "./authentication.js";
import knex from "./lib/db.js";


const { schema } = knex;
const PORT = 9000;

const app = express();

app.use(cors(), express.json());

app.post("/login", handleLogin);

app.listen({ port: PORT }, () => {
  console.log(`Express сервер ажиллаж байна : http://localhost:${PORT}`);
});
