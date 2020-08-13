import { Application } from "express";
import { Links } from "../../models";

export class Info {
  public constructor(app: Application) {
    app.get("/urls", async (req, res) => {
      const data: any = await Links.find();

      return res.send({
        success: true,
        data: data.map((d) => ({
          redirect: d.redirectURL,
          uri: `http://localhost:6969/${d.id}`,
          date: d.date,
        })),
      });
    });
  }
}
