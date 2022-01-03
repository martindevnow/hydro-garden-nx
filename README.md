# HydroGardenMonorepo

This project manages the monorepo for the HydroGarden API and device management platforms.

## Applications

- `api` - This is the NestJS-based middleware/API that IoT devices talk to, and can relay information back to the IoT devices, allowing for the device management portals to configure these devices.

> The API is built into a Docker container

- `device-admin` - This is a React-based frontend portal which is secured with Firebase auth, connected to the API to allow for easy configuration of the IoT devices.

> The device admin is a SPA, non-serverside rendered nor statically rendered, hosted on Firebase Hosting.

# Default README

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Extensible Build Framework**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@hydro-garden-monorepo/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.

# Resources

Check for port on Windows:

```powershell
Get-Process -Id (Get-NetTCPConnection -LocalPort 3334).OwningProcess
```

- [Nx + Nest + Firebase = The dream](https://itnext.io/nx-nest-firebase-the-dream-616e8ee71920)
- [Scale React Development with Nx](https://egghead.io/courses/scale-react-development-with-nx-4038)
- [Intro to Nx](https://nx.dev/l/r/getting-started/intro)
- [Nest CLI](https://docs.nestjs.com/cli/usages)
- [Setting Up A Docker Container for Nx Workspace Application](https://calebmcelrath.com/setting-up-a-docker-container-for-nx-workspace-application/)
- [Nx and Node Microservices](https://blog.nrwl.io/nx-and-node-microservices-b6df3cd1bad6)
- [Create Monorepo Flutter Apps Using Nx Workspaces](https://developer.school/tutorials/create-flutter-apps-using-nx-workspaces)
- [Configuring CI Using GitHub Actions and Nx](https://nx.dev/l/n/ci/monorepo-ci-github-actions)
- [Egghead.io Course on Nx](https://egghead.io/lessons/javascript-update-your-nx-workspace-with-nx-migrations)
