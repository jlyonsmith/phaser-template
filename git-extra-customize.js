// This are the customization rules for use by the @johnls/git-extra tool

var params = await ui.prompts([
  {
    name: "projectName",
    initial: args.projectName,
    message: "Project name?",
    regex: "[a-z-][a-z0-9-]*",
    error: "Name must be supplied and be in param-case (all lowercase)",
  },
  {
    name: "userName",
    initial: args.userName,
    message: "GitHub user name?",
    regex: "^[a-zd](?:[a-zd]|-(?=[a-zd])){0,38}$", // From https://github.com/shinnn/github-username-regex
    error: "Must be a valid GitHub user name",
  },
])

params.projectNamePascal = changeCase.pascal(params.projectName)

let packageJson = await fs.readFile("package.json")

packageJson = packageJson
  .replace(/phaser-template/g, params.projectName)
  .replace(/some-user/g, params.userName)

await fs.writeFile("package.json", packageJson)

await fs.mkdir("scratch")
await fs.ensureFile("scratch/.gitkeep")
await git.forceAdd("scratch/.gitkeep")

await fs.mkdir(".vscode")
