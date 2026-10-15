// Minimal CRM webhook stand-in for e2e tests. Stores the last payload in memory.
import { createServer } from "node:http";

let last = null;
createServer((req, res) => {
  if (req.method === "POST" && req.url === "/lead") {
    let body = "";
    req.on("data", (c) => (body += c));
    req.on("end", () => {
      last = { body: JSON.parse(body), signature: req.headers["x-briarstone-signature"] ?? null };
      res.end("ok");
    });
  } else if (req.url === "/last") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(last));
  } else {
    res.end("ready");
  }
}).listen(Number(process.env.MOCK_PORT ?? 3199));
