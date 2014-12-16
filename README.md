
EbolaCallCenter
===============

Ebola Call Center

## Before you start

MongoDB is required. Ensure you have mongo installed

```brew install mongo```

and once installed, run it locally:

```mongod --dbpath /tmp```

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and npm installed

```sh
$ git clone https://github.com/ThoughtWorksInc/EbolaCallCenter.git
$ cd EbolaCallCenter
$ npm install
$ bower install
$ grunt server
```

## Running End to End Tests

Make sure you have the [chromedriver](https://www.npmjs.com/package/chromedriver) npm package installed

```npm install chromedriver```

Then run the following command:
```grunt test:e2e```
