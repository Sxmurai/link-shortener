# Link Shortener

A free and open source link shortener you can use!

At the moment, I do not have a domain linked to this, but when I do it will be attached to the offical repository.

---

## Endpoints

`POST /add/`

Body Parameters:

- link (required) | `the url to redirect to`

Sample Return value:

```json
{
  "success": true,
  "data": "http://localhost:6969/string"
}
```

`GET /urls/`

Sample return value:

```json
{
  "success": true,
  "data": [
    {
      "redirect": "https://google.com/",
      "uri": "http://localhost:6969/string",
      "date": "2020-08-13T16:27:14.344Z"
    }
  ]
}
```

---

## Selfhosting on Localhost.

To selfhost this link shortener locally, you'll need to first install the following:

- [git](https://git-scm.com/)
- nodejs ([linux](https://ostechnix.com/install-node-js-linux/), [windows](https://nodejs.org/download))

After all of that is installed correctly, you can now follow these steps:

1. Clone this repository `git clone https://github.com/Sxmurai/link-shortener`
2. Go into the directory git made (`cd link-shortener`)
3. Install: `npm i -g yarn`, `npm i -g typescript`. (add sudo in front if on linux)
4. Run `yarn add` to add all of the dependencies.

You will also need to make a cluster at [mongodb](https://mongodb.com/)

Make a `config.ts` in the `src/` directory, and copy-paste the following:

```ts
export const mongo = "";

export const secret = "";
```

In the `mongo` variable put your mongodb connection string, and put a secure password in the `secret` variable.

5. Run `yarn rebuild`.
6. Run `yarn build`
7. Go to `http://localhost:port/urls` to see if it worked. (replace `port` with the port you provided in `index.ts`)
