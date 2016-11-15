# DM-intro-to-hosting
basic hosting options (see branches), as presented to DevMountain bootcamp students

### Github
This branch goes over instructions for deploying a project using your Github account. Official instructions here: https://pages.github.com/

#### Project site
1. on any of your repos, make a branch called `gh-pages` (optionally, go to Project Settings > Github Pages > change Source to whatever branch you want to use. `gh-pages` is standard and automatic for this sort of thing)
2. make sure there is an index.html file that will be used, in the root of the repo for the gh-pages branch
3. navigate to `https://<your-github-username>.github.io/<repo-name>` and there you should see served up your index.html file and any of its dependencies it pulls in

#### User site
1. make a repo called `<your-github-username>.github.io` as the repo name
2. I believe master branch is automatically used for this one. If you want a different one used, got to Project Settings > Github Pages > change Source.
3. make sure there is an index.html file that will be used in the repo root
4. navigate to `https://<your-github-username>.github.io and there you should see served up your index.html file and any of its dependencies it pulls in

#### custom domain
`github.io` domains are great for a developer profile page. But, if you want to hook it up to a custom domain name, you will need to find the settings applicable to your domain provider to configure a CNAME, which will also entail adding a CNAME file to your repo. https://help.github.com/articles/using-a-custom-domain-with-github-pages/
