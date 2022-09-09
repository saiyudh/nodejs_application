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