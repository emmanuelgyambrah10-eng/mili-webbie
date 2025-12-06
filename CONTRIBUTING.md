# Contributing

Thanks for checking out the project. A few quick notes for contributing:

- Make small, focused changes and open a pull request describing the change.
- Keep commits descriptive (one purpose per commit).
- Run the repository checks locally before pushing (see `README.md`).

Pushing to GitHub

1. Create a remote repository on GitHub.
2. Add the remote to your local repo:

```powershell
git remote add origin https://github.com/<your-username>/<repo>.git
git branch -M main
git push -u origin main
```

CI

This repo includes a GitHub Actions workflow that validates `index.html` using `tidy` on each push.
