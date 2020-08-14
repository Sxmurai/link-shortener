import { Application } from "express";
import { Links } from "../../models";
import fetch from "node-fetch";
import { URL } from "url";

export class Add {
  public constructor(app: Application) {
    app.post("/v1/add/", async (req, res) => {
      if (!req.body || !req.body.link)
        return res
          .send({
            success: false,
            data: "Please provide a link in the body.",
          })
          .status(404);

      if (
        !/(https?):\/\/([a-z]\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi.exec(
          req.body.link
        )
      )
        return res
          .send({
            success: false,
            data: "Invalid URL",
          })
          .status(404);

      const names = (await Links.find({})).map((data) => data.id);

      if (req.body.name && names.includes(req.body.name.toLowerCase()))
        req.body.name = undefined;

      const data = await Links.create({
        id: req.body.name ?? this.id(),
        redirectURL: req.body.link,
        date: Date.now(),
      });

      logger.info(`Added link: ${req.body.link} with id ${data.id}`);

      return res
        .send({
          success: true,
          data: `http://localhost:6969/${data.id}`,
        })
        .status(200);
    });
  }

  private id() {
    const random =
      "SxmuraiLinkShortenerAndShit0123456789ABCDEFGHNRVSDJpANfgctiUvzKqYTJkLxpZXIjHS0lRqWOshSjSpAhgSInSDU";

    let id = "",
      i = 7;

    while (i--) {
      id += random[(Math.random() * 64) | 0];
    }

    return id;
  }
}
