## Status: WIP

This is a rewrite of express-quiz without the `node_quizzer` module. 

Overall idea is to create an API which can be integrated with any UI. For this instance, I might use only Bootstrap 5 components.

## Repo structure

- `data/` contains data which is used by code. e.g. questions, responses etc.
> - `quiz.schema.json` is the json schema definition for the questions.
> - `quiz/js.json` is an example of JS questions. Should be included by default.
- `lib` contains business logic independent of frontend.
- `routes/`
> - `api.js` defines API routes to be used the UI.
> - `index.js` would be the router for SPA using BS5
