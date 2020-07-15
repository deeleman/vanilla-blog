# Vanilla Blog
![CI](https://github.com/deeleman/vanilla-blog/workflows/CI/badge.svg) 
[![Netlify Status](https://api.netlify.com/api/v1/badges/c2a9a0cf-8752-4aa1-8066-df2a5d6f79e2/deploy-status)](https://app.netlify.com/sites/jovial-borg-cf1799/deploys)


Vanilla Blog is part of a personal project aimed to implement basic blog post components leveraging the [Vanilla framework](https://vanillaframework.io/). along with SASS, TypeScript and plain HTML. For the sake of compatibilty, this project implements polyfills and coding strategies to extend support to old legacy MSIE11 browsers.

A **live example** of the current status of this project can be seen at https://my-vanilla-blog.netlify.app.

## Setting up your environment
Before you start please make sure you comply with the minimum requirements: `node v12.16.0` or later and the `npm v.6.14.15` CLI or later. This project relies on [Parcel](https://parceljs.org/) for spawning dev environments, running builds and handling code optimisations. The interaction with Parcel has been abstracted within npm commands for your convenience.

### Installing dependencies
Once you have checked your node and npm versions, you will want to run either `npm install` or `yarn` to pull all the necessary dependencies for this project.

### Configuring the project settings (optional)
The project fetches data from a remote API endpoint conforming to the WordPress feed schema and has been configured to fetch 3 items only from the first page of a paginated recordset.

If you ever need to change these settings (which have been already populated for you), go to `/src/settings` and feel free to change the data configured for:
* `apiUrl`: URL of the remote API endpoint whose WordPress will be consumed.
* `pageSize`: Maximum number of items on display.
* `pageIndex`: Current page, as a zero-based integer.

Please build the project after updating this information, unless you have spawned a development environemnt (please see below), in which case the system will recompile the front-end code itself when necessary.

## Firing up a development environment
You can spawn a development environment by running `yarn start` (or `npm run start`) in the console. The system will generate all the artifacts and assets and the compiled site will become available from http://localhost:8888 in _watch mode_ (the site will be recompiled upon changes on the source code).

## Building the project for production
Please execute `yarn build` (or `npm run build`) in your terminal window. Parcel will navigate through the entire application tree and build the site within the `/dist` folder. All files will be conveniently hashed to prevent caching issues.

## Code linting and testing
The code in this application is very strictly audited with both 
[eslint](https://eslint.org/), and [jest](https://jestjs.io/). The following commands have been made available for your convenience:

- `yarn lint`: conducts linting on TypesCript files.
- `yarn test`: runs the application unit tests.


## Distributed under the MIT License

Copyright 2020 Pablo Deeleman

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
