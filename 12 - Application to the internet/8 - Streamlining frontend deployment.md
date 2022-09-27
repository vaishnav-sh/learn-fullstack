# Streamlining frontend deployment

In order to generate a new version of the frontend in the future without unnecessary manual steps, new scripts are added to the package.json file of the backend.

## Heroku

- In the case of Heroku, the scripts fill as follows

```json
{
  "scripts": {
    // ...
    "build:ui": "rm -rf build && cd ../notes with backend deployed/ && npm run build && cp -r build ./server",  
    "deploy": "git push heroku main", // or fly deploy
    "deploy:full": "npm run build:ui && git add . && git commit -m uibuild && git push && npm run deploy",
    "logs:prod": "heroku logs --tail" // or fly logs
  }
}
```

- From the scripts, `npm run build:ui` compiles the ui into a production version and copies it. `npm run deploy` deploys to Heroku.

- `npm run deploy:full` combines both of those and adds the required git commands to update version control. We also add our own script `npm run logs:prod` for reading the logs, so practically everything works with npm scripts.

- Note that the paths in the `build:ui` script depend on the location of the repositories.