# hacker-meetup-mern-victory

# 🚀 Javascript full-stack 🚀

## MERN Stack

### React / Express / MongoDB / Redux

https://github.com/coding-to-music/hacker-meetup-mern-victory

https://hacker-meetup-mern-victory.herokuapp.com

by Triton Engineering Student Council

University of California San Diego Engineering Student Council

https://github.com/UCSDTESC

https://github.com/UCSDTESC/Check-in

<img src="https://github.com/UCSDTESC/Check-in/blob/master/src/assets/public/img/vectors/tesc-blue.svg" height="40px" />

# TESC Events

[![CircleCI](https://circleci.com/gh/UCSDTESC/Check-in.svg?style=svg)](https://circleci.com/gh/UCSDTESC/Check-in)

### TESC Events is a purpose-built registration and event management system for hackathons, recruiting events or any number of other student-centred initiatives.

The system allows organisers of events to create, update and manage their events registration system. Students are able to register for the events, manage their registration information and check in to the events all through the platform.

## Requirements

0. Node.js Version >= 8.2.1
1. MongoDB

## Installation

0. Clone Repository
1. Navigate to directory in bash
2. Run `npm install`
3. Copy `.env.example` to a new file `.env`
4. Enter all of the information into the `.env` file
5. Run Mongo in a Docker container - `docker run --rm -it --name tesc-checkin -p 32678:27017 mongo:latest`
6. Run `npm run migrate` to migrate and seed the database
7. If you ever need to "restart" with new data, run `npm run rollback` to remove data and migrate again

## Development

#### All pushes should be made to a feature branch

0. Run `npm start`
1. Navigate to `http://localhost:3000/`

## Acknowledgements

- [UCSD Triton Engineering Student Council](http://tesc.ucsd.edu)
- [SD Hacks](https://github.com/SDHacks)

## About the Website: Maper

- A location-based website using React as Frontend and NodeJs, ExpressJS as backend, and MongoDB as Database. On this website, I had use MapBox for the world map and React-Mapbox-gl for configuration. We can select the place where we had visited and added the photo URL, so the entry will be seen on the map and in the visited place area. We can delete or modify the changes in the Entry we had created. It is a responsive website with live location of a point on the map. The Backend is deployed on Heroku and the frontend is deployed on Netlify.

#### The Password for the Entry: maper01

## Technology Stack

- React js
- Node js
- Express js
- MongoDB
- MapBox, React Mapbox-gl
- Heroku
- Netlify
- Flexbox
- Material-ui

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Configuration

file `src/config/config.js`

and

put into `.env` and also `heroku config:set`

```java
import { config } from 'dotenv';

config();

const NodeEnv = process.env.NODE_ENV || 'development';

export const Config = {
  Port: Number(process.env.PORT) || 3000,
  NodeEnv,
  IsDev: NodeEnv === 'development',
  IsProd: NodeEnv === 'production',
  WebConcurrency: process.env.WEB_CONCURRENCY || 1,
  MongoDBURI: process.env.MONGODB_URI,
  SaltRounds: Number(process.env.SALT_ROUNDS),
  SessionSecret: process.env.SESSION_SECRET,
  SendGrid: {
    Key: process.env.SENDGRID_API_KEY,
    AcceptanceEmailID: process.env.SENDGRID_ACCEPTANCE_EMAIL_ID,
    RejectionEmailID: process.env.SENDGRID_REJECTION_EMAIL_ID,
    WaitlistEmailID: process.env.SENDGRID_WAITLIST_EMAIL_ID
  },

  S3: {
    Key: process.env.S3_KEY,
    Secret: process.env.S3_SECRET,
    Bucket: process.env.S3_BUCKET,
  },

  Mail: {
    Host: process.env.MAIL_HOST,
    Port: Number(process.env.MAIL_PORT),
    User: process.env.MAIL_USER,
    Pass: process.env.MAIL_PASS,
  },
};
```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/hacker-meetup-mern-victory.git
git push -u origin main
```

## Heroku

```java
heroku create hacker-meetup-mern-victory
```

## Heroku MongoDB Environment Variables

```java
heroku config:set

heroku config:set MONGODB_URI="mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/hacker-meetup-mern-victory?retryWrites=true&w=majority"
heroku config:set PASSWORD="something-secret"

heroku config:set PUBLIC_URL="https://hacker-meetup-mern-victory.herokuapp.com"
```

## Push to Heroku

```java
git push heroku

# or

npm run deploy
```

### Heroku Buildpack

See this repo for more info about setting up a node/react app on heroku:

https://github.com/mars/heroku-cra-node

```java
heroku buildpacks

heroku buildpacks --help

heroku buildpacks:clear

```

```java
heroku buildpacks
```

Output:

```java
=== hacker-meetup-mern-victory Buildpack URL
heroku/nodejs
```

### Notice we are doing a SET and then and ADD

```java
heroku buildpacks:set heroku/nodejs

heroku buildpacks:add mars/create-react-app
```

Output:

```java
Buildpack added. Next release on hacker-meetup-mern-victory will use:
  1. heroku/nodejs
  2. mars/create-react-app
Run git push heroku main to create a new release using these buildpacks.
```

### Lets try reversing the order

```java
heroku buildpacks:set mars/create-react-app

heroku buildpacks:add heroku/nodejs
```

```java
heroku buildpacks
```

Output:

```java
=== hacker-meetup-mern-victory Buildpack URL
heroku/nodejs
```

### Push to Heroku

```
git push heroku
```

## Error:

```java
2022-04-09T03:12:56.076028+00:00 app[web.1]: ls: cannot access '/app/build/static/js/*.js': No such file or directory
2022-04-09T03:12:56.076252+00:00 app[web.1]: Error injecting runtime env: bundle not found '/app/build/static/js/*.js'. See: https://github.com/mars/create-react-app-buildpack/blob/master/README.md#user-content-custom-bundle-location
2022-04-09T03:12:56.253505+00:00 app[web.1]: Starting log redirection...
2022-04-09T03:12:56.253698+00:00 app[web.1]: Starting nginx...
```

Attempted this:

```java
heroku config:set JS_RUNTIME_TARGET_BUNDLE=./client/build/static/js/*.js

heroku config:set JS_RUNTIME_TARGET_BUNDLE=/build/static/js/*.js

# and to remote it:

heroku config:unset JS_RUNTIME_TARGET_BUNDLE

```

## update npm packages

```java
npm install -g npm-check-updates
```

Output:

```java
removed 3 packages, changed 263 packages, and audited 264 packages in 10s

29 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

```java
ncu -u
```

Output:

```java
Upgrading /mnt/volume_nyc1_01/hacker-meetup-mern-victory/package.json
[====================] 15/15 100%

 axios                ^0.21.0  →  ^0.26.1
 bcrypt                ^5.0.0  →   ^5.0.1
 body-parser          ^1.19.0  →  ^1.20.0
 cookie-parser         ^1.4.5  →   ^1.4.6
 dotenv                ^8.2.0  →  ^16.0.0
 express              ^4.17.1  →  ^4.17.3
 express-fileupload    ^1.2.0  →   ^1.3.1
 js-cookie             ^2.2.1  →   ^3.0.1
 mongoose            ^5.10.13  →  ^6.2.10
 nodemon               ^2.0.6  →  ^2.0.15
 reactjs-popup         ^2.0.4  →   ^2.0.5
 validator           ^13.1.17  →  ^13.7.0

Run npm install to install new versions.
```

```java
npm install
```

Output:

```java
added 58 packages, removed 42 packages, changed 89 packages, and audited 299 packages in 7s

32 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Client directory

```java
cd client

ncu -u
```

```java
Upgrading /mnt/volume_nyc1_01/hacker-meetup-mern-victory/client/package.json
[====================] 18/18 100%

 @testing-library/jest-dom     ^5.11.4  →  ^5.16.4
 @testing-library/react        ^11.1.0  →  ^13.0.0
 @testing-library/user-event  ^12.1.10  →  ^14.0.4
 axios                         ^0.21.0  →  ^0.26.1
 dotenv                         ^8.2.0  →  ^16.0.0
 js-cookie                      ^2.2.1  →   ^3.0.1
 node-sass                     ^4.14.1  →   ^7.0.1
 react                         ^17.0.1  →  ^18.0.0
 react-dom                     ^17.0.1  →  ^18.0.0
 react-redux                    ^7.2.2  →   ^7.2.8
 react-router-dom               ^5.2.0  →   ^6.3.0
 react-scripts                   4.0.0  →    5.0.0
 reactjs-popup                  ^2.0.4  →   ^2.0.5
 redux                          ^4.0.5  →   ^4.1.2
 redux-thunk                    ^2.3.0  →   ^2.4.1
 web-vitals                     ^0.2.4  →   ^2.1.4

Run npm install to install new versions.
```
