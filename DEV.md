# Development environment

The project uses Gulp with TypeScript for building and deploying the library. The demo application uses Angular CLI which enables other developers familiar with the Angular ecosystem to easily contribute to the project.

### Demo application

The demo application is a basic Angular application which is used for development and testing. To serve the demo app on your local machine, you must do the following:

```bash
npm install
npm start
```

This will build the demo application in development mode and start the application on Angular CLI's default `4200` port.

### Build process

All the build process related files can be found under the `src/build` folder. The tasks can be found in the `tasks` folder.

The build process uses a lot of helpers to create appropriate Gulp tasks, these can be found in the `gulp-helpers` folder. Each helper is a factory which wraps a common Gulp plugin and registers a task with the given parameters. The registered task name is returned so it can be used for wrapping smaller tasks into bigger ones.
