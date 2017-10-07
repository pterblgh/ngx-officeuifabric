# Development environment

The project uses Gulp with TypeScript for building and deploying both the library and the demo-application.

### Demo application

The demo application is a basic Angular application which is used for development and testing. To serve the demo app on your local machine, you must do the following:

```bash
npm install
npm run start
```

This will start a basic development server on `localhost:8080`.

### Build process

All the build process related files can be found under the `tools/gulp` folder. The tasks can be found in the `tasks` folder. 

The build process uses a lot of helpers to create appropriate Gulp tasks, these can be found in the `helpers` folder. Each helper is a factory which wraps a common Gulp plugin and registers a task with the given parameters. The registered task name is returned so it can be used for wrapping smaller tasks into bigger ones.