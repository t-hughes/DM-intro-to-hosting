# DM-intro-to-hosting
basic hosting options (see branches), as presented to DevMountain bootcamp students

### VPS (Virtual Private Server)
This branch goes over instructions for deploying a project using a VPS, in this case Digital Ocean. Official instructions here: https://cloud.digitalocean.com/support/suggestions?article=droplets-how_do_i_create_a_droplet&page=0&query=. A VPS is a partition of a server that you rent. You are allotted a guaranteed amount of hard drive space, ram, and cpu power for the price tier you pay for. These resources physically exists somewhere (looks like the default is New York City). You can then access this "mini-computer" remotely and do whatever you want with it.

1. create account and login
2. click on create droplet
3. click on `One-click Apps` and select `Node 6.9.1 on 16.04` (16.04 means Ubuntu version 16.04, the operating system of your new remote computer)
4. select the cheapest tier
5. create ssh key on computer and add to droplet config
6. complete process and wait
7. once complete, you are assigned an IP address
8. `ssh root@<droplet-ip-address>`
9. `git clone <repo-url>`
10. `npm install`
11. `npm install -g nodemon forever`. nodemon for testing. forever for running while not logged in
12. `nodemon`. use port 80 by default
13. `forever start server.js`
14. add psql, similarly to how you added it to your computer. you can even hook up that remote database to your local pgAdmin program to inspect your db
