# Node.js API Starter Kit &nbsp; <a href="https://github.com/codeslayer1/node-api-starter-kit"><img src="https://img.shields.io/github/stars/codeslayer1/node-api-starter-kit.svg?style=social&label=Star&maxAge=3600" height="20"></a>

Minimal Lightweight starter kit for developing API Backend server based on Node.js, MySQL along with built-in support for Socket.io and Redis.


## Directory Layout

```bash
.
├── /config/                    # This directory contains all configuration files
│   ├── /env/                   # Environment depending configs go here in respective files
│   ├── /routes/                # All api route declarations go here. 
│   ├── global.js               # Global configs go here
├── /lib/                       # Custom Library files go in this folder
│   ├── custom-response.js      # Makes Custom response definitions defined in src/responses available project wide
│   ├── knex.js                 # MySQL setup using knex
│   ├── redis.js                # Redis client setup
├── /node_modules/              # Npm module files are installed here
├── /public/                    # Any files that are needed to be made public directly should go here. Files will be available at [Your_Server_Url]/filepath
├── /src/                       # Node.js application source files
│   ├── /controllers/           # Controller definitions go here. Controller name should correspond to model name
│   ├── /models/                # Model definitions go here. Model name should ideally correspond to your MySQL table name for ease of readability
│   ├── /responses/             # Custom response definitions such as error/success
│   ├── /services/              # Utility functions
│   ├── /policies/              # Access policies are defined here
│   ├── /extras/                # Any extra files that you may require must go here
├── app.js                      # Main file with setup and configuration for Express and Socket.io server 
├── package.json                # List of project dependencies
└── .foreverignore              # ignore configs for forever in case the server is run through forever 
```

## Dependencies
This project mainly depends on [Express](https://github.com/expressjs/express)  and [Knex](https://github.com/knex/knex) (for MySQL). Other dependencies such as for Redis and Socket.io can be commented in ``package.json`` if you do not need them.


## Getting Started

Just clone the repo and open the project in any code editor such as Visual Studio/Webstorm. Run npm/yarn install to install the dependencies and then start your server using npm start:

```bash
git clone https://github.com/codeslayer1/node-api-starter-kit my-api-server
cd my-api-server
npm install
npm start
```

Once you run npm start, your server will start at ``http://localhost:1337``. The sample api included with this project will be available at ``POST http://localhost:1337/v1/api-one``. You can test out the api using either CURL or Postman.

All configurations related to MySQL/Redis/Socket.io are present in config/env/development.js(or production.js). Simply replace the configs with actual values corresponding to yout MySQL/Redis servers.

For using Socket.io server, you need to uncomment the relevant code in app.js.
 
The sample api code is present in src/models and src/controllers. Once you have went through the sample api code, you can remove the ``ModelOne.js`` and ``ModelControllerOne.js`` files and add your own files. You can also install useful packages like [Async](https://github.com/caolan/async) to better structure your apis.
 
For all other files, you can check out the directory structure and associated comments to know the use case for each file/folder. You will also find relevant comments in each file. It is suggested that you go through each file once to understand its relevance to the project. 

## Deployment

The easiest way to deploy the server is by running ``npm start``. If you need to use a cluster, you can install ``pm2`` and deploy it using pm2 in cluster mode. You can read about pm2 [here](https://www.npmjs.com/package/pm2).

```bash
npm install pm2 -g
ENV=production PORT=1400 pm2 start app.js --name apis_prod -i 2 --log-date-format="YYYY-MM-DD HH:mm Z" 
```

You can deploy the server on any platform such as AWS or DigitalOcean.


## Contributing

Everyone is welcome to contribute. Please start by checking out the list of
[open issues](https://github.com/codeslayer1/node-api-starter-kit/issues). Will also appreciate any help in improving the Readme section.


## License

``node-api-starter-kit`` is released under the ``MIT license``.
