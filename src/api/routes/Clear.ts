import { Application } from "express";
import { Links } from "../../models";
import { secret } from "../../config";

export class Clear {
  public constructor(app: Application) {
    app.get("/clear", async (req, res) => {
      if (
        !req.headers ||
        !req.headers.authorization ||
        req.headers.authorization !== secret
      )
        return res
          .send({
            success: false,
            data: "uhm, you'll need a master key for that...",
          })
          .status(403);

      await Links.deleteMany({});

      return res
        .send({ success: true, data: "Cleared Database Entries." })
        .status(200);
    });
  }
}
