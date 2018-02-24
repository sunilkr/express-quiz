# express-quiz
My first node+express+pug app.
Inspired(almost ripoff of) by node-quizzer module and https://github.com/raduGaspar/node-quizzer-example

## Repo Structure:
* pulic contains css+js files related to impressjs and and icontent.css for styling view `iquiz.js`.
* public\_r contains relevaljs related files. Used only by view `index.js`
* app.js is the controller

## Current Issues
* Cannot style elements(sections) in ravaljs inside a form.
* I have tried to style `iquix.js` using impress, but interaction is disabled on all slides but the last. No idea why.

# TODO
* Install node-quizzer package `npm install node-quizzer` 
* Move `index.js`, `quizzes.json` of _node-quizzer_ from _node\_modules_ to prject folder/lib.
* Style `quiz.html` from _node-quizzer_ to make radio buttons bigger.
* Use any other method to achieve results as shown in current version of `iquiz.json`. 
* Improve the UI.
