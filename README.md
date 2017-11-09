<p align="center">
  <img src="https://octodex.github.com/images/codercat.jpg" height="200px"/>
  <br><br>
  <b>Comment on a pull request/issue on GitHub</b>
  <br><br>
  <img src="https://travis-ci.org/siddharthkp/github-comment.svg?branch=master&maxAge=3600"/>
</p>

&nbsp;

#### usage

```
npm install github-comment
```

&nbsp;

In your code:

```js
const comment = require('github-comment')

// comment(token, repo, issueId, body)
comment('secret_github_token', 'siddharthkp/github-comment', 1, 'this is a comment')
  .then(response => console.log(response))
  .catch(error => console.log(error))
```

you can create a [personal access token on GitHub here](https://github.com/settings/tokens)

&nbsp;

#### like it?

:star: this repo

&nbsp;

#### license

MIT © [siddharthkp](https://github.com/siddharthkp)
