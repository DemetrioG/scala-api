import dotenv from "dotenv";
dotenv.config();

import { CONFIG } from "./config";

import server from "./app";

const port = CONFIG.app.port;

server.listen(port, async () => {
  console.log(`Servidor ativo! http://localhost:${port}`);
});
