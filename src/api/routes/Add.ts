import { Application } from "express";
import { Links } from "../../models";
import fetch from "node-fetch";
import { URL } from "url";

export class Add {
  public constructor(app: Application) {
    app.get("/v1/add/", async (req, res) => {
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

      const data = await Links.create({
        id: this.id(),
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
