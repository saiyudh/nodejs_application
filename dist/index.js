/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
async function run(){
    console.log('Hello,World!');
    const GITHUB_TOKEN = core.getInput("GITHUB_TOKEN");
    const octokit = core.getOctokit(GITHUB_TOKEN);
    const { context = {} } = github;
    const { pull_request } = context.payload;
    await octokit.rest.issues.createComment({
        ...context.repo,
        issue_number: pull_request.number,
        body: "Thank you for submitting we will try to reach you",
      });
    
}

run();
module.exports = __webpack_exports__;
/******/ })()
;