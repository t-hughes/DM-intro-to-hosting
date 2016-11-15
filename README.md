# DM-intro-to-hosting
basic hosting options (see branches), as presented to DevMountain bootcamp students

### Firebase
This branch goes over instructions for deploying a project using your Firebase account. Official instructions here: https://firebase.google.com/docs/hosting/deploying. NOTE: you can use Firebase hosting regardless of whether you use a Firebase database.

1. navigate to the `Hosting` panel of your project's dashboard and click `Get Started`
2. `npm install -g firebase-tools`
3. `firebase init` (creates firebase.json file, similar to how npm init creates package.json)
4. `firebase deploy`
5. once the deploy process completes successfully, navigate to `https://<name-of-firebase-app>.firebaseapp.com` and behold
