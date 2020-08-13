# Link Shortener

My attempt to make a link shortner, because I can.

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
