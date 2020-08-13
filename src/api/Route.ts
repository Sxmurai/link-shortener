import { Add, Redirects, Info, Clear } from "./routes";
import express from "express";

export class Route {
  public constructor(public port: number) {
    const app = express();

    app.use(express.json());

    new Add(app);
    new Info(app);
    new Clear(app);
    new Redirects(app);

    app.listen(port);
    logger.info(`Listening to port ${port}!`);
  }
}
