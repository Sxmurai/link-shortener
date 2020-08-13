import { Application } from "express";
import { Links } from "../../models";

export class Redirects {
  public constructor(app: Application) {
    app.get("/:id", async (req, res) => {
      const data = await Links.findOne({
        id: req.params.id,
      });

      if (!data)
        return res.send({
          message: "Invalid redirect URL",
        });

      //@ts-ignore
      logger.info(`Redirected from ID: ${data.id} to ${data.redirectURL}`);

      //@ts-ignore
      return res.redirect(data.redirectURL);
    });
  }
}
