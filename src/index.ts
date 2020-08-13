import { Logger } from "@melike2d/logger";
import { connect } from "mongoose";
import { mongo } from "./config";
import { Route } from "./api";

declare global {
  const logger: Logger;
}

(global as any).logger = new Logger("link-shortener");

connect(mongo, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => logger.info(`Connected to MongoDB!`))
  .catch((err) => logger.error(`Opps,\n\n${err}`));

new Route(6969);
