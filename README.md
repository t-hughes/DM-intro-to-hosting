# DM-intro-to-hosting
basic hosting options (see branches), as presented to DevMountain bootcamp students

### Heroku
This branch goes over instructions for deploying a project using your Heroku account. Official instructions here: https://devcenter.heroku.com/start.

1. create Heroku account and login
2. install Heroku cli for your OS
3. `heroku login`
4. cd to repo
5. `heroku create` (this will create a new heroku app and show you its git url)
6. `git remote add heroku <heroku-git-url>`
7. make sure port is `80` and all changes are committed
8. `git push heroku master`
9. `heroku open`
10. add a database: https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-a-database
