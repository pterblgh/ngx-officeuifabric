const { join } = require('path');

/** Current version of the project*/
const buildVersion = require('./src/lib/package.json').version;

module.exports = {
  projectVersion: buildVersion,
  projectDir: __dirname,
  srcDir: join(__dirname, 'src'),
  outputDir: join(__dirname, 'dist'),
};
