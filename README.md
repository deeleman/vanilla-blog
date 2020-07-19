# Vanilla Blog
[![Netlify Status](https://api.netlify.com/api/v1/badges/c2a9a0cf-8752-4aa1-8066-df2a5d6f79e2/deploy-status)](https://app.netlify.com/sites/jovial-borg-cf1799/deploys)
[![Build Status](https://travis-ci.org/deeleman/vanilla-blog.svg?branch=master)](https://travis-ci.org/deeleman/vanilla-blog)
[![Coverage Status](https://coveralls.io/repos/github/deeleman/vanilla-blog/badge.svg?branch=master)](https://coveralls.io/github/deeleman/vanilla-blog?branch=master)
[![GitHub license](https://img.shields.io/github/license/deeleman/vanilla-blog.svg)](https://github.com/deeleman/vanilla-blog/blob/master/LICENSE)
[![GitHub version](https://badge.fury.io/gh/deeleman%2Fvanilla-blog.svg)](https://github.com/deeleman/vanilla-blog)


Vanilla Blog is a personal project aimed to implement basic blog post components leveraging the [Vanilla framework](https://vanillaframework.io/), along with custom SASS, TypeScript and plain HTML code. For the sake of cross-browser compatibility, this project implements polyfills and coding strategies to extend support to old legacy browsers, such as MSIE11.

<img width="1279" alt="Screen Shot 2020-07-15 at 1 33 25 AM" src="https://user-images.githubusercontent.com/1104146/87541318-5b2e0b80-c6a1-11ea-8f59-00fcbf86e3be.png">

A **live running build** of this project is available at https://my-vanilla-blog.netlify.app.

[![Website my-vanilla-blog.netlify.app](https://img.shields.io/website-up-down-green-red/https/my-vanilla-blog.netlify.app.svg)](https://my-vanilla-blog.netlify.app)

## Setting up your environment
The minimum requirements for running this project, either on development or production mode, and its development scripts are `node v12.16.0` and `npm v.6.14.15`, or later versions. Probably this project will run smoothly on older versions of `node` and `npm` but we recommend using the latest [LTS versions](https://nodejs.org/).

This project relies on [Parcel](https://parceljs.org/) for spawning dev environments, running builds and handling code optimisations. All interaction with Parcel has been abstracted in custom npm commands for your convenience.

### Installing dependencies
As a first step to spawn a development environment or production build, please run either `yarn` or `npm install` to pull all the required dependencies for this project.

### Configuring the project settings (optional)

> **Please note**: This step is optional and the project is shipped with all settings preconfigured by default. Feel free to skip to the next section if you do not want to customize your data preferences.

The project fetches data from a remote WordPress API endpoint. Particularly, the project will fetch by default 3 items only from the first page of a paginated recordset.

You can update this setup by accessing `/src/settings` and editing the following parameters:
* `apiUrl`: URL for the remote Wordpress API endpoint installation.
* `pageSize`: Number of items to display.
* `pageIndex`: Current page, as a zero-based integer.

You will want to rebuild the project after updating these settings, although this action will be automatically triggered by Parcel when running the application in development mode.

## Firing up a development environment
You can spawn a development environment by running `yarn start` or `npm run start` in the console.

The system will generate all the artifacts and assets and the compiled site will be available at http://localhost:8888 in _watch mode_, so the application will be recompiled upon changes on the source code.

## Building the project for production
Please execute `yarn build` or `npm run build` in your terminal window. 

Parcel will navigate through the entire application tree and build the site into the `/dist` folder. All files will be conveniently hashed to prevent caching issues.

## Code linting and testing
The code in this application is audited with 
[ESLint](https://eslint.org/) to ensure code quality, and unit tests built with [Jest](https://jestjs.io/). The following commands have been made available for your convenience:

- `yarn lint`: lints all TypeScript files, reporting code quality issues if any.
- `yarn test`: runs all the application unit tests.

### Code coverage reports
[Jest](https://jestjs.io/) has been configured to generate a full code coverage report in HTML every time the `test` command is executed. This coverage report can be found at `/coverage/lcov-report` when running tests in your local environment.

## Distributed under the MIT License

Copyright 2020 Pablo Deeleman

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
